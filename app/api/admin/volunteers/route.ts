import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import dbConnect from '@/lib/dbConnect';
import { Volunteer } from '@/models/Volunteer';

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
        if (status) {
            query.status = status;
        }

        const volunteers = await Volunteer.find(query).sort({ createdAt: -1 });

        return NextResponse.json({ success: true, volunteers });
    } catch (error) {
        console.error('Get volunteers error:', error);
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
        const { volunteerId, status } = body;

        await Volunteer.findByIdAndUpdate(volunteerId, { status });

        return NextResponse.json({ success: true, message: 'Volunteer updated successfully' });
    } catch (error) {
        console.error('Update volunteer error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
