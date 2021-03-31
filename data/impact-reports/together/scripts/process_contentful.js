/*************************************************** 
* Instructions:
* 1) Use contenful-cli to export data
* 2) Point to exported json file in `main()`
* 3) (optional) Update destination file in `main()`
* 4) Run `node process_contentful.js` in terminal
****************************************************/


/* eslint-disable no-prototype-builtins */
const fs = require("fs");

const getFilterFn = (pred, val) => (entry) =>
  pred.split(".").reduce((acc, v) => acc[v], entry)["en-US"] === val;
const removeLocale = (fields) => {
  return Object.entries(fields).reduce((acc, [fieldname, fieldvalue]) => {
    return {
      ...acc,
      [fieldname]: fieldvalue.hasOwnProperty("en-US")
        ? fieldvalue["en-US"]
        : fieldvalue,
    };
  }, {});
};

class ContentfulClient {
  constructor({ filepath, space, accessToken }) {
    this.store = require(filepath);
    this.space = space;
    this._accessToken = accessToken;
  }
  getEntries({ content_type, systype = "entries", ...filters }) {
    const populateLinkedFields = (fields) => {
      return Object.keys(fields).reduce((acc, curr) => {
        return {
          ...acc,
          [curr]: Array.isArray(fields[curr])
            ? fields[curr].map((field) => populateField(field))
            : populateField(fields[curr]),
        };
      }, {});
    };

    const populateField = (field) => {
      return field?.sys?.type === "Link"
        ? field.sys?.linkType === "Entry"
          ? {
              ...field,
              fields: populateLinkedFields(
                removeLocale(
                  this.store["entries"].find(
                    (entry) => entry?.sys?.id === field.sys.id
                  )?.fields
                )
              ),
            }
          : {
              ...field,
              fields: populateLinkedFields(
                removeLocale(
                  this.store["assets"].find(
                    (entry) => entry?.sys?.id === field.sys.id
                  )?.fields
                )
              ),
            }
        : field;
    };

    return this.store[systype]
      .filter(
        (entry) =>
          (entry?.sys?.contentType?.sys?.id === content_type ||
            entry?.sys?.type === content_type) &&
          Object.entries(filters).reduce(
            (acc, [filterPred, filterValue]) =>
              acc && getFilterFn(filterPred, filterValue)(entry),
            true
          )
      )
      .map((entry) => {
        // recursive walk through fields to populate linked entries
        return {
          ...entry,
          fields: populateLinkedFields(removeLocale(entry.fields)),
        };
      });
  }
}

const convertToJson = ({ srcFilepath, destFilepath, ...clientParams }) => {
  const client = new ContentfulClient({
    filepath: srcFilepath,
    space: "irrelevant",
    accessToken: true,
  });

  fs.writeFileSync(
    destFilepath,
    JSON.stringify(client.getEntries(clientParams), null, 2)
  );
};

const main = () => {
  const srcFilepath =
    "./contentful-export-khwe2cmy5m70-master-2021-03-19T09-10-98.json";

  convertToJson({
    srcFilepath,
    destFilepath: "contentful-stories-populated.json",
    content_type: "story",
    "fields.indludeInAr10": true,
  });
};

main();