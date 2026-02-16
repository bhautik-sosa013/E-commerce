import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
const AboutHero = () => (
  <section className="relative h-175 flex items-center overflow-hidden bg-black">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-50"
    >
      <source
        src="https://pikkme.com/cdn/shop/videos/c/vp/8bd6813624eb4be19540154a990ac332/8bd6813624eb4be19540154a990ac332.HD-720p-4.5Mbps-39202667.mp4?v=0"
        type="video/mp4"
      />
    </video>
    <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-black to-gray-800 opacity-10"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
      <h1 className="text-6xl md:text-8xl font-semibold mb-6 text-white tracking-tight">
        Crafted for iPhone
      </h1>
      <p className="text-2xl md:text-3xl text-gray-300 mb-12 font-light max-w-3xl mx-auto">
        Premium protection designed exclusively for your iPhone. Where
        innovation meets elegance.
      </p>
      <Link
        to="/products"
        className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-full font-medium hover:bg-gray-100 transition-all"
      >
        Shop iPhone Cases
        <ChevronRight size={20} />
      </Link>
    </div>
  </section>
);
export default AboutHero;
