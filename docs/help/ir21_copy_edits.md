# Editing Homepage and Financials Content

Editing the copy of the financials and homepage sections of the impact report can be accomplished
by using GitHub's UI.

Editing Links:
- [Financials page](https://github.com/CUCentralAdvancement/essential-cu/edit/main/pages/impact-reports/joy/financials.tsx)
- [Homepage](https://github.com/CUCentralAdvancement/essential-cu/edit/main/pages/impact-reports/joy/index.tsx)

Once on those pages, you can edit the text just like in any plain text editor. There are no WYSIWYG 
features as this is code you are editing. There are, however, a few tips to keep in mind.

## Editing Tips

- **Spacing** - The editor with try to automatically insert the spacing, but you should indent each line 2 
  spaces from the previous HTML tag. While editing content, you'll probably be inside paragraphs, 
  `<p></p>` or headings, `<h2></h2>`. and you should never have to add HTML tags to the page.
- **Adding HTML** - If you have edits that require adding new sections and not updating content in 
  existing places, you'll need to adjust the HTML. You can tag a developer to help with adjusting the HTML.
  Providing more tips on adding HTML will get confusing quickly so it's best to just @ a developer in you 
  commit message.
- **String Concatenations** - Occasionally, you will see strings broken up that you might want to edit, 
  like alt text. Alt text is passed as a variable to a component so it's not like text in paragraphs or 
  headings. The text in some places is broken to reduce the line length and needs to be in the form of 
  `alt={"my string" + "my second string"}`. Placing of the brackets, quote marks, and plus signs must 
  follow that pattern or the build might break.

## Committing Changes

At the bottom of the page, you will see options for committing the change. You should always select "Create 
a new branch" when you want to submit changes for review. 

<img width="907" alt="Screen Shot 2021-10-29 at 10 46 48 AM" src="https://user-images.githubusercontent.com/3640707/139464610-ce4b1431-12ee-46d6-a1a1-dc04ce496bf6.png">

You can click the "Learn more about pull requests" link to read more about pull requests, but after 
clicking to propose the code changes, you'll be taken to a pull request creation screen with the commit 
message and comments copied over.

You should scroll down and review all changes made to files. In the split view, you can see the code 
before in red on the left side and the changed code in green on the right side.

<img width="1667" alt="Screen Shot 2021-10-29 at 10 54 27 AM" src="https://user-images.githubusercontent.com/3640707/139465742-563ab12c-ed67-4bef-a4cd-9ab8f2ea3e30.png">

In that screenshot, the alt text is changed and the changed parts highlighted in darker red and green.

## Add A Reviewer

Now that the code is committed to a branch, you can add a reviewer to the commit to check it out.

<img width="455" alt="Screen Shot 2021-10-29 at 10 55 51 AM" src="https://user-images.githubusercontent.com/3640707/139466044-60728f55-95cf-4aee-915a-db7ad5917434.png">

You can also see some tests running. The tests should all finish with green checkmarks on them. You 
shouldn't merge in any changes if any test fails.

You can also view a preview of the impact report site by clicking "View deployment" above the checks area. 
You'll need to manually navigate to "/impact-reports/joy" since no links to the impact report appear on 
the "/index.html" root page.

<img width="908" alt="Screen Shot 2021-10-29 at 10 59 48 AM" src="https://user-images.githubusercontent.com/3640707/139466511-f6248003-75d4-48a7-b682-b441dd1af9a3.png">

## Merging Code

Once the code has been reviewed and checked on the preview Heroku environment, it can be merged into the 
main branch which will deploy it to https://essential-staging-cu.herokuapp.com/impact-reports/joy.

From there, a developer needs to deploy it to the final https://essential.cu.edu/impact-reports/joy 
production URL.
