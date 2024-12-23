const images = [
  "/ba54c8d5-8b27-4037-970d-655fb4c9e296_4_287746-162619334747380.webp",
  "/c56f1545-5466-43ad-b316-0ed3584eda8b-2_4_287746-162619336299512.webp",
  "/eadd193e-1202-40a1-bf25-ce99136b073e-2_4_287746-162619337021378.webp",
  "/f0789854-1c10-4009-8716-6e6aa8710f32_4_287746-162619335873491.webp",
  "/img-0671_4_287746-162702938288714.webp",
  "/img-0756_4_287746-162702937092683.webp"
];

export const Gallery = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-display text-center mb-16">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg">
              <img 
                src={image} 
                alt={`Olivia Fleming Smith Performance ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};