import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Wifi,
  Car,
  Thermometer,
  Droplets,
  UtensilsCrossed,
  Shield,
  Mountain,
  Users,
  Sparkles,
  Clock,
  Phone,
  Heart,
} from "lucide-react";

const facilities = [
  {
    icon: Wifi,
    title: "Free High-Speed Wi-Fi",
    description: "Stay connected with complimentary high-speed internet access throughout the property.",
  },
  {
    icon: Car,
    title: "Free Parking",
    description: "Secure, complimentary parking space for all guests right at our doorstep.",
  },
  {
    icon: Thermometer,
    title: "Room Heaters",
    description: "Stay warm and cozy with individual room heaters during the cooler mountain nights.",
  },
  {
    icon: Droplets,
    title: "24/7 Hot Water",
    description: "Enjoy hot water around the clock for a refreshing shower anytime you want.",
  },
  {
    icon: UtensilsCrossed,
    title: "Room Service",
    description: "Delicious meals and refreshments delivered right to your room on request.",
  },
  {
    icon: Sparkles,
    title: "Daily Housekeeping",
    description: "Our dedicated team ensures your room is clean and fresh every day.",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Round-the-clock security personnel ensuring your safety and peace of mind.",
  },
  {
    icon: Mountain,
    title: "Scenic Views",
    description: "Every room offers stunning views of the lush pine forests and mountains.",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Spacious accommodations and activities suitable for families with children.",
  },
  {
    icon: Clock,
    title: "Flexible Check-in",
    description: "We accommodate early check-ins and late check-outs based on availability.",
  },
  {
    icon: Phone,
    title: "Concierge Service",
    description: "Our staff can help arrange local tours, transportation, and activities.",
  },
  {
    icon: Heart,
    title: "Special Occasions",
    description: "Celebrate birthdays, anniversaries, and special moments with our custom arrangements.",
  },
];

const Facilities = () => {
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
              Amenities
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-3">
              Facilities & Services
            </h1>
            <p className="font-body text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
              Everything you need for a comfortable and memorable stay in the mountains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-card rounded-xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <facility.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {facility.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {facility.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Experience Our Hospitality?
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Book your stay today and enjoy all these amenities and more.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link to="/rooms">View Our Rooms</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Facilities;
