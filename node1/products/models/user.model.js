const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let addresSchema = new Schema({
    area:{type: String},
    road: {type: String}
}, {_id: false })

let phoneSchema = new Schema({
    type: {type: String},
    number: {type: String}
}, {_id: false})

let productsSchema= new Schema({
    products: {type: String},
    cost: {type: Number} ,
    quantity: {type: Number, required: true},
    date: { type: Date, default: Date.now}
})

let userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required field'],
        max:100,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Password is required field'],
        max: 100
    },
    name: {
        type: String,
        required: [true, 'Name is required field'],
        max: 100
    },
    surname: {
        type: String,
        required: [true, 'Surname is required field'],
    },
    email: {
        type: String,
        required: [true, 'Email is required field'],
        max: 100,
        unique: true,
        trim: true,
        lowercase: true,
        match: [
            /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
            "Email address is not valid",
        ],
        
    },
    adress: addresSchema,
    phone: {type: [phoneSchema], null: true},
    products: { type: [productsSchema], null: true} 
},
{
    collections: 'users',
    timestamps: true
});

module.exports = mongoose.model('User', userSchema)