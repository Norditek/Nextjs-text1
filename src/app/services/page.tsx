import Navbar from "@/components/Navbar";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">AI Consulting</h2>
            <p className="text-gray-700">We help businesses leverage artificial intelligence to improve efficiency and drive innovation.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Automation Solutions</h2>
            <p className="text-gray-700">Streamline your processes with our custom automation solutions tailored to your business needs.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Digital Transformation</h2>
            <p className="text-gray-700">Guide your organization through the digital landscape with our comprehensive transformation strategies.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">AI Training & Workshops</h2>
            <p className="text-gray-700">Empower your team with knowledge through our specialized AI and automation training programs.</p>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 py-4 text-center">
        <p>&copy; 2024 Norditek. All rights reserved.</p>
      </footer>
    </div>
  );
}
