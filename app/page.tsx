import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">🏥</span>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            AI-Powered Personal Health Assistant
          </h1>
        </div>
        
        <p className="text-lg text-gray-600 text-center sm:text-left max-w-2xl">
          Your intelligent companion for health monitoring, wellness guidance, and personalized healthcare insights.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">📊</div>
            <h3 className="font-semibold text-lg mb-2">Health Monitoring</h3>
            <p className="text-gray-600">Track your vital signs, symptoms, and health metrics with intelligent analysis.</p>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">💡</div>
            <h3 className="font-semibold text-lg mb-2">Smart Insights</h3>
            <p className="text-gray-600">Get personalized health recommendations powered by AI algorithms.</p>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">🔔</div>
            <h3 className="font-semibold text-lg mb-2">Health Alerts</h3>
            <p className="text-gray-600">Receive timely reminders for medications, appointments, and checkups.</p>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
            Get Started
          </button>
          <button className="rounded-full border border-solid border-gray-300 transition-colors flex items-center justify-center hover:bg-gray-50 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto">
            Learn More
          </button>
        </div>
      </main>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-500">
        <p>AI-Powered Personal Health Assistant v2.0</p>
        <span>•</span>
        <p>Built with Next.js 15 & FastAPI</p>
      </footer>
    </div>
  );
}
