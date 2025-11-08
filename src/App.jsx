import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}
