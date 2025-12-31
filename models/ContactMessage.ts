import mongoose from 'mongoose';

export interface IContactMessage {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    status: 'new' | 'read' | 'replied';
    createdAt: Date;
}

const ContactMessageSchema = new mongoose.Schema<IContactMessage>(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
        },
        phone: {
            type: String,
            required: [true, 'Phone is required'],
        },
        subject: {
            type: String,
            required: [true, 'Subject is required'],
        },
        message: {
            type: String,
            required: [true, 'Message is required'],
        },
        status: {
            type: String,
            enum: ['new', 'read', 'replied'],
            default: 'new',
        },
    },
    {
        timestamps: true,
    }
);

export const ContactMessage =
    mongoose.models.ContactMessage || mongoose.model<IContactMessage>('ContactMessage', ContactMessageSchema);
