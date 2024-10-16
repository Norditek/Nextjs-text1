import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Welcome to Norditek</h1>
          <p className="text-xl mb-8">
            AI and Automation Consulting to help your business thrive in the digital age.
          </p>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Connect with me:</h2>
            <div className="flex space-x-4">
              <a href="https://x.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                X.com
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                Instagram
              </a>
              <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">
                YouTube
              </a>
              <a href="https://threads.net/@yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                Threads
              </a>
            </div>
          </div>
          <Link href="/services" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
            Explore Our Services
          </Link>
        </div>
      </main>
      <footer className="bg-gray-100 py-4 text-center">
        <p>&copy; 2024 Norditek. All rights reserved.</p>
      </footer>
    </div>
  );
}
