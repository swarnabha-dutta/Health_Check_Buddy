import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "HealthCheckBuddy - Doctor Appointment Booking System",
  description: "Connect with Doctors and Book Appointments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* header */}
          <main className="min-h-screen">
            {children}
          </main>
          {/* footer */}
          <footer className="bg-muted/50 py-12">
            <div className="container mx-auto py-4 text-center text-gray-200">
              <p>Made by Swarnabha</p>
            </div>
          </footer>
        </ThemeProvider>
        
      </body>
    </html>
  );
}
