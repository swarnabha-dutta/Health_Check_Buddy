import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden ">
        {/* one part is Text and the Other part is Image */}
        <div>
          {/* Main heading text */}
          <div>
            {/* Button like Get started and Find Doctors */}

          </div>
          <Badge variant="default |outline | secondary | destructive">HealthCare Checking now is very easy</Badge>
          <div></div>
        </div>
      </section>
    </div>
  )
}
