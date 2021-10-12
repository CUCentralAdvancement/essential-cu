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

For now, ask a team member with elevated permissions to send you a password reset link to the email account 
associated with your user.

## Content Overview

You can get to the impact reports overview screen from the admin toolbar by clicking on "Impact Reports".

<img width="424" alt="Screen Shot 2021-10-12 at 2 40 44 PM" src="https://user-images.githubusercontent.com/3640707/137018842-64a1589c-4cb9-4a0c-a121-4d3356079013.png">

On the content overview screen, you will see a list of all stories that you can edit or delete as well as 
a way to add content. Initially, the overview will be empty without stories, but once added they will 
show up in the list.

You'll also be able to view the files used as images on a separate tab.

<img width="823" alt="Screen Shot 2020-09-28 at 2 45 29 PM" src="https://user-images.githubusercontent.com/3640707/94472833-51dd1700-0199-11eb-9534-1a2925e35ffa.png">

The "used in" column will show you what stories the images are used in.

### Content Editing

To add a story, click "Add Impact Story" in the "Manage" section of the admin toolbar.

You'll be taken to a screen with a blank form to fill in with content for Story fields. The red asterisks mark required fields. Although not every field might
have an asterisk, they all should be filled in order to make the frontend render correctly.

<img width="556" alt="Screen Shot 2021-10-12 at 3 15 33 PM" src="https://user-images.githubusercontent.com/3640707/137023042-6ad8b88e-ed2d-48ce-9948-64cb1861886b.png">

### Editing Caveats

There are a few caveats to remember while creating content.

- **Image File Names** - Image file names should only include alphanumeric characters and dashes, e.g.  
  "my-file.jpg" and not "my./file.jpg". It is okay to leave the file extension in the name.
- **Image File Name Prefix** - To avoid issues with saving files due to the same file name, a timestamp 
  will be prefixed to the file name in order to make it unique. This has no impact for you, just FYI on 
  why the file name has numbers at the beginning after upload.
- **Image Size** - Please compress and format images before uploading them. The default upload size for 
  images is set to 2MB, which should be large enough for all images used in stories. "Export for Web" in 
  Adobe  Photoshop is a good way to reduce file size. You can google "online image compression" to find 
  other services to use.

## Story Fields

### Title and Slug Fields

These are text fields. The story slug is how the story will be navigated to on the frontend and is usually 
the title all lowercase with spaces replacing the dashes. Only alphanumeric characters and dashes should 
be  used in the slug field.

### Campus

The campus field will show up in the card view of the story.

### Image Main Field

This field allows you to upload local files to Cloudinary, the image hosting service.

<img width="736" alt="Screen Shot 2021-10-12 at 3 26 31 PM" src="https://user-images.githubusercontent.com/3640707/137025259-a732e6ac-a245-45f9-9159-819bc6f5e54c.png">

You should always add alt text and the title is optional. If you need to replace the image, click "Remove" 
and the original upload field should reappear to add a new image.

### Body/Summary Field

<img width="887" alt="Screen Shot 2021-10-12 at 3 36 38 PM" src="https://user-images.githubusercontent.com/3640707/137025747-1d8a98c3-ea49-4f7c-8b7b-a9aeab2c6ddd.png">

The "Summary" field equates to the "subtitle" on the frontend underneath the story title. The field allows 
basic HTML and will show the exact output. Please only insert text and file a GitHub issue if there is 
some issue requiring more options.

### Content Field

This field allows components to be added and re-arranged in sequential order, and they will show up in 
that order on the story page.

<img width="1047" alt="Screen Shot 2021-10-12 at 3 39 27 PM" src="https://user-images.githubusercontent.com/3640707/137025824-d6e7f91a-9496-4e70-ba45-2c7e1e9f24e5.png">

More help text can be added for each component, but for now, you can see what happens after clicking to 
add the "Text BLock" component. A modal opens with the fields contained in the component. 

<img width="918" alt="Screen Shot 2021-10-12 at 3 41 38 PM" src="https://user-images.githubusercontent.com/3640707/137026249-1b520783-51b1-4635-8e41-c23ea7fbfaa1.png">

A Text Block only has one field of restricted HTML, and all components have a "Styles" field. 

**NOTE: You can ignore the styles field for now, but it was intended to allow for content editor applied 
styling per component rather than hard-coded in the design. The exception is for Images.**

#### Image Component Caveat

<img width="604" alt="Screen Shot 2021-10-12 at 3 50 12 PM" src="https://user-images.githubusercontent.com/3640707/137027202-9e0ccdb2-7b08-4fcf-b491-f445c4de64e6.png">

The only current use of the "Styles" field is for images with captions. If you want an image to have a 
caption, you must fill out the "Title" field once an image is uploaded and select "with-caption" in the 
Styles field.

## Navigate To Preview Content

After you save a new story, you will go to a screen listing all the fields, but you have to click on 
"Impact Stories Overview" to get back to the list of content.

<img width="786" alt="Screen Shot 2021-10-12 at 3 54 05 PM" src="https://user-images.githubusercontent.com/3640707/137027818-12da6b91-b188-4c7a-bd22-8bca6f6b5c8c.png">

In between "Updated" and "Operations", you should see a preview link that when clicked will open the story 
in a new tab. It is advisable to keep editing in one tab and previewing in another as you work.

<img width="659" alt="Screen Shot 2021-10-12 at 3 58 36 PM" src="https://user-images.githubusercontent.com/3640707/137028307-6a6cc77a-45c0-40e3-b8dc-4657a55f9854.png">
