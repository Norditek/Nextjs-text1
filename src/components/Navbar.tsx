import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Norditek</Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
