export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">

      {/* Glow background */}
      <div className="absolute w-[600px] h-[600px] bg-indigo-600/20 blur-[140px] rounded-full top-20"></div>

      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent relative">
        Israel Ndamuka
      </h1>

      <p className="mt-6 text-neutral-400 max-w-2xl relative">
        Software Engineer building high-performance systems and algorithmic trading infrastructure.
      </p>

      <button className="mt-8 px-8 py-4 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/30 relative">
        View Projects
      </button>

    </section>
  )
}