export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute -top-1/4 left-1/4 h-[60vw] w-[60vw] animate-aurora rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)" }}
      />
      <div
        className="absolute right-0 top-1/3 h-[50vw] w-[50vw] animate-aurora rounded-full opacity-30 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #22D3EE 0%, transparent 70%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[45vw] w-[45vw] animate-aurora rounded-full opacity-20 blur-[130px]"
        style={{
          background: "radial-gradient(circle, #A78BFA 0%, transparent 70%)",
          animationDelay: "-12s",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
