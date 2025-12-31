import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import dbConnect from '@/lib/dbConnect';
import { User } from '@/models/User';
import { sendApprovalNotificationEmail } from '@/lib/email';

// Get pending users
export async function GET(request: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || (session.user.role !== 'admin' && session.user.role !== 'superadmin')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();

        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status');

        let query: any = {};
        if (status === 'pending') {
            query = { emailVerified: true, isApproved: false };
        } else if (status === 'approved') {
            query = { isApproved: true };
        }

        const users = await User.find(query).select('-verificationToken -verificationTokenExpiry').sort({ createdAt: -1 });

        return NextResponse.json({ success: true, users });
    } catch (error) {
        console.error('Get users error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

// Approve user
export async function PATCH(request: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || (session.user.role !== 'admin' && session.user.role !== 'superadmin')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();

        const body = await request.json();
        const { userId, isApproved } = body;

        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        user.isApproved = isApproved;
        await user.save();

        // Send approval notification email
        if (isApproved) {
            await sendApprovalNotificationEmail(user.email, user.name);
        }

        return NextResponse.json({ success: true, message: 'User updated successfully' });
    } catch (error) {
        console.error('Approve user error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

// Delete user
export async function DELETE(request: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'superadmin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();

        const { searchParams } = new URL(request.url);
        const userId = searchParams.get('userId');

        await User.findByIdAndDelete(userId);

        return NextResponse.json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        console.error('Delete user error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
