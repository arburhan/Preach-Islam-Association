import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import dbConnect from '@/lib/dbConnect';
import { ContactMessage } from '@/models/ContactMessage';

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
        if (status && status !== 'all') {
            query.status = status;
        }

        const messages = await ContactMessage.find(query).sort({ createdAt: -1 });

        return NextResponse.json({ success: true, messages });
    } catch (error) {
        console.error('Get contact messages error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

export async function PATCH(request: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || (session.user.role !== 'admin' && session.user.role !== 'superadmin')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();

        const body = await request.json();
        const { messageId, status } = body;

        await ContactMessage.findByIdAndUpdate(messageId, { status });

        return NextResponse.json({ success: true, message: 'Status updated successfully' });
    } catch (error) {
        console.error('Update message error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'superadmin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();

        const { searchParams } = new URL(request.url);
        const messageId = searchParams.get('messageId');

        await ContactMessage.findByIdAndDelete(messageId);

        return NextResponse.json({ success: true, message: 'Message deleted successfully' });
    } catch (error) {
        console.error('Delete message error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
