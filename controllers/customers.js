const express= require('express');
const mongoose= require('mongoose');

const Customer= require('../models/customerdata.js');

const router= express.Router();

const getCustomers = async (req, res) => {
    try {
        const customer= await Customer.find();
        console.log("Customer records ->", customer);
        res.status(200).json(customer);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getspecCustomer = async (req,res) => {
    const cust_id = req.params.cust_id;

    try {
        const stud = await Customer.findOne({cust_id: cust_id});

        res.status(200).json(stud);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }

    console.log("Customer records fetched for customer id -> ", cust_id);
}

const createCustomer =  async (req, res) => {
    console.log(req.body);
    const newCustomer = new Customer({
        name:req.body.name,
        cust_id:req.body.cust_id,
        address:req.body.address,
        documents:req.body.documents,
        products:req.body.products,
        created_on:req.body.created_on

    })
    try {
        await newCustomer.save();
        console.log("Customer record created ->", newCustomer);
        res.status(201).json(newCustomer);

    } catch(error) {
        res.status(400).json({ message : error.message});
    }

}

const updateCustomer = async (req, res) => {
    const cust_id= req.params.cust_id;
    try{
        await Customer.findOneAndUpdate({
            cust_id: cust_id,
        },
        {   
            name:req.body.name,
            address:req.body.address,
            documents:req.body.documents,
            products:req.body.products
        }
        )
        console.log("Customer record updated for customer id -> ", cust_id);
        res.status(202).json({cust_id: cust_id});

    } catch (error) {
        res.status(401).json({message: error.message});
    }
    
}

const deleteCustomer = async (req, res) => {
    const cust_id= req.params.cust_id;

    try {
        await Customer.findOneAndRemove({cust_id: cust_id});
        res.status(203).json({cust_id:cust_id});

    }catch(error) {
        res.status(402).json({message: error.message});
    }

    console.log("Customer record deleted for customer id -> ", cust_id);
}

module.exports.getCustomers= getCustomers;
module.exports.createCustomer= createCustomer;
module.exports.getspecCustomer= getspecCustomer;
module.exports.updateCustomer= updateCustomer;
module.exports.deleteCustomer= deleteCustomer;