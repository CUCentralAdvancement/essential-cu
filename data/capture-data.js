const https = require("https");
const fs = require("fs");
const helpers = require("./helpers");
const baseURL = "https://digital-dash-adv-cu.herokuapp.com";

// Capture Stories collection.
https.get(`${baseURL}/api/stories`, (res) => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", (data) => {
    body += data;
  });
  res.on("end", () => {

    fs.writeFile("./data/stories/stories.json", body, (err) => {
      if (err) console.log(err);
      else {
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync("./data/stories/stories.json", "utf8"));
      }
    });

    body = JSON.parse(body);
    // console.log(body);
    // const stories = helpers.formatStoryData(body);
    const paths = body.map((el) => el.slug);

    paths.forEach((slug) => {
      https.get(
        `${baseURL}/api/story/${slug}`,
        (res) => {
          res.setEncoding("utf8");
          let body2 = "";
          res.on("data", (data) => {
            body2 += data;
          });
          res.on("end", () => {
            // console.log(body2);

            fs.writeFile(`./data/stories/${slug}.json`, body2, (err) => {
              if (err) console.log(err);
              else {
                console.log("File written successfully\n");
                console.log("The written has the following contents:");
                console.log(
                  fs.readFileSync(`./data/stories/${slug}.json`, "utf8")
                );
              }
            });
          });
        }
      );
    });
  });
});
