
import axios from "axios"
import { useState, useEffect } from "react"

function AdminPage() {
  const [urlData, setUrlData] = useState([])
  const [loading, setLoading] = useState(true)
  const [totalUrls, setTotalUrls] = useState(0)
  const [totalClicks, setTotalClicks] = useState(0)

  
  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/admin/urls`)
      const urls = res.data.urls || []

      setUrlData(urls)
      setTotalUrls(urls.length)
      setTotalClicks(urls.reduce((sum, url) => sum + (url.clicks || 0), 0))
    } catch (err) {
      console.error("Error fetching URL data:", err)
    } finally {
      setLoading(false)
    }
  }

  fetchData()
}, [])

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    // You could add a toast notification here
  }

  return (
    <>
      <div className="overflow-hidden relative min-h-screen w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

        <div className="relative z-10 p-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">URL<span className="text-blue-500">SHORTNER</span> Admin</h1>
            <p className="text-slate-400">Manage and monitor your shortened URLs</p>
          </div>

          <div className="text-slate-400 hover:text-white cursor-pointer text-xl"><a href="/"><span className="sr-only">Home</span>
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.8"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="w-6 h-6 transition-colors"
  aria-hidden="true"
>
  {/* Roof */}
  <path d="M3 10.5L12 4l9 6.5" />
  {/* House body */}
  <path d="M5 10v10h5v-5h4v5h5V10" />
</svg></a></div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6">
              <h3 className="text-slate-400 text-sm font-medium mb-2">Total URLs</h3>
              <p className="text-3xl font-bold text-white">{totalUrls}</p>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6">
              <h3 className="text-slate-400 text-sm font-medium mb-2">Total Clicks</h3>
              <p className="text-3xl font-bold text-white">{totalClicks}</p>
            </div>
          </div>

          
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg overflow-hidden">
            <div className="p-6 border-b border-slate-800">
              <h2 className="text-xl font-semibold text-white">URL Analytics</h2>
            </div>

            {loading ? (
              <div className="p-8 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
                <p className="text-slate-400 mt-4">Loading URL data...</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-800/50">
                    <tr>
                      <th className="text-left p-4 text-slate-300 font-medium">Original URL</th>
                      <th className="text-left p-4 text-slate-300 font-medium">Short URL</th>
                      <th className="text-left p-4 text-slate-300 font-medium">Clicks</th>
                      <th className="text-left p-4 text-slate-300 font-medium">Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    {urlData.map((url) => (
                      <tr key={url.id} className="border-t border-slate-800 hover:bg-slate-800/30">
                        <td className="p-4">
                          <div className="max-w-xs truncate">
                            <p className="text-white " title={url.originalUrl}>
                              {url.originalUrl}
                            </p>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span className="text-pink-400 font-mono">{url.shortUrl}</span>
                            <button
                              onClick={() => copyToClipboard(url.shortUrl)}
                              className="text-slate-400 hover:text-white transition-colors"
                              title="Copy to clipboard"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td className="p-4">  
                          <div className="text-center flex items-center gap-2">
                            <span className="text-center text-white font-semibold">{url.clicks}</span>
                            
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-slate-400">{new Date(url.createdAt).toLocaleString()}</span>
                        </td>
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminPage

