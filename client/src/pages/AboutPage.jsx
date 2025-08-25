import {
  Globe,
  Target,
  Users,
  Code,
  Wrench,
  Server,
  Shield,
  Github,
  ExternalLink,
  Copy,
  BarChart3,
  Link2,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            URL Shortener App
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A full-stack MERN application built for an internship assignment at{" "}
            <span className="text-purple-300 font-medium">LC Corporate</span>
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Creating, managing, and tracking shortened URLs.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 max-w-6xl mx-auto">
          {/* Project Overview */}
          <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-semibold">Project Overview</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                <span className="text-white font-medium">The Challenge:</span> Build a web app where users can paste
                those ridiculously long URLs and get back something actually shareable.
              </p>
              <p className="text-lg">
                The magic happens when someone clicks the short link - they get redirected to the original destination
                seamlessly. Plus, I added some analytics because... why not track those clicks? 📊
              </p>
            </div>
          </section>

          {/* Purpose & Audience */}
          <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-pink-400" />
              <h2 className="text-3xl font-semibold">Purpose & Audience</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-medium text-purple-300 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Built For
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• LC Corporate internship assignment</li>
                  <li>• Demonstrating full-stack skills</li>
                  <li>• Portfolio piece (hopefully a good one!)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-pink-300 mb-3 flex items-center gap-2">
                  <Link2 className="w-5 h-5" />
                  What It Actually Does
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Turns monster URLs into tiny ones</li>
                  <li>• Makes sharing links less painful</li>
                  <li>• Tracks who's actually clicking (admin only)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-semibold">Tech Stack</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-purple-300 mb-4">Frontend</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-white font-medium">React + Vite</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    <span className="text-white font-medium">TailwindCSS</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-white font-medium">React Router DOM</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-pink-300 mb-4">Backend</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-white font-medium">Node.js</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-white font-medium">Express.js</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-white font-medium">MongoDB + Mongoose</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Libraries & Tools */}
          <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="w-8 h-8 text-pink-400" />
              <h2 className="text-3xl font-semibold">Libraries & Tools</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Axios", desc: "HTTP requests", color: "bg-blue-500/20 text-blue-300" },
                { name: "Lucide React", desc: "Pretty icons", color: "bg-purple-500/20 text-purple-300" },
                { name: "TailwindCSS", desc: "CSS magic", color: "bg-cyan-500/20 text-cyan-300" },
                { name: "dotenv & cors", desc: "Backend essentials", color: "bg-green-500/20 text-green-300" },
              ].map((tool, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${tool.color} text-center hover:scale-105 transition-transform`}
                >
                  <div className="font-medium">{tool.name}</div>
                  <div className="text-sm opacity-80">{tool.desc}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-400 mt-6 text-center">
              Those fancy background effects? Thanks to <span className="text-purple-300">bg.ibelick</span> ✨
            </p>
          </section>

          {/* API Endpoints */}
          <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-semibold">API Endpoints</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-green-600 text-white text-sm rounded font-mono">POST</span>
                  <code className="text-green-300 font-mono">/api/shorten</code>
                </div>
                <p className="text-gray-400 ml-16">Accepts a long URL and returns a shortened version</p>
              </div>
              <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded font-mono">GET</span>
                  <code className="text-blue-300 font-mono">/:shortcode</code>
                </div>
                <p className="text-gray-400 ml-16">Redirects user to the original long URL</p>
              </div>
              <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded font-mono">GET</span>
                  <code className="text-purple-300 font-mono">/admin/urls</code>
                </div>
                <p className="text-gray-400 ml-16">Admin-only endpoint to fetch all URLs with analytics</p>
              </div>
            </div>
          </section>

          {/* Admin Features */}
          <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-pink-400" />
              <h2 className="text-3xl font-semibold">Admin Features</h2>
              <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full">
                Extra Credit
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="font-medium">Analytics Dashboard</h3>
                    <p className="text-sm text-gray-400">See how many people actually clicked your links</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                  <Copy className="w-6 h-6 text-pink-400" />
                  <div>
                    <h3 className="font-medium">URL Management</h3>
                    <p className="text-sm text-gray-400">One-click copying because who has time to select text?</p>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4 border border-gray-700">
                <h4 className="text-purple-300 font-medium mb-3">What You'll See in the Table:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• The original (probably way too long) URL</li>
                  <li>• Your shiny new short URL</li>
                  <li>• Click count (prepare to be disappointed)</li>
                  <li>• When you created it</li>
                </ul>
              </div>
            </div>
          </section>

          
        </div>

        
      </div>
    </div>
  )
}
