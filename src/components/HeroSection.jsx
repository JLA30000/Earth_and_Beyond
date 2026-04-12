export default function HeroSection({ image, children }) {
  return (
    <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center py-32">
        {children}
      </div>
    </section>
  );
}
