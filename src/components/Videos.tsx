import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Videos = () => {
  const videos = [
    {
      src: "/Show real (liv) Compres.mp4",
      title: "Show Reel 1"
    },
    {
      src: "/Show real 2 compres.mp4",
      title: "Show Reel 2"
    },
    {
      src: "/Singing wedding opra.mp4",
      title: "Wedding Opera Performance"
    }
  ];

  return (
    <section id="videos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display text-center mb-12">Performance Videos</h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {videos.map((video, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <video
                      controls
                      className="w-full h-full object-cover"
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <h3 className="text-xl font-display text-center mt-4">{video.title}</h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
  );
};