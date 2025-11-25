import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    bloodGroup: {
        type: String,
        required: true,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    gender: {
        type: String,
        required: true,
        enum: ['M', 'F', 'O'],
    },
    diagonsedWith: {
        type: String,
        required: true,
        trim: true,
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true,
        trim: true,
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true,
    },
    doctors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
    }],
    medicalRecords: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MedicalRecord',
    }],
    photo: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['Admitted', 'Discharged'],
    },
}, {timestamps: true});

export const Patient = mongoose.model('Patient', patientSchema);