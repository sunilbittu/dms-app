import { Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'DMS Software Solutions',
    description: 'Document Management System',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" data-oid="0cddh:p">
            <body className={inter.className} data-oid=":ia7pyp">
                {children}
            </body>
        </html>
    );
}
