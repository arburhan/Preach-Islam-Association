import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { Volunteer } from '@/models/Volunteer';

export async function POST(request: Request) {
    try {
        await dbConnect();

        const body = await request.json();
        const { name, email, phone, age, location, profession, skills, availability } = body;

        if (!name || !email || !phone || !age || !location || !profession || !skills || !availability) {
            return NextResponse.json({
                success: false,
                message: 'সকল তথ্য আবশ্যক'
            }, { status: 400 });
        }

        const volunteer = await Volunteer.create({
            name,
            email,
            phone,
            age,
            location,
            profession,
            skills,
            availability,
            status: 'pending',
        });

        return NextResponse.json({
            success: true,
            message: 'স্বেচ্ছাসেবক নিবন্ধন সফল হয়েছে',
            volunteerId: volunteer._id,
        });
    } catch (error) {
        console.error('Volunteer submission error:', error);
        return NextResponse.json({
            success: false,
            message: 'সার্ভার সমস্যা হয়েছে'
        }, { status: 500 });
    }
}
