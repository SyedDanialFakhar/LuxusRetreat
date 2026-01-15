import { motion } from "framer-motion";
import { Mountain, Users, TreePine, Wifi, Car, Thermometer } from "lucide-react";

const highlights = [
  {
    icon: Mountain,
    title: "Mountain Views",
    description: "Wake up to stunning panoramic views of the Himalayan foothills",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Spacious rooms and warm hospitality for families of all sizes",
  },
  {
    icon: TreePine,
    title: "Peaceful Retreat",
    description: "Escape the city noise in our serene pine forest setting",
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description: "Stay connected with high-speed internet throughout the property",
  },
  {
    icon: Car,
    title: "Free Parking",
    description: "Complimentary secure parking for all our guests",
  },
  {
    icon: Thermometer,
    title: "Heating & Hot Water",
    description: "Stay warm and comfortable with 24/7 heating and hot water",
  },
];

const Highlights = () => {
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
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Experience the Best of Nathiagali
          </h2>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background rounded-xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <highlight.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {highlight.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
