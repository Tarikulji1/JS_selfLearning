import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    specializedIn: [
        {
            type: String,
            required: true
        }
    ],
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    services: {
        type: String,
        required: true
    },
    doctors: {
        type: String,
        required: true
    },
    beds: {
        type: String,
        required: true
    },
    icu_beds: {
        type: String,
        required: true
    },
    ventilators: {
        type: String,
        required: true
    },
    oxygen_cylinders: {
        type: String,
        required: true
    },
    ambulances: {
        type: String,
        required: true
    },
    blood_banks: {
        type: String,
        required: true
    },
    pharmacy: {
        type: String,
        required: true
    },
    images: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    reviews: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true});

export const Hospital = mongoose.model('Hospital', hospitalSchema);