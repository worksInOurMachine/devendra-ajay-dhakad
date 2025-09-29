import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
//@ts-ignore
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import Navbar from "@/components/navbar";
import ToastProvider from "@/providers/ToastProvider";
import AuthProvider from "@/components/provider/next-auth-provider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import LightRays from "@/components/LightRay";
import Script from "next/script";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "BMW - i8",
  description:
    "The BMW i8 is a futuristic plug-in hybrid sports car that blends stunning design with cutting-edge performance and sustainability.",
  generator: "v0.app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      suppressHydrationWarning={true}
    >
      <body className="font-sans scroll no-scrollbar relative min-h-screen">
        <Script src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js" />
        <Script src="https://cdn.jsdelivr.net/npm/@mediapipe/control_utils/control_utils.js" />
        <Script src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js" />
        <Script src="https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js" />
        <div className="h-20" aria-hidden />

        {/* Orb Background */}
        <div className="absolute inset-0 z-[-1]">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        <AuthProvider session={session}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Suspense>
              <Navbar />
              <ToastProvider />
              {/* <div className="h-20" aria-hidden /> */}
              {children}
              <Footer />
              <Analytics />
            </Suspense>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
