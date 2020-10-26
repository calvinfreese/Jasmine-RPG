# Jasmine Game

#### Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Screenshots](#Screenshots)
  * [Credits](#Credits)
  * [License](#License)

## Description

 
## Installation
#### Technologies Used
* HTML
* JavaScript
* [MySQL](https://www.mysql.com/) & [MySQL Workbench](https://www.mysql.com/products/workbench/)
* [Bootstrap](https://getbootstrap.com/)
* [Node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/package/npm)
* [Visual Studio Code](https://code.visualstudio.com/)
* [cmder](https://cmder.net/)

#### Steps
1. * Start by entering the following in your terminal: `Git clone `

2. * Change directory to `Jasmine-RPG` and enter `npm install` into your terminal. This will install all package dependencies.

3. * Add node_modules to .gitignore.

4. * Create a `config.js` file based on the template [here](./config/config.js.example).
    * If file `config.js` is created in another location other than the parent folder, remember to update `server.js` `const credentials = require('./config')` with the new relative path.
    * Replace `<ID>` in the `user` and `password` fields in `config.js` with the credential information for the database.

5. * Copy Database and Table setup from `./models/schema.sql`
        * Paste into MySQL Workbench and execute.

* Start the application by running `npm start`



## Screenshots
#### Create Character
![Tour](#placeholder)
#### View Characters
 ![home](#placeholder)

#### Adventures Page
![home](#placeholder)



## Credits

## License

[License](LICENSE)
MIT &copy; 2020 Team Jasmine (Foos Mahamud, Liban Esse, Billy Sheehan, and Calvin Freese)
