import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { User } from '@/models/User';
import dbConnect from '@/lib/dbConnect';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: 'magic-link',
            name: 'Magic Link',
            credentials: {
                token: { label: 'Token', type: 'text' },
            },
            async authorize(credentials) {
                if (!credentials?.token) {
                    return null;
                }

                await dbConnect();

                // Find user with valid magic link token
                const user = await User.findOne({
                    verificationToken: credentials.token,
                    verificationTokenExpiry: { $gt: new Date() },
                });

                if (!user) {
                    return null;
                }

                if (!user.emailVerified) {
                    throw new Error('Email not verified');
                }

                if (!user.isApproved) {
                    throw new Error('Account pending approval');
                }

                // Clear the token after use
                user.verificationToken = undefined;
                user.verificationTokenExpiry = undefined;
                await user.save();

                return {
                    id: user._id.toString(),
                    email: user.email,
                    name: user.name,
                    role: user.role,
                    permissions: user.permissions,
                    isApproved: user.isApproved,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.sub = user.id;
                token.role = user.role;
                token.permissions = user.permissions;
                token.isApproved = user.isApproved;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user && token.sub) {
                await dbConnect();
                const user = await User.findById(token.sub);
                if (user) {
                    session.user.id = user._id.toString();
                    session.user.role = user.role;
                    session.user.permissions = user.permissions;
                    session.user.isApproved = user.isApproved;
                    session.user.name = user.name;
                    session.user.email = user.email;
                }
            }
            return session;
        },
    },
    pages: {
        signIn: '/auth/login',
        error: '/auth/error',
    },
    session: {
        strategy: 'jwt',
    },
};
