const testimonials = [
  {
    quote: "Olivia's voice brought tears to everyone's eyes during our ceremony. Simply magnificent.",
    author: "Sarah & James",
    event: "Wedding Ceremony"
  },
  {
    quote: "Her performance was deeply moving and provided the perfect tribute to my father.",
    author: "Michael Thompson",
    event: "Memorial Service"
  },
  {
    quote: "An incredibly talented performer who elevated our charity gala to new heights.",
    author: "Elizabeth Carter",
    event: "Charity Event"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-primary/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-display text-center mb-16">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg italic mb-4">{testimonial.quote}</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-600">{testimonial.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};