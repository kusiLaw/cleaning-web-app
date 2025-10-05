import { TestimonialsSlider } from "./TestimonailSlider";


export function Testimonials() {

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Hertfordshire Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            customers across Hertfordshire have to say about our cleaning and
            decluttering services.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <TestimonialsSlider />
        </div>
      </div>
    </section>
  );
}
  