Lifestore Application

Lifestore App is an e-commerce app for selling medications.
# GOAL
Migrate existing data to the database using python script. Then create a GraghQL-enabled Django backend and React frontend featuring Context API.

# What Technologies are Used
- Django
- Graphene
- GraphQL
- React
- Context API
- Docker
# Required Features
## Backend
1. Create a Product model
1. Create a command to migrate the products data above into the database
1. Create a GraphQL endpoint to return all the products to the frontend
1. Encapsulate your back-end services in docker containers
## Frontend
1. Create a products page to show the GraphQL fetched products in cards with appropriate product data (name, price, pictures, etc.)
1. Each product should have an "Add to cart" button
1. On click add to cart, show cart summary component as an overlay and add the product to the cart. d) Allow increment (+), decrement (-) and delete functionality on each cart item in the cart
# Getting Started
- Clone the project repository on <https://github.com/geoafrikana/lifestores.git>.
- Navigate into the “lifestore” folder to view the backend.
- It is recommended that you create a virtual environment
- Pip Install the requirements.txt file
- Run “python manage.py runserver” command to run the application
- Use Postman to test the GraphQL endpoint at <server\_url>:<port>/graphql
- For the backend
- Navigate int the “lifestore-fe” folder.
- Run “npm start” to start the react application.
- The application consists of five components located at “/lifestore-fe/src/Components/**”** and Context located at lifestore-fe/src/Context”
# Author
- Nasiru Adebayo Olagunju
# Acknowledgements
Heartfelt gratuity to:

- AbdulAzeez Atanda (GitHub: CodenNerd) for his motivation and support
- The many YouTube creators many of whom I cannot recollect.
- Experts on Stack Exchange
- W3Schools
- Colleagues on the Webbers Whatsapp groups
