const mongoose =require('mongoose');

const customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cust_id: {
        type: String,
        required: true,
        unique: true,    
    },
    address: {
        type: String,
        required: true,
        unique: true,
    },
    documents: {
        type: String,
        required: true,
        unique: true,
    },
    products: {
        type: [String],
        required: true,
    },
    registered_on: {
        type: Date,
        default: new Date(),
    },

})

var customerData=mongoose.model('customer_data',customerSchema);
module.exports= customerData;