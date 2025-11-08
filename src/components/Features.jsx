import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "118",
    title: "All Elements",
    desc: "Access complete information on all 118 known chemical elements, from Hydrogen to Oganesson.",
  },
  {
    icon: "10",
    title: "Categories",
    desc: "Organized by element categories including metals, non-metals, metalloids, and noble gases.",
  },
  {
    icon: "∞",
    title: "Detailed Properties",
    desc: "Atomic mass, electron configuration, melting point, density, and much more for each element.",
  },
  {
    icon: "🔍",
    title: "Smart Search",
    desc: "Quickly find elements by name, symbol, atomic number, or browse by period and group.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    desc: "Beautifully crafted interface that works perfectly on desktop, tablet, and mobile devices.",
  },
  {
    icon: "🎨",
    title: "Modern UI",
    desc: "Clean, minimalist design with a contemporary color palette and smooth interactions.",
  },
];

export default function Features() {
  return (
    <section className="features">
      {features.map((f, i) => (
        <FeatureCard key={i} {...f} />
      ))}
    </section>
  );
}
