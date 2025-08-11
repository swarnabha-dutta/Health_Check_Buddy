import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden py-32">
        <div className="container mx-auto px-4">
          <div>
            <div>
              <Badge variant="default |outline | secondary | destructive"
                className={`bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium`}
              >HealthCare Checking now is very easy
              </Badge>
              <h1>
                Connect with Doctors <br /> <span>anytime,anyWhere</span>
              </h1>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  )
}
