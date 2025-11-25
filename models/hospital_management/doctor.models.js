import mongoose from 'mongoose';



const doctorSchema = new mongoose.Schema({
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
    specialization: {
        type: String,
        required: true,
        trim: true,
    },
    qualification: {
        type: String,
        required: true,
        trim: true,
    },
    worksInHospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true,
        trim: true,
    },
    joiningDate: {
        type: Date,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    experienceInYears: {
        type: Number,
        required: true,
        default: 0,
    },
    workingHours: {
        type: Number,
        required: true,
        default: 0,
    },
}, {timestamps: true});

export const Doctor = mongoose.model('Doctor', doctorSchema);