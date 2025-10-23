import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const vazirMatn = Vazirmatn({
    subsets: ['arabic', "latin"],
    variable: "--font-vazir",
    display: "swap"
});

export const metadata: Metadata = {
    title: "فروشگاه تاپ کالا",
    description: "فروشگاه اینترنتی تاپ کالا",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl">
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <meta name="theme-color" content="#f7858d"/>
                <meta name="msapplication-navbutton-color" content="#f7858d"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="#f7858d"/>
                <title>didikala | Index Page</title>
                {/*  Font Icon */}
                <link rel="stylesheet" href="/assets/css/vendor/font-awesome.min.css"/>
                <link rel="stylesheet" href="/assets/css/vendor/materialdesignicons.min.css"/>
                {/* Bootstrap */}
                <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css"/>
                {/* Plugins */}
                <link rel="stylesheet" href="/assets/css/vendor/bootstrap-slider.min.css"/>
                <link rel="stylesheet" href="/assets/css/vendor/owl.carousel.min.css"/>
                <link rel="stylesheet" href="/assets/css/vendor/jquery.horizontalmenu.css"/>
                <link rel="stylesheet" href="/assets/css/vendor/jquery-stack-menu.min.css"/>
                <link rel="stylesheet" href="/assets/css/vendor/fancybox.min.css"/>
                <link rel="stylesheet" href="/assets/css/vendor/nice-select.css"/>
                <link rel="stylesheet" href="/assets/css/vendor/nouislider.min.css"/>
                {/*  Main CSS File */}
                <link rel="stylesheet" href="/assets/css/main.css"/>
                <link rel="stylesheet" href="/assets/css/colors/default.css" id="colorswitch"></link>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}