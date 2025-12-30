import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // এখানে আপনি ডাটাবেসে save করতে পারবেন
        // const donation = await db.donation.create({ data: body });

        console.log('Donation received:', body);

        return NextResponse.json({
            success: true,
            message: 'Donation received successfully'
        });
    } catch (error) {
        console.error('Error processing donation:', error);
        return NextResponse.json({
            success: false,
            message: 'Error processing donation'
        }, { status: 500 });
    }
}
