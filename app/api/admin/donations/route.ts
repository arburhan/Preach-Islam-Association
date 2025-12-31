import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import dbConnect from '@/lib/dbConnect';
import { Donation } from '@/models/Donation';

export async function GET(request: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || (session.user.role !== 'admin' && session.user.role !== 'superadmin')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();

        const { searchParams } = new URL(request.url);
        const donationType = searchParams.get('type');

        let query: any = {};
        if (donationType) {
            query.donationType = donationType;
        }

        const donations = await Donation.find(query).sort({ createdAt: -1 });

        // Calculate statistics
        const stats = {
            total: donations.length,
            totalAmount: donations.reduce((sum, d) => sum + d.amount, 0),
            monthly: donations.filter(d => d.donationType === 'monthly').length,
            yearly: donations.filter(d => d.donationType === 'yearly').length,
            oneTime: donations.filter(d => d.donationType === 'oneTime').length,
        };

        return NextResponse.json({ success: true, donations, stats });
    } catch (error) {
        console.error('Get donations error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
