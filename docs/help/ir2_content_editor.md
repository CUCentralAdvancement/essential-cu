# IR21 Content Editor Help

This document will guide you through how to edit and add stories to the CMS for the 2020 Impact Report.

- Login and User Accounts link
- Administrative Tasks
- Content Entry and Editing

## Login and User Account

Someone will provision a user for you with the "IR21 Content Editor" role. You will need to use the login 
screen to log in and to reset your password at least once.

### Logging In

You will receive an email with your username and a link to reset your password for that account.

<img width="1076" alt="Screen Shot 2020-09-28 at 2 22 41 PM" src="https://user-images.githubusercontent.com/3640707/94470755-19880980-0196-11eb-97f4-b381dc4eb316.png">

After clicking the link, you'll be prompted to change your password.

<img width="912" alt="Screen Shot 2020-09-28 at 11 30 26 AM" src="https://user-images.githubusercontent.com/3640707/94470487-c1e99e00-0195-11eb-86ad-7542bb9e9e3f.png">

Now, you can log in to the production site with your username and new password.

### Reset Password

Eventually, you will be able to rest your password yourself by using Drupal's built-in functionality, but we 
first have to set up email routing.

<img width="644" alt="Screen Shot 2020-09-28 at 11 32 52 AM" src="https://user-images.githubusercontent.com/3640707/94470482-c0b87100-0195-11eb-8a85-76c5437793ab.png">

For now, ask a team member with elevated permissions to send you a password reset link to the email account associated with your user.

...also add the Drush over HTTP method?

## Content Overview

You can get to the content overview screen from the admin toolbar.

<img width="335" alt="Screen Shot 2020-09-28 at 2 25 02 PM" src="https://user-images.githubusercontent.com/3640707/94471825-ca42d880-0197-11eb-844a-e55d72d7fc77.png">

On the content overview screen, you will see a list of all stories that you can edit or delete as well as a way to add content. You'll also be able to view the
files used as images on a separate tab.

<img width="823" alt="Screen Shot 2020-09-28 at 2 45 29 PM" src="https://user-images.githubusercontent.com/3640707/94472833-51dd1700-0199-11eb-9534-1a2925e35ffa.png">

The "used in" column will show you what stories the images are used in.

### Content Editing

To add a story, click "Add content" or use admin toolbar link "Content => Add Content => Story".

<img width="1407" alt="Screen Shot 2020-09-28 at 2 36 01 PM" src="https://user-images.githubusercontent.com/3640707/94472019-1ee65380-0198-11eb-832e-9504863041c0.png">

You'll be taken to a screen with a blank form to fill in with content for Story fields. The red asterisks mark required fields. Although not every field might
have an asterisk, they all should be filled in order to make the frontend render correctly.

<img width="741" alt="Screen Shot 2020-09-28 at 3 48 48 PM" src="https://user-images.githubusercontent.com/3640707/94479018-23b00500-01a2-11eb-813c-3993523cc187.png">

### Editing Caveats

There are a few caveats to remember while creating content.

- **Image File Names** - Image file names should only include alphanumeric characters and dashes, e.g. "my-file.jpg" and not "my./file.jpg". It is okay
  to leave the file extension in the name.
- **Uploading The Same Image** - In the future, a Media Library will allow placing the same media asset in multiple places, but for now, the files have
  to be uploaded twice. The files can't have the same name so a common practice is to add a number after the file name, e.g. "my-file-1.jpg".
- **Image Size** - Please compress and format images before uploading them. The default upload size for images is set to 2MB, which should be large
  enough for all images used in stories. "Export for Web" in Adobe Photoshop is a good way to reduce file size. You can google "online image compression"
  to find other services to use.

### Title and Slug Fields

These are text fields. The story slug is how the story will be navigated to on the frontend. Only alphanumeric characters and dashes should be used
in the slug field.

### Body and Subtitle WYSIWYG Field

The "Summary" field equates to the "subtitle" field on the frontend. It is plain text.

The body field uses CKEditor 4 and contains a toolbar with buttons to help with editing. There is a "paste from Word" button on the editor to use for
copying article text; however, it might not work in your browser.

<img width="747" alt="Screen Shot 2020-09-28 at 2 54 09 PM" src="https://user-images.githubusercontent.com/3640707/94473789-ae8d0180-019a-11eb-85a8-8081dd79dbb3.png">

If needed, follow the help text to copy and paste, usually `cmd+v` or `ctl+v` on Mac and Windows, respectively.

With text in the editor, now you will need to add markup for the block quotes. IF you highlight the quoted text and click on the "Block Quote" icon in
the CKEditor toolbar, then proper markup is added and you should see the quote center-align.

<img width="1073" alt="Screen Shot 2020-09-28 at 2 58 21 PM" src="https://user-images.githubusercontent.com/3640707/94474189-4985db80-019b-11eb-9cfd-c93de131a8aa.png">

You can add images between paragraphs by clicking the "Image" icon in the CKEditor toolbar. That will take you to a modal screen that allows you to
upload an image, add alt text, and also add a caption.

<img width="888" alt="Screen Shot 2020-09-28 at 3 02 13 PM" src="https://user-images.githubusercontent.com/3640707/94474506-bef1ac00-019b-11eb-8b78-fa29e4fdc47e.png">

Upon saving the modal form, you'll see the image inserted into the WYSIWYG with the option to add a caption at the bottom of the image.

<img width="608" alt="Screen Shot 2020-09-28 at 3 04 14 PM" src="https://user-images.githubusercontent.com/3640707/94474723-07a96500-019c-11eb-9921-fd136b7e8fdd.png">

### Priority Field

This is a number field that can only take integers. Givign a story a higher priority moves it closer to the top of the stories list on the homepage
and related stories modules.

### Campus and Interest Tag

The tags are added by an autocomplete field. Simply start typing the campus or interest and choose from the available options. If you need to add
more tags, ask a team member with elevated permissions.

<img width="616" alt="Screen Shot 2020-09-28 at 3 06 15 PM" src="https://user-images.githubusercontent.com/3640707/94475014-7dadcc00-019c-11eb-88ab-75dbcccfbe62.png">

### Image Card and Image Main Fields

These fields function in many ways the same as inserting an image in the WYSIWYG editor. Always give the images alt text and the caption is optional AFAIK.

<img width="750" alt="Screen Shot 2020-09-28 at 3 09 36 PM" src="https://user-images.githubusercontent.com/3640707/94475707-75a25c00-019d-11eb-93a6-bc6610531dc0.png">

After saving the story, you will see an unstyled list of the fields. You can click "edit" at the top of the page to edit the same story or go back to
the content overview via methods mentioned above.
