import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
    secure: false,
    auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
    },
});

export async function sendVerificationEmail(email: string, name: string, token: string) {
    const verificationUrl = `${process.env.NEXTAUTH_URL}/api/auth/verify-email?token=${token}`;

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: 'ইমেইল যাচাইকরণ - প্রিচ ইসলাম অ্যাসোসিয়েশন',
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">আসসালামু আলাইকুম ${name}</h2>
        <p>প্রিচ ইসলাম অ্যাসোসিয়েশনে রেজিস্ট্রেশনের জন্য ধন্যবাদ!</p>
        <p>আপনার ইমেইল যাচাই করতে নিচের বাটনে ক্লিক করুন:</p>
        <a href="${verificationUrl}" style="display: inline-block; padding: 12px 24px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 8px; margin: 20px 0;">
          ইমেইল যাচাই করুন
        </a>
        <p>অথবা এই লিঙ্কটি আপনার ব্রাউজারে কপি করুন:</p>
        <p style="color: #666; word-break: break-all;">${verificationUrl}</p>
        <p style="color: #999; font-size: 12px; margin-top: 30px;">এই লিঙ্কটি ২৪ ঘণ্টার জন্য বৈধ।</p>
      </div>
    `,
    };

    await transporter.sendMail(mailOptions);
}

export async function sendMagicLinkEmail(email: string, name: string, url: string) {
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: 'লগইন লিঙ্ক - প্রিচ ইসলাম অ্যাসোসিয়েশন',
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">আসসালামু আলাইকুম ${name}</h2>
        <p>আপনার লগইন লিঙ্ক:</p>
        <a href="${url}" style="display: inline-block; padding: 12px 24px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 8px; margin: 20px 0;">
          লগইন করুন
        </a>
        <p>অথবা এই লিঙ্কটি আপনার ব্রাউজারে কপি করুন:</p>
        <p style="color: #666; word-break: break-all;">${url}</p>
        <p style="color: #999; font-size: 12px; margin-top: 30px;">এই লিঙ্কটি ১ ঘণ্টার জন্য বৈধ।</p>
        <p style="color: #d97706; font-size: 14px;">দয়া করে এই লিঙ্কটি কারো সাথে শেয়ার করবেন না।</p>
      </div>
    `,
    };

    await transporter.sendMail(mailOptions);
}

export async function sendApprovalNotificationEmail(email: string, name: string) {
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: 'অ্যাকাউন্ট অনুমোদিত - প্রিচ ইসলাম অ্যাসোসিয়েশন',
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #16a34a;">🎉 মুবারকবাদ ${name}!</h2>
        <p>আপনার অ্যাকাউন্ট অনুমোদিত হয়েছে। এখন আপনি লগইন করতে পারবেন।</p>
        <a href="${process.env.NEXTAUTH_URL}/auth/login" style="display: inline-block; padding: 12px 24px; background-color: #16a34a; color: white; text-decoration: none; border-radius: 8px; margin: 20px 0;">
          লগইন করুন
        </a>
      </div>
    `,
    };

    await transporter.sendMail(mailOptions);
}
