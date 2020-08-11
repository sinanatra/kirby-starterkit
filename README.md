# Kirby Starterkit

This repo is my own starterkit for Kirby 3 projects. Following the structure of [Quentin Creuzet's](https://github.com/quentin-f451/kirby-starterkit) repository,  it works with Webpack and BrowserSync and allows to work with SCSS and ES6. Featuring [Kirby CMS](https://getkirby.com/) and [SCSS Starterkit](https://github.com/sinanatra/scss-starterkit).

## Requirements

+ [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/).
+ [Composer](https://getcomposer.org/doc/00-intro.md)
+ A production server with >=PHP7.1. I personally use [Laravel Valet](https://getkirby.com/docs/cookbook/setup/development-environment#laravel-valet).

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

5. Launch your production server (for example with Laravel Valet) and link it to your folder. For example, I create the production server `http://NAME-OF-MY-FOLDER.test` linked to the `NAME-OF-MY-FOLDER/www` folder.
```
cd www
valet link NAME-OF-MY-APP
cd ..
```

6. Update `webpack.config.js` file with the address of your production server
```js
const localhost = 'http://NAME-OF-MY-APP.test';
```

7. You just have to type `npm run start` now and to start coding. The browser will reload at every saved change!

8. At the end of your coding process, you can run the `npm run build` command.

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


## Contribute 

Feel free to submit any issue or request.

*This project is in a beta version and I develop it for my own projects. Don't use it on a production website if you're not sure of being able to correct my bugs!*
