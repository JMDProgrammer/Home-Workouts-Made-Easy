Personal notes so that I do not get lost inside of this project backend stuff

1. using this video:
Introduction - Full Stack Web Development Course [1] | ReactJS, NodeJS, Express, MySQL
https://www.youtube.com/watch?v=Hl7diL7SFw8&t=992s

1. creating json package file inside of the client server
    dicates the config of your project
    to initialize the server:
        npm init

2.  first package is the express library
    helps create the rest api really easily
    this makes: 
            package-lock.json
            node_modules folder
    command to do this:
    npm install express

3. other things to install inside of the server folder:
    allows us to create a conection with our front end and server
    ----npm install express cors----
    and then installing the package for to use the database, mysql2
    command to do this:
    npm install express cors mysql2

    - files now appear in our package.json files
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "mysql2": "^2.3.3"

    timestamp 8:36

so far, up to line 17, if you want to test whether or not the server is running:
command:
node index.js
//this will list the server running on whatever port you told it to run on

quit out of the server:
crtl + C

4. now installing another dependency:
    command inside of the terminal:
        node index.js
    will restart the server every time you save. which is really nice apparently.
    to make it work, all you have to do is go to the package.json and add:
    "start": "nodemon index.js"

5. now connectiong the database to the project
    -   open workbench
    Timestamp 14:00 min

6. connecting the server with the react app
    using an orm that is called sequelize
    you probably need to make this a global isntall
    To install orm (installing 2 packages):
    ---->>>>npm install -g sequelize sequelize-cli<<<<----
                    or
    ---->>>>npm install sequelize sequelize-cli<<<<----

        then go to the terminal inside of the server folder and enter:
            sequelize init
    this will allow everything to be much easier
        - by making our code a lot better
        - by using orm it makes everything easier to look at 
        - also makes it more secure
-----> how to use sequelize tutorial by the same guy <------
        https://www.youtube.com/watch?v=Crk_5Xy8GMA

7. deleted the seeders and migrations folder
    -   not necessary to have these folders

8. creating a table in the server > models folder
    -   created a Users.js file

9. creating an anonomus function that is going to create that model and export it from this file so that we have access to it in other filkes
    -   module.exports = 
        -   equates to whatever you want to exports
        -   should take two args
            1. sequelize 
            2. DataTypes
    -   module.exports = (sequelize, DataTypes) => {
        //create variables
    }

10. the index.js file within the modules folder converts all files in the models folder into different tables

11. how to make the tables appear in the database (import them):
    -   you write code in the index.js file that is outside of the models folder  but inside the server folder
    -   const db = require('./models')

12. how to get this program to recognize the database?
    > server folder
        > config folder
            > config.json
            -   where in the development area there is a 
            -   username
            -   password "null" "" or "password" 
            -   database 
            -   host : can use the address or "localhost" 

13. after all of this is done 
    - start it in the server folder
    - npm start

14. installed body-parser and mysql
    - npm install body-parser
    - npm install mysql

15. added a devstart option to the package.json file
    - to run:
        npm run devStart

16. 