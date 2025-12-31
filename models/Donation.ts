import mongoose, { Schema, models, model } from 'mongoose';

export interface IDonation extends mongoose.Document {
    name: string;
    email?: string;
    address: string;
    mobile: string;
    donationType: 'monthly' | 'yearly' | 'oneTime';
    amount: number;
    comment?: string;
    submittedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}

const DonationSchema = new Schema<IDonation>(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        email: {
            type: String,
            lowercase: true,
            trim: true,
        },
        address: {
            type: String,
            required: [true, 'Address is required'],
        },
        mobile: {
            type: String,
            required: [true, 'Mobile number is required'],
        },
        donationType: {
            type: String,
            enum: ['monthly', 'yearly', 'oneTime'],
            required: [true, 'Donation type is required'],
        },
        amount: {
            type: Number,
            required: [true, 'Amount is required'],
            min: 1,
        },
        comment: {
            type: String,
        },
        submittedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

export const Donation = models.Donation || model<IDonation>('Donation', DonationSchema);
