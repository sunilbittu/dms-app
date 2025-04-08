import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
export const metadata: Metadata = {
    title: 'My New App',
    description: 'Generated by Onlook',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="11ji9x2">
            <body className="" data-oid="mvd9-zr">
                {children}

                <Script src="/builtwith.js" strategy="afterInteractive" data-oid="qxq5za5" />
            </body>
        </html>
    );
}
