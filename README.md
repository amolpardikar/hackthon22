# CRUD-App-Custmers

Node Js, Express JS and Mongo DB based app to do CRUD operations on Customers

Pre-requists: install node js, Mongo DB
Run:
npm i
npm start

API's:

1. Create new customers: http://localhost:9000/customers
Sample Post request:
{
    "name": "Amol Pardikar",
    "cust_id": "123",
    "address": "123, London Road, London SE1 9EQ",
    "documents": "Passport, DL",
    "products": ["Mortgage","Car Loan"]
}

2. Get Customer: http://localhost:9000/customers/:cust_id

3. Update (patch) Customer: http://localhost:9000/customers/:cust_id

4. Delete Customer: http://localhost:9000/customers/:cust_id

