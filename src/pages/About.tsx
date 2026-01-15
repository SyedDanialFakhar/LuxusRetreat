import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroLodge from "@/assets/hero-lodge.jpg";
import mountainView from "@/assets/mountain-view.jpg";

const values = [
  {
    icon: Heart,
    title: "Warm Hospitality",
    description: "We treat every guest like family, ensuring a comfortable and memorable stay.",
  },
  {
    icon: Shield,
    title: "Safety & Comfort",
    description: "Your safety and comfort are our top priorities in everything we do.",
  },
  {
    icon: Star,
    title: "Quality Service",
    description: "We maintain the highest standards of cleanliness and service excellence.",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Our lodge is designed to welcome families of all sizes with open arms.",
  },
];

const About = () => {
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
              Our Story
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-3">
              About Luxus Retreat
            </h1>
            <p className="font-body text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
              A legacy of hospitality in the heart of Nathiagali's pristine mountains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-body text-accent text-sm tracking-widest uppercase">
                Welcome to Our Home
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-6">
                Where Mountain Beauty Meets Comfort
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Nestled in the serene hills of Nathiagali, Luxus Retreat was born from a simple dream: to share the breathtaking beauty of Pakistan's northern mountains with travelers seeking peace and tranquility.
                </p>
                <p>
                  Our lodge stands surrounded by towering pine trees, with panoramic views of the Himalayan foothills that change with every season. From misty mornings to golden sunsets, every moment here is a feast for the senses.
                </p>
                <p>
                  We believe that true hospitality comes from the heart. Our dedicated team works tirelessly to ensure that every guest feels at home, whether you're here for a romantic getaway, a family vacation, or a peaceful retreat from city life.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src={heroLodge}
                  alt="Luxus Retreat Building"
                  className="w-full h-96 object-cover rounded-2xl shadow-card"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-elevated">
                  <p className="font-display text-3xl font-bold">10+</p>
                  <p className="font-body text-sm">Years of Excellence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-body text-accent text-sm tracking-widest uppercase">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img
                src={mountainView}
                alt="Nathiagali Mountain View"
                className="w-full h-96 object-cover rounded-2xl shadow-card"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="font-body text-accent text-sm tracking-widest uppercase">
                Why Luxus Retreat?
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-6">
                Your Perfect Mountain Escape
              </h2>
              <ul className="space-y-4 font-body text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Prime location with stunning views of Nathiagali's famous pine forests</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Thoughtfully designed rooms with modern amenities and traditional charm</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Personalized service from our experienced hospitality team</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Easy access to popular hiking trails and local attractions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Family-friendly environment with activities for all ages</span>
                </li>
              </ul>

              <Button variant="gold" size="lg" className="mt-8" asChild>
                <Link to="/rooms">Explore Our Rooms</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
