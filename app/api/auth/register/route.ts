import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { User } from '@/models/User';
import { sendVerificationEmail } from '@/lib/email';
import crypto from 'crypto';

export async function POST(request: Request) {
    try {
        await dbConnect();

        const body = await request.json();
        const { name, email, mobile } = body;

        if (!name || !email || !mobile) {
            return NextResponse.json(
                { success: false, message: 'সকল তথ্য আবশ্যক' },
                { status: 400 }
            );
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return NextResponse.json(
                { success: false, message: 'এই ইমেইল দিয়ে ইতিমধ্যে রেজিস্ট্রেশন করা হয়েছে' },
                { status: 400 }
            );
        }

        // Generate verification token
        const verificationToken = crypto.randomBytes(32).toString('hex');
        const verificationTokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

        // Create new user
        const user = await User.create({
            name,
            email: email.toLowerCase(),
            mobile,
            emailVerified: false,
            verificationToken,
            verificationTokenExpiry,
            isApproved: false,
            role: 'user',
        });

        // Send verification email
        await sendVerificationEmail(email, name, verificationToken);

        return NextResponse.json({
            success: true,
            message: 'রেজিস্ট্রেশন সফল হয়েছে। আপনার ইমেইল চেক করুন।',
            userId: user._id,
        });
    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json(
            { success: false, message: 'সার্ভার সমস্যা হয়েছে' },
            { status: 500 }
        );
    }
}
