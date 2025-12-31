import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { Donation } from '@/models/Donation';

export async function POST(request: Request) {
    try {
        await dbConnect();

        const body = await request.json();
        const { name, email, address, mobile, donationType, amount, comment, submittedAt } = body;

        if (!name || !address || !mobile || !donationType || !amount) {
            return NextResponse.json({
                success: false,
                message: 'সকল আবশ্যক তথ্য প্রদান করুন'
            }, { status: 400 });
        }

        const donation = await Donation.create({
            name,
            email,
            address,
            mobile,
            donationType,
            amount,
            comment,
            submittedAt: submittedAt || new Date(),
        });

        return NextResponse.json({
            success: true,
            message: 'দান সফলভাবে গ্রহণ করা হয়েছে',
            donationId: donation._id,
        });
    } catch (error) {
        console.error('Donation submission error:', error);
        return NextResponse.json({
            success: false,
            message: 'সার্ভার সমস্যা হয়েছে'
        }, { status: 500 });
    }
}
