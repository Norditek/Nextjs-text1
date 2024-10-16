import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea id="message" name="message" required className="w-full px-3 py-2 border rounded-md" rows={4}></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
            Send Message
          </button>
        </form>
      </main>
      <footer className="bg-gray-100 py-4 text-center">
        <p>&copy; 2024 Norditek. All rights reserved.</p>
      </footer>
    </div>
  );
}
