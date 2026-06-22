type PetalStormProps = {
  count: number;
  opacity: number;
  fading?: boolean;
};

export default function PetalStorm({
  count,
  opacity,
  fading = false,
}: PetalStormProps) {

  const petals = Array.from({ length: count });

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden z-50 transition-opacity duration-[3000ms] ${fading ? "opacity-0" : "opacity-100"}`}>

      {/* Growing screen cover */}
      <div
        className="absolute inset-0 bg-[#26141c] transition-opacity duration-500"
        style={{
          opacity,
        }}
      />

      {/* Petals */}
      {petals.map((_, i) => (
        <div
          key={i}
          className="absolute text-pink-200 text-3xl animate-petal"
          style={{
            top: `${Math.random() * 100}%`,
            left: "110%",
            opacity: 0.7 + Math.random() * 0.3,

            // Randomized timing feels more natural
            animationDelay: `${Math.random() * 1.5}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
}