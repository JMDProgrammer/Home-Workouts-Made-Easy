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




