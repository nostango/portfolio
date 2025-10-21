"use client"

export default function TransparentHeader() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-[999] max-w-5xl w-full bg-white/5 backdrop-blur-lg rounded-3xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white text-4xl font-bold">nostango</div> 
          <button className="group relative overflow-hidden rounded-full border-2 border-white px-6 py-2 text-white font-medium transition-all duration-300 hover:text-black">
            {/* Background animation overlay */}
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>

            {/* Button text */}
            <span className="relative z-10">Get in touch</span>
          </button>
        </div>
      </div>
    </header>
  )
}
