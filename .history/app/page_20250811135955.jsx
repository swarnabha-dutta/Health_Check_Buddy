import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { features } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background">
      {/* for Showing the main text and buttons and image right side and  for onboarding sections */}
      <section className="relative overflow-hidden py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <Badge 
                variant="outline"
                className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium"
              >
                HealthCare Checking now is very easy
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Connect with Doctors <br />
                <span className="gradient-title">
                  anytime,anyWhere
                </span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                Book your appointments with doctors from anywhere at any time through HealthCheckBuddy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild 
                  size="lg"
                  className="cursor-pointer bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <Link href="/onboarding">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild 
                  size="lg"
                  variant="outline"
                  className="cursor-pointer bg-emerald-700/30 hover:bg-muted/80"
                >
                  <Link href="/doctors">
                    Find Doctors<ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Image Container - Fixed */}
            <div className="relative h-[500px] lg:h-[600px] w-full rounded-xl overflow-hidden">
              <Image 
                src="/banner2.png" 
                alt="Doctor Consultation"
                fill
                priority
                className="object-scale-down rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* for Title -> "How it works" */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How it works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              HealthCheckBuddy makes it easy to connect with healthcare professionals and it accessible in few clicks.  
            </p>
          </div>
          {/* Showing the features sections -> "Features" */}
          <div>
            {features.map((feature, index) => {
              return (
                <Card>
                    <CardHeader>
                      <CardTitle>Card Title</ CardTitle>
                    <CardAction>Card Action
                    </ CardAction>
                    </CardHeader>
                    <CardContent>
                      <p>Card Content</p>
                    </CardContent>
                    
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}