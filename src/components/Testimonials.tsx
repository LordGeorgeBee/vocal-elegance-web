const testimonials = [
  {
    quote: "Olivia's voice brought profound comfort during our difficult time. Her rendition of 'Ave Maria' was absolutely beautiful.",
    author: "The Thompson Family",
    event: "Memorial Service"
  },
  {
    quote: "Her performance added such dignity and grace to my mother's service. We couldn't have asked for a more perfect tribute.",
    author: "Sarah Williams",
    event: "Celebration of Life"
  },
  {
    quote: "The musical selections were perfectly chosen and performed with such sensitivity. Olivia helped make a difficult day more bearable.",
    author: "Robert & Mary Johnson",
    event: "Memorial Service"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-funeral-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-display text-center mb-16">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-funeral-primary p-8 rounded-lg shadow-sm">
              <p className="text-lg italic mb-4 text-white/90">{testimonial.quote}</p>
              <p className="font-semibold text-funeral-lighter">{testimonial.author}</p>
              <p className="text-sm text-funeral-light">{testimonial.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};