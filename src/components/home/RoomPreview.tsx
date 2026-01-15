import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Bed, Eye, Home, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import roomDeluxe2 from "@/assets/room-deluxe-2.jpg";
import roomFamily from "@/assets/room-family.jpg";
import roomStandard from "@/assets/room-standard.jpg";
import apartmentMain from "@/assets/apartment-main.jpg";
import apartmentKitchen from "@/assets/apartment-kitchen.jpg";
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

const rooms = [
  {
    id: 1,
    name: "Family Mountain View Room",
    images: [roomFamily1, roomFamily2],
    capacity: "4-5 Guests",
    bed: "King Bed + 1 Sofa Bed + 1 Mattress",
    view: "Mountain View",
    price: "PKR 9,000",
  },
  {
    id: 2,
    name: "Family Mountain View Room",
    images: [roomFamily3, roomFamily4],
    capacity: "4-5 Guests",
    bed: "King Bed + 1 Mattress",
    view: "Mountain View",
    price: "PKR 9,000",
  },
  {
    id: 3,
    name: "Delux family Room",
    images: [roomDelux1, roomDelux2],
    capacity: "4-5 Guests",
    bed: "King Bed + 1 Sofa Bed + 1 Mattress",
    view: "Road View",
    price: "PKR 8,000",
  },
  {
    id: 4,
    name: "Standard Family Room",
    images: [roomStandard1, roomStandard2],
    capacity: "2-3 Guests",
    bed: "1 King Bed + 1 Mattress",
    view: "Road View",
    price: "PKR 6,000",
  },
  {
    id: 5,
    name: "Full Apartment",
    description: "Experience the complete Luxus Retreat with our entire property rental. Includes 4 bedrooms, a fully equipped kitchen, living area, and exclusive access to all facilities. Ideal for large families, groups, or extended stays.",
    images: [apartmentView1, roomFamily1, roomFamily3, roomDelux1, roomStandard1, apartmentView2],
    capacity: "14-16 Guests",
    bed: "4 Bedrooms (Multiple Beds)",
    view: "Panoramic Mountain View",
    price: "PKR 30,000",
    priceNote: "per night",
    amenities: ["4 Private Bedrooms", "Full Kitchen", "Free Wi-Fi", "Hot Water", "Room Heaters", "Private Parking", "Mountain View", "Daily Housekeeping",],
    isApartment: true,
  },
];
const RoomImageGallery = ({ images, name }: { images: string[]; name: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-64 overflow-hidden group/gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${name} - View ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-1.5 rounded-full opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300 z-10"
      >
        <ChevronLeft className="w-4 h-4 text-foreground" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-1.5 rounded-full opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300 z-10"
      >
        <ChevronRight className="w-4 h-4 text-foreground" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-accent w-4" : "bg-background/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const RoomPreview = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
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
            Accommodations
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Our Rooms & Suites
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
            Choose from our thoughtfully designed rooms, each offering comfort and stunning views of the Nathiagali mountains.
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 ${
                room.isApartment ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Image Gallery */}
              <RoomImageGallery images={room.images} name={room.name} />

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  {room.isApartment && (
                    <span className="bg-accent/20 text-accent px-2 py-0.5 rounded text-xs font-body font-medium">
                      Entire Property
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {room.name}
                </h3>

                {/* Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                    <Users className="w-4 h-4 text-accent" />
                    <span>{room.capacity}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                    {room.isApartment ? (
                      <Home className="w-4 h-4 text-accent" />
                    ) : (
                      <Bed className="w-4 h-4 text-accent" />
                    )}
                    <span>{room.bed}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                    <Eye className="w-4 h-4 text-accent" />
                    <span>{room.view}</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg font-semibold text-accent">
                    {room.price}
                  </span>
                  <Button variant="gold" size="sm" asChild>
                    <Link to="/rooms">View</Link>
                  </Button>
                </div>
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
            <Link to="/rooms" className="flex items-center gap-2">
              View All Rooms
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomPreview;
