import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "HealthCheckBuddy - Doctor Appointment Booking System",
  description: "Connect with Doctors and Book Appointments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {/* header */}
        <main className="min-h-screen">
          {children}
        </main>
        {/* footer */}
        <footer>
          <div className="container mx-auto py-4 text-center text-gray-600">
            <p>Made by Swarnabha</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
