type RotatingTextProps = {
  visible: boolean;
};

export default function RotatingText({ visible }: RotatingTextProps) {
  const items = [
    "SOULREND",
    "•",
    "CLOCKWORK TRIALS",
    "•",
    "ODD NUMBERS OUT",
    "•",
  ];

  return (
    <div
      className={`
        overflow-hidden w-full
        transition-opacity duration-1000
        ${visible ? "opacity-75" : "opacity-0"}
      `}
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {Array(4)
          .fill(items)
          .flat()
          .map((item, i) => (
            <span
              key={i}
              className="px-3 text-white text-4xl md:text-6xl font-semibold"
            >
              {item}
            </span>
          ))}
      </div>
    </div>
  );
}