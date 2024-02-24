# TLG Icons

Similarly to libraries such as FontAwesome, this icon font can be used on any web-based project. It supports a duotone style, as seen in icons such as `alert` and `danger`.

## How to use the font?

* Upload the following to your server:
  * `font/`
  * `style.css`
* Embed the CSS file in the `<head>` tag.
* Add your icon: `<i class="tlgi-chevron-right" />`

*For an extensive list of all the icons available, check out the demo.*

## How to add a new icon to the set?

Requirements:

- [Figma SVG Export Plugin](https://www.figma.com/community/plugin/814345141907543603)
- [IcoMoon](https://icomoon.io)
- Node.js

### Step 1: Add the new icon on Figma

* Inside of the [TLG Web Styleguide file](https://www.figma.com/file/1iT6AcCiEaeqBe9Ryu9rZ5/TLG-Web-Styleguide?type=design&node-id=2318-689&mode=design&t=y9e8gj3jCOYI5qMb-4), we store all the most commonly used icons across the TLG products. When creating a new icon, create a component for it, and name it `Icon/my-icon`.
* Export the new icon using the [Figma SVG Export Plugin](https://www.figma.com/community/plugin/814345141907543603). This will tidy up and minify the SVG icon.

### Step 2: Import it in IcoMoon

* Open the TLG Icons project in IcoMoon.
  * If you don't have it, simply import the project using the `TLG Icons.json` file and load it.
* Drag the new SVG icon into the set.
* Select all the icons and hit `Generate Font`, then `Download`. 

### Step 3: Clean up the CSS

* Move the `style.css` file generated by IcoMoon in this folder.
* Run `node ./clean-css.js`. This will overwrite the CSS file.
* Update your server with the newest `font/` folder and `style.css` file. The new icon should now be available.
* Finally, Download the updated IcoMoon project and store it in the Repo, so that it can be versioned.



## FAQ

### Why IcoMoon?
It's a free, online solution, which is very accessible and easy to use. It removes all the nitty-gritty details of font development that you'd typically face using software like Glyphs.

### Do I have to use the `clean-css.js` utility?
Yes. It makes sure the syntax remains clean and bug-free. It also handles duo-tone icons. 

### Can I change the icons color?
Yes. Changing the `color` property of any icon will do the trick. This also works for duotone icons. Speaking of which, you can also specify a different color by altering either the `:before` or `:after` pseudo-elements.

### There is an unexpected bug, what can I do?
Feel free to drop a line at hello@ggdesign.it