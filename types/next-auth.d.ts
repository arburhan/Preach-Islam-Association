import 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            email: string;
            name: string;
            role: 'user' | 'admin' | 'superadmin';
            permissions: string[];
            isApproved: boolean;
        };
    }

    interface User {
        id: string;
        role: 'user' | 'admin' | 'superadmin';
        permissions: string[];
        isApproved: boolean;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        role?: 'user' | 'admin' | 'superadmin';
        permissions?: string[];
        isApproved?: boolean;
    }
}
