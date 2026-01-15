import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { X } from "lucide-react";
import heroLodge from "@/assets/hero-lodge.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomFamily from "@/assets/room-family.jpg";
import roomStandard from "@/assets/room-standard.jpg";
import mountainView from "@/assets/mountain-view.jpg";
import roomFamily1 from "@/assets/family_mountain_view3.jpeg";
import roomFamily2 from "@/assets/family_mountain_view4.jpeg";
import roomFamily3 from "@/assets/family_mountain_view1.jpeg";
import roomFamily4 from "@/assets/family_mountain_view2.jpeg";
import roomDelux1 from "@/assets/delux_family_view1.jpeg";
import roomDelux2 from "@/assets/delux_family_view2.jpeg";
import roomStandard1 from "@/assets/standard_family_view1.jpeg";
import roomStandard2 from "@/assets/standard_family_view2.jpeg";
import apartmentView1 from "@/assets/front1.jpeg";
import winterView from "@/assets/front_snow.jpeg";
import apartmentView2 from "@/assets/terrace_view1.jpeg";

const galleryImages = [
  { src: apartmentView1, alt: "Luxus Retreat Exterior", category: "Exterior" },
  { src: roomFamily2, alt: "Panoramic Mountain View", category: "Views" },
  { src: roomFamily1, alt: "Spacious Family Room", category: "Rooms" },
  { src: roomFamily3, alt: "Spacious Family Room", category: "Rooms" },
  { src: roomDelux1, alt: "Spacious Family Room", category: "Rooms" },
  { src: roomStandard1, alt: "Comfortable Standard Room", category: "Rooms" },
  { src: apartmentView2, alt: "Terrace View", category: "Views" },
  { src: winterView, alt: "Lodge in Winter Season", category: "Views" },
  { src: roomFamily4, alt: "Morning Mist in Mountains", category: "Views" },
];

const categories = ["All", "Exterior", "Rooms", "Views"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-accent text-sm tracking-widest uppercase">
              Visual Journey
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-3">
              Our Gallery
            </h1>
            <p className="font-body text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
              Explore the beauty of Luxus Retreat through our curated collection of images.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`font-body px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={`${image.alt}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3]"
                  onClick={() => setLightboxImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                    <div className="w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="font-body text-primary-foreground font-medium text-sm">
                        {image.alt}
                      </p>
                      <span className="font-body text-primary-foreground/70 text-xs">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightboxImage}
              alt="Gallery preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
