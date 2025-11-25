import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true
    },
    patientAge: {
        type: String,
        required: true
    },
    patientGender: {
        type: String,
        required: true
    },
    patientBloodGroup: {
        type: String,
        required: true
    },
    patientAddress: {
        type: String,
        required: true
    },
    patientPhone: {
        type: String,
        required: true
    },
    patientEmail: {
        type: String,
        required: true
    },
    patientSymptoms: {
        type: String,
        required: true
    },
    patientDiagnosis: {
        type: String,
        required: true
    },
    patientPrescription: {
        type: String,
        required: true
    },
    patientAdmitted: {
        type: String,
        required: true
    },
    patientAdmittedDate: {
        type: String,
        required: true
    },
    patientDischargedDate: {
        type: String,
        required: true
    }
}, {timestamps: true});

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);