import { useState } from "react";
import reactLogo from "../assets/react.svg"; 
import axios from "axios";

function HomePage() {
  const [value, setValue] = useState("");
  const [shortUrl, setShortUrl] = useState(""); // <-- added state

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleShorten = async () => {
    if (!value.trim()) return;
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/shorten`, {
        originalUrl: value,
      });
      console.log(res.data.newUrl.shortUrl);
      setShortUrl(res.data.newUrl.shortUrl);
    } catch (err) {
      console.error("Error shortening URL:", err);
    }
  };

  return (
    <>
      <div className="relative h-[100vh] w-[100vw] bg-slate-950 overflow-hidden">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-8 py-4 bg-white/5 backdrop-blur-md border-b border-white/10 relative z-10">
          {/* Left: Logo */}
          <div className="flex items-center gap-2 text-white font-semibold text-lg">
            <img src={reactLogo} alt="logo" className="w-8 h-8" />
            <span className="text-white">
              URL<span className="text-blue-400">SHORTNER</span>
            </span>
          </div>

          {/* Middle: Links */}
          <div className="flex items-center gap-6 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
            <a href="/" className="text-blue-400 font-medium">
              Home
            </a>
            <a href="/about" className="text-white hover:text-blue-400">
              About
            </a>
            <a href="/admin" className="text-white hover:text-blue-400">
              Admin
            </a>
          </div>

          {/* Right: Create Account */}
          <button onClick={() => window.location.href = "/about"}  className="flex items-center gap-2 cursor-pointer text-white hover:text-blue-400 font-medium">
            About Page
          </button>
        </nav>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center text-center text-slate-500 px-4 py-20 relative z-10">
          <h1 className="text-center w-180 mt-2 text-7xl sm:text-5xl md:text-6xl font-bold mb-6">
            Transform Your <span className="text-blue-400">Links</span> With One
            Click
          </h1>
          <p className="text-sm sm:text-xl md:text-[20px] mb-8 max-w-2xl">
            Simplify your links with our easy-to-use URL shortener service.
          </p>

          <div
            className="w-full max-w-4xl p-8 rounded-2xl 
            bg-white/5 
            backdrop-blur-sm 
            border border-white/40 
            shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
            ring-1 ring-white/20"
          >
            <h2 className="text-2xl font-bold text-white text-center mb-6">
              Shorten Your URLs
            </h2>

            <div className="flex flex-col gap-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-6">
              {/* Input + Button */}
              <div className="flex items-center gap-2">
                <input
                  value={value}
                  onChange={handleChange}
                  type="text"
                  placeholder="Paste your long link here..."
                  className="text-blue-500 flex-1 text-lg bg-transparent placeholder-white/60 outline-none"
                />
                <button
                  onClick={handleShorten}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition-transform"
                >
                  Shorten
                </button>
              </div>

              {/* Shortened URL Output */}
              {shortUrl ? (
                <div className="flex items-center justify-between bg-white/10 border border-white/20 rounded-lg px-4 py-3">
                  <a
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline truncate max-w-[70%]"
                  >
                    {shortUrl}
                  </a>
                  <button
                    onClick={() => navigator.clipboard.writeText(shortUrl)}
                    className="text-sm text-white/80 hover:text-white bg-white/10 px-3 py-1 rounded-md"
                  >
                    Copy
                  </button>
                </div>
              ) : (
                <p className="text-white/60 text-sm text-center">
                  Your shortened link will appear here
                </p>
              )}
            </div>
          </div>
        </main>

        {/* Background blobs */}
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
      </div>
    </>
  );
}

export default HomePage;
