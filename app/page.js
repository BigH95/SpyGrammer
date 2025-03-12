export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <main className="flex flex-col items-center justify-center flex-1 px-4 text-center">
        <h1 className="text-4xl font-bold">SpyGrammer 🚀</h1>
        <p className="text-lg mt-4">
          Track your Instagram interactions like never before!
        </p>
        <p className="text-gray-400 text-sm mt-2">Get started today!</p>

        <a
          href="#"
          className="mt-6 w-40 p-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-white text-center"
        >
          Get Started
        </a>
      </main>
    </div>
  );
}

