import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { ContactMessage } from '@/models/ContactMessage';

export async function POST(request: Request) {
    try {
        await dbConnect();

        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        // Validation
        if (!name || !email || !phone || !subject || !message) {
            return NextResponse.json(
                { success: false, message: 'সব ফিল্ড পূরণ করুন' },
                { status: 400 }
            );
        }

        // Create contact message
        const contactMessage = await ContactMessage.create({
            name,
            email,
            phone,
            subject,
            message,
            status: 'new',
        });

        return NextResponse.json({
            success: true,
            message: 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে',
            data: contactMessage,
        });
    } catch (error) {
        console.error('Contact message error:', error);
        return NextResponse.json(
            { success: false, message: 'সার্ভার সমস্যা হয়েছে' },
            { status: 500 }
        );
    }
}
