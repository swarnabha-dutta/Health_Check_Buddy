import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden py-32">
        {/* one part is Text and the Other part is Image */}
        <div>
          {/* Main heading text */}
          <div>
            {/* Button like Get started and Find Doctors */}

          </div>
          <Badge variant="default |outline | secondary | destructive"
            className={`bg-emerald-900/30 border-emerald`}
          >HealthCare Checking now is very easy</Badge>
          <div></div>
        </div>
      </section>
    </div>
  )
}
