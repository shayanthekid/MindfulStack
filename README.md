# MINDFULSTACK 
This application was built using MERN, MongoDB, Express, React & Nodejs.
The server of this application runs on nodejs and Express, allowing users to GET and POST blogs and users connected to a MongoDB database.
The front end side of this application runs on React, allowing users to log in and view blogs.

#  Getting started
You will need to install the dependencies for Node js 
``npm install``

You will need to be on the latest version of Node js

# Usage

There are 2 directories available

mindful-Backend
mindful-FrontEnd

# mindful-Backend
Navigate to the Backend directory and install the dependencies
`npm install`

You will now need to run the server

`nodemon .\app.js`

The server needs to be run for the API to fetch data from the database, so keep the server on port 3000 running 

Here are the available routes to this API
````
GET - /add-blog            => returns a json of the added user
GET - /all-events          => returns a json of all the blogs 
POST - /single-user        => returns a json with a single user when headers with Username and password are provided
GET - /events             => returns a json of all the blogs
GET - /blogs/create       => returns a form page to add blogs
````
# mindful-FrontEnd

Once the backend server is running on port 3000, it is now time to run the React application.
Navigate to the `/mindful-FrontEnd` directory and install the dependencies.
Next, run the react app

`npm start`

select option `y` to run the application on another port

Here are the available routes to this React app

````
GET - /           => returns the Home page
GET - /events           => returns the Home page
GET - /login          => returns login page 
````

# The credentials for the application are as follows

`Username = "Sajid"`
`Password = "123"`

`````
 The blogs will not be displayed if user is not logged in
`````

**Author** _[shayanthekid](https://github.com/shayanthekid)_
