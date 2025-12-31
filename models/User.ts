import mongoose, { Schema, models, model } from 'mongoose';

export interface IUser extends mongoose.Document {
    name: string;
    email: string;
    mobile: string;
    emailVerified: boolean;
    verificationToken?: string;
    verificationTokenExpiry?: Date;
    isApproved: boolean;
    role: 'user' | 'admin' | 'superadmin';
    permissions: string[];
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            lowercase: true,
            trim: true,
        },
        mobile: {
            type: String,
            required: [true, 'Mobile number is required'],
        },
        emailVerified: {
            type: Boolean,
            default: false,
        },
        verificationToken: {
            type: String,
        },
        verificationTokenExpiry: {
            type: Date,
        },
        isApproved: {
            type: Boolean,
            default: false,
        },
        role: {
            type: String,
            enum: ['user', 'admin', 'superadmin'],
            default: 'user',
        },
        permissions: {
            type: [String],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

export const User = models.User || model<IUser>('User', UserSchema);
