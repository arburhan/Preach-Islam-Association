import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { User } from '@/models/User';
import { sendMagicLinkEmail } from '@/lib/email';
import crypto from 'crypto';

export async function POST(request: Request) {
    try {
        await dbConnect();

        const body = await request.json();
        const { email } = body;

        if (!email) {
            return NextResponse.json(
                { success: false, message: 'ইমেইল প্রয়োজন' },
                { status: 400 }
            );
        }

        // Find user
        const user = await User.findOne({ email: email.toLowerCase() });

        if (!user) {
            return NextResponse.json(
                { success: false, message: 'এই ইমেইল দিয়ে কোনো অ্যাকাউন্ট নেই' },
                { status: 404 }
            );
        }

        if (!user.emailVerified) {
            return NextResponse.json(
                { success: false, message: 'আপনার ইমেইল যাচাই করা হয়নি। অনুগ্রহ করে প্রথমে ইমেইল যাচাই করুন।' },
                { status: 403 }
            );
        }

        if (!user.isApproved) {
            return NextResponse.json(
                { success: false, message: 'আপনার অ্যাকাউন্ট এখনো অনুমোদিত হয়নি। অনুগ্রহ করে অপেক্ষা করুন।' },
                { status: 403 }
            );
        }

        // Generate magic link token
        const token = crypto.randomBytes(32).toString('hex');
        const tokenExpiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

        user.verificationToken = token;
        user.verificationTokenExpiry = tokenExpiry;
        await user.save();

        // Create magic link
        const magicLink = `${process.env.NEXTAUTH_URL}/auth/verify-login?token=${token}`;

        // Send magic link email
        await sendMagicLinkEmail(user.email, user.name, magicLink);

        return NextResponse.json({
            success: true,
            message: 'লগইন লিঙ্ক আপনার ইমেইলে পাঠানো হয়েছে',
        });
    } catch (error) {
        console.error('Send magic link error:', error);
        return NextResponse.json(
            { success: false, message: 'সার্ভার সমস্যা হয়েছে' },
            { status: 500 }
        );
    }
}
