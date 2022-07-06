const express = require("express");

const  customer_Act = require("../controllers/customers"); 

const router = express.Router();

router.get('/', customer_Act.getCustomers);
router.get('/:cust_id', customer_Act.getspecCustomer);
router.post('/', customer_Act.createCustomer);
router.patch('/:cust_id', customer_Act.updateCustomer);
router.delete('/:cust_id', customer_Act.deleteCustomer);

module.exports=router;