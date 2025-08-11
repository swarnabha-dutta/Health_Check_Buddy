import { Inte r } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "HealthCheckBuddy - Doctor Appointment Booking System",
  description: "Connect with Doctors and Book Appointments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
