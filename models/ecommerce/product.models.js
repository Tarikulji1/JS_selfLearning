import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        text: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000,
        text: true,
    },
    inrPrice: {
        type: Number,
        required: true,
        maxlength: 32,
        trim: true,
        default: 0,
    },
    usdPrice: {
        type: Number,
        required: true,
        maxlength: 32,
        trim: true,
        default: 0,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    },
    sold: {
        type: Number,
        default: 0,
        required: true,
    },
    stock: {
        type: Number,
        default: 0,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    shipping: {
        type: Boolean,
        required: false,
        default: false,
    },
    color: {
        type: String,
        required: false,
        default: 'White',
    },
    brand: {
        type: String,
        required: false,
        default: 'Apple',
    },
    ratings: {
        type: Number,
        default: 0,
        required: true,
    },
    numberOfReviews: {
        type: Number,
        default: 0,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

export const Product = mongoose.model('Product', productSchema);