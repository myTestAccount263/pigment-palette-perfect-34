import { Button } from "@/components/ui/button";

const ImpactSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Our Impact
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Founded in 2024, Future Wings began as an explorative initiative to understand what really holds students back from succeeding in school.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">
                Where We Started
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                We piloted interventions across Harare - delivering uniforms, sanitary pads, school fees, and classroom repairs, supporting over 700 students in our first year alone. Each project taught us more about what students really need to succeed.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                After working with students and educators around Harare for one year, the answer became clear: dignity, not just resources, was the barrier no one was addressing.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">
                What We've Learned
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Access to education is not enough. If students feel ashamed, unsafe, or unprepared at school, they cannot truly learn. We realised that dignity is the missing link in most education support models.
              </p>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="bg-primary rounded-2xl p-6 sm:p-8 text-background">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">
              Our Reach So Far
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-2">718</div>
                <div className="text-sm sm:text-base opacity-90">Students directly supported in 2025</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-2">5,500+</div>
                <div className="text-sm sm:text-base opacity-90">Sanitary pads distributed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-2">40+</div>
                <div className="text-sm sm:text-base opacity-90">Winter jerseys provided</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-2">1</div>
                <div className="text-sm sm:text-base opacity-90">School renovated</div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-foreground">
            What We're Doing Now
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground text-center max-w-4xl mx-auto mb-12">
            In 2026, we are scaling our dignity-first model across four schools. Our goal is to support at least 2,500 students through three interconnected pillars:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Dignity Kits */}
            <div className="text-center p-6 border border-border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-background">1</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-4 text-foreground">Dignity Kits</h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Carefully curated bundles that include hygiene essentials, school supplies, and clothing items tailored by gender and age to meet pressing needs of students.
              </p>
            </div>

            {/* Dignity Spaces */}
            <div className="text-center p-6 border border-border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-background">2</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-4 text-foreground">Dignity Spaces</h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We repair, renovate, and revitalise school infrastructure to create safe, functional, and welcoming environments that inspire learning.
              </p>
            </div>

            {/* Dignity Partnerships */}
            <div className="text-center p-6 border border-border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-background">3</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-4 text-foreground">Dignity Partnerships</h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We centre the voices of caregivers, educators, and students to ensure our work is locally owned, culturally grounded, and built to last.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-base sm:text-lg text-muted-foreground mb-6">
            Want to partner with us?
          </p>
          <Button variant="rounded" size="lg" className="text-foreground">
            GET IN TOUCH
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;