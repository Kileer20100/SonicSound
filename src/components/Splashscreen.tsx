import { useEffect, useRef, type CSSProperties } from "react";

const colors = [
  '#3B82F6',
  '#EF4444',
  '#10B981',
  '#8B5CF6',
  '#F59E0B'
];

const corners = ["0% 0%", "100% 0%", "100% 100%", "0% 100%"];

export function SplashscreenComponent() {
  const w1Ref = useRef<HTMLDivElement>(null);
  const w2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let idx = 0;
    let useW1 = true;
    let topZIndex = 1;
    let cornerIdx = 0;
    let timeoutId: number;

    const nextWave = () => {
      const color = colors[idx];
      const currentWave = useW1 ? w1Ref.current : w2Ref.current;

      if (currentWave) {
        currentWave.style.transition = "none";
        
        const startPoint = corners[cornerIdx];
        currentWave.style.clipPath = `circle(0% at ${startPoint})`;
        currentWave.style.backgroundColor = color;

        topZIndex++;
        currentWave.style.zIndex = topZIndex.toString();

        currentWave.getBoundingClientRect(); 

        currentWave.style.transition = "clip-path 1.4s cubic-bezier(0.1, 0.8, 0.25, 1)";
        currentWave.style.clipPath = `circle(150% at ${startPoint})`;

        idx = (idx + 1) % colors.length;
        cornerIdx = (cornerIdx + 1) % corners.length;
        useW1 = !useW1;
      }

      timeoutId = setTimeout(nextWave, 800);
    };

    nextWave();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div style={styles.container}>
      <div ref={w1Ref} style={styles.wave} />
      <div ref={w2Ref} style={styles.wave} />
      <div style={styles.brandContainer}>SONICSOUND</div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  container: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#080810",
    overflow: "hidden",
  },
  wave: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    clipPath: "circle(0% at 0% 0%)",
  },
  brandContainer: {
    position: "relative",
    fontFamily: "'Arial Black', sans-serif",
    fontSize: "10vw",
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "-0.02em",
    color: "#FFFFFF",
    zIndex: 99999,
    whiteSpace: "nowrap",
    userSelect: "none",
    mixBlendMode: "exclusion",
  },
};
