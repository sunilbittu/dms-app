import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'DMS Software Solutions',
    description: 'Document Management System',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" data-oid="j6ffjzz">
            <body className="" data-oid="srwflld">
                {children}
            </body>
        </html>
    );
}
