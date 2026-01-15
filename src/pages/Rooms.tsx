import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Users, Bed, Eye, Phone, Home, ChevronLeft, ChevronRight, UtensilsCrossed } from "lucide-react";
import { useState } from "react";
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
    description: "Generous space for families with multiple beds and all the amenities you need for a comfortable stay.",
    images: [roomFamily1, roomFamily2],
    capacity: "4-5 Guests",
    bed: "King Bed + 1 Sofa Bed + 1 Mattress",
    view: "Mountain View",
    price: "PKR 9,000",
    priceNote: "per night",
    amenities: ["Free Wi-Fi", "Hot Water", "Room Heater", "Mountain View", "Room Service", "Terrace"],
  },
  {
    id: 2,
    name: "Family Mountain View Room",
    description: "Spacious and elegant with stunning mountain views. Perfect for those seeking extra comfort and luxury.",
    images: [roomFamily3, roomFamily4],
    capacity: "4-5 Guests",
    bed: "King Bed + 1 Mattress",
    view: "Mountain View",
    price: "PKR 9,000",
    priceNote: "per night",
    amenities: ["Free Wi-Fi", "Hot Water", "Room Heater", "Large Bathroom", "Mountain View", "Room Service", "Extra Bedding", "Terrace"],
  },
  {
    id: 3,
    name: "Delux family Room",
    description: "A cozy retreat perfect for family or couples. Enjoy modern amenities with traditional mountain charm.",
    images: [roomDelux1, roomDelux2],
    capacity: "4-5 Guests",
    bed: "King Bed + 1 Sofa Bed + 1 Mattress",
    view: "Road View",
    price: "PKR 8,000",
    priceNote: "per night",
    amenities: ["Free Wi-Fi", "Hot Water", "Room Heater", "Clean Bathroom", "Daily Housekeeping", "Terrace"],
  },
  {
    id: 4,
    name: "Standard Family Room",
    description: "A cozy retreat perfect for solo travelers or couples. Enjoy modern amenities with traditional mountain charm.",
    images: [roomStandard1, roomStandard2],
    capacity: "2-3 Guests",
    bed: "1 King Bed + 1 Mattress",
    view: "Road View",
    price: "PKR 6,000",
    priceNote: "per night",
    amenities: ["Free Wi-Fi", "Hot Water", "Room Heater", "Clean Bathroom", "Daily Housekeeping", "Terrace"],
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

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-card group">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${name} - View ${index + 1}`}
          className={`w-full h-80 lg:h-96 object-cover transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0 absolute inset-0"
          }`}
        />
      ))}
      
      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-accent w-6" : "bg-background/60 hover:bg-background/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Rooms = () => {
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
              Accommodations
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-3">
              Our Rooms & Suites
            </h1>
            <p className="font-body text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
              Each room is designed with your comfort in mind, featuring modern amenities and stunning views of the Nathiagali mountains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rooms List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 space-y-20">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                room.isApartment ? "bg-muted/30 rounded-3xl p-6 lg:p-10" : ""
              }`}
            >
              {/* Image Gallery */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <RoomImageGallery images={room.images} name={room.name} />
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                {room.isApartment && (
                  <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-body font-medium mb-4">
                    ✨ Entire Property Rental
                  </span>
                )}
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {room.name}
                </h2>
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  {room.description}
                </p>

                {/* Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 text-foreground font-body">
                    <Users className="w-5 h-5 text-accent" />
                    <span>{room.capacity}</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground font-body">
                    {room.isApartment ? (
                      <Home className="w-5 h-5 text-accent" />
                    ) : (
                      <Bed className="w-5 h-5 text-accent" />
                    )}
                    <span>{room.bed}</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground font-body">
                    <Eye className="w-5 h-5 text-accent" />
                    <span>{room.view}</span>
                  </div>
                  {room.isApartment && (
                    <div className="flex items-center gap-3 text-foreground font-body">
                      <UtensilsCrossed className="w-5 h-5 text-accent" />
                      <span>Full Kitchen</span>
                    </div>
                  )}
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {room.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-sm font-body"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div>
                    <span className="font-display text-3xl font-bold text-accent">
                      {room.price}
                    </span>
                    <span className="font-body text-muted-foreground text-sm ml-2">
                      {room.priceNote}
                    </span>
                  </div>
                  <Button variant="whatsapp" size="lg" asChild>
                    <a
                      href={`https://wa.me/923165626532?text=Hello, I would like to inquire about the ${room.name} at Luxus Retreat Nathiagali.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Inquire Now
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;
