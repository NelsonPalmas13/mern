# MERN (mongoDB, Express, React JS, node.js

## Definition:

* MongoDB: NoSQL Database which stores "Documents" in "Collections"; Store Application Data; Easily Connected to Node/Express.

* Express: Node Framework that simplifies writing Server-Side Code and Logic; Middleware-based; Funnel Requests through Functions; Includes Routing, View-Rendering etc.

* React: Client-Side Browser; Render UI with Dynamic Data; Handle User Input; Communicate with Backend Services; User Experience is Mobile App like.

* Node: Javascript used on Server-Side; Listen to Requests and send Responses; Execute Server-Side logic; Interact with Databases and Files.

The communication between the Client (browser) and the Server is done through Request/Responses and the data type will be in a JSON format.

## Backend:

### Rest API vs GraphQL API

* Rest API -> Different URLs and HTTP Verbs for different actions; API is stateless and decoupled from any frontend; The most common type of API because of its ease of use.

* GraphQL API -> One URL and one HTTP Verb that accepts query commands; Query expression identifies a resource and action; API is stateless and decoupled from any frontend; Popular but less common, because you need to learn the query language.

## App Ideia:

This app is a very basic and simple concept of making dishes and share a picture of them and its recipe to the world (Selfie Cooking).

Its an CRUD app that includes authorization & autentication, several data models, image upload, input validation.

## EndPoints (Backend):

* /api/users -> GET (Get all users)
* /api/users/signup -> POST (Create new user)
* /api/users/login -> POST (Log user)
* /api/recipes/user/:uid -> GET (Get all user's recipes given the id)
* /api/recipes/:rid -> GET (Get a recipe with given id)
* /api/recipes/ -> POST (Create a new recipe)
* /api/recipes/:rid -> PATCH (Update a recipe with given id)
* /api/recipes/:rid -> DELETE (Delete a recipe with given id)

## EndPoints (Frontend):

* / -> Retrieve list of users (No authentication required)
* /:uid/recipes -> Retrieve a list of recipes for a selected user (No authentication required)
* /authenticate -> Signup and Login Forms (Needs to be un-authenticated)
* /recipes/new -> Form to create new Recipe (Needs authentication)
* /recipes/:rid -> Form to update a Recipe (Needs authentication)
