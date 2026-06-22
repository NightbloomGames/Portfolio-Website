import { useEffect, useState } from "react";

export default function LoadingBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 flex items-center gap-3 text-white w-64">
      {/* percent on right */}
      <div className="text-sm opacity-80 w-12 text-right"> {progress}%</div>

    </div>
  );
}