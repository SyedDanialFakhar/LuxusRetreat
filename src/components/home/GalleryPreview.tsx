import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroLodge from "@/assets/hero-lodge.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomFamily from "@/assets/room-family.jpg";
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
import apartmentView2 from "@/assets/terrace_view1.jpeg";
import winterView from "@/assets/front_snow.jpeg";

const images = [

  { src: apartmentView1, alt: "Luxus Retreat Exterior", category: "Exterior" },
  { src: roomFamily2, alt: "Panoramic Mountain View", category: "Views" },
  { src: roomFamily1, alt: "Spacious Family Room", category: "Rooms" },
  { src: roomStandard1, alt: "Comfortable Standard Room", category: "Rooms" },
  { src: apartmentView2, alt: "Terrace View", category: "Views" },
  { src: winterView, alt: "Lodge in Winter Season", category: "Views" },
  { src: roomFamily4, alt: "Morning Mist in Mountains", category: "Views" },
];

const GalleryPreview = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-accent text-sm tracking-widest uppercase">
            Gallery
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            A Glimpse of Paradise
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? "h-full min-h-[400px]" : "h-48 lg:h-56"
                }`}
              />
              <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-body text-primary-foreground font-medium bg-foreground/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/gallery" className="flex items-center gap-2">
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
