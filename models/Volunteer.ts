import mongoose, { Schema, models, model } from 'mongoose';

export interface IVolunteer extends mongoose.Document {
    name: string;
    email: string;
    phone: string;
    age: number;
    location: string;
    profession: string;
    skills: string;
    availability: 'weekdays' | 'weekends' | 'flexible' | 'full-time';
    status: 'pending' | 'approved' | 'rejected';
    createdAt: Date;
    updatedAt: Date;
}

const VolunteerSchema = new Schema<IVolunteer>(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            lowercase: true,
            trim: true,
        },
        phone: {
            type: String,
            required: [true, 'Phone number is required'],
        },
        age: {
            type: Number,
            required: [true, 'Age is required'],
            min: 18,
            max: 100,
        },
        location: {
            type: String,
            required: [true, 'Location is required'],
        },
        profession: {
            type: String,
            required: [true, 'Profession is required'],
        },
        skills: {
            type: String,
            required: [true, 'Skills are required'],
        },
        availability: {
            type: String,
            enum: ['weekdays', 'weekends', 'flexible', 'full-time'],
            required: [true, 'Availability is required'],
        },
        status: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: 'pending',
        },
    },
    {
        timestamps: true,
    }
);

export const Volunteer = models.Volunteer || model<IVolunteer>('Volunteer', VolunteerSchema);
