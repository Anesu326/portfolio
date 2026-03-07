export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-neutral-950">

      {/* Animated Gradient Glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] 
                      bg-indigo-600/20 rounded-full blur-[160px] 
                      animate-pulse-slow"></div>

      {/* Floating Orb 1 */}
      <div className="absolute top-[20%] left-[15%] w-64 h-64 
                      bg-cyan-500/10 rounded-full blur-3xl 
                      animate-float"></div>

      {/* Floating Orb 2 */}
      <div className="absolute bottom-[15%] right-[10%] w-72 h-72 
                      bg-purple-500/10 rounded-full blur-3xl 
                      animate-float-delayed"></div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>

    </div>
  )
}