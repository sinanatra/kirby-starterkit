# Kirby Starterkit

This repo is my own starterkit for Kirby 3 projects. It works with Webpack and BrowserSync and allows to work with SCSS and ES6. Featuring [Kirby CMS](https://getkirby.com/) and [SCSS Starterkit](https://github.com/sinanatra/scss-starterkit).

## Requirements

+ [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/).
+ [Composer](https://getcomposer.org/doc/00-intro.md)

## Installation

1. In Terminal, go to your production folder:
```
cd path/to/my/folder
```

2. Clone this repository with the submodules
```
git clone https://github.com/sinanatra/kirby-starterkit NAME-OF-MY-FOLDER
cd NAME-OF-MY-FOLDER
git clone --depth=1 https://github.com/sinanatra/scss-starterkit.git src/scss
rm -rf ./src/scss/.git
```

3. Install and update Kirby
```
composer install
cd www/kirby
composer update
cd ../..
```

4. Install dependencies with npm
```
npm install
```

5. Ttype `npm run start` now, open `http://localhost:3000` and to start coding. The browser will reload at every saved change.

6. At the end of your coding process, you can run the `npm run build` command.

## Folder structure

After the installation, your folder will more or less look like that:

```
node_modules/
src/
vendor/
www/
.babelrc
.browserslistrc
CHANGELOG.md
composer.json
composer.lock
LICENCE
package-lock.json
package.json
postcss.config.js
README.md
webpack.config.js
```

You will apply the changes to the following files/folders:
+ `www` folder and its subfolders: the main folder for Kirby coding. [Kirby documentation](https://getkirby.com/docs/reference) will be really useful to help you here.
+ `src` folder and its subfolders: every file that is here will be compile to the `www/assets` folder. You will already find `scss` and `js` folders where you can code your stylesheets (with SCSS/CSS) and your scripts (with JS). You might have to add `fonts` and `images` folders for font and image files that are linked to your CSS files. In `scss` folder, you will already find my [SCSS Starterkit](https://github.com/sinanatra/scss-starterkit), very useful if you want to configure your website easily. 
