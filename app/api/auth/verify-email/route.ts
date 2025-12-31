import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { User } from '@/models/User';

export async function GET(request: Request) {
    try {
        await dbConnect();

        const { searchParams } = new URL(request.url);
        const token = searchParams.get('token');

        if (!token) {
            return NextResponse.redirect(new URL('/auth/verification-failed', request.url));
        }

        const user = await User.findOne({
            verificationToken: token,
            verificationTokenExpiry: { $gt: new Date() },
        });

        if (!user) {
            return NextResponse.redirect(new URL('/auth/verification-failed', request.url));
        }

        // Update user
        user.emailVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiry = undefined;
        await user.save();

        return NextResponse.redirect(new URL('/auth/waiting-approval', request.url));
    } catch (error) {
        console.error('Verification error:', error);
        return NextResponse.redirect(new URL('/auth/verification-failed', request.url));
    }
}
