import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
      <h1 className="font-extrabold text-2xl text-indigo-600">
        Abdul Aziz Online
      </h1>

      <ul className="flex gap-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-indigo-600">الرئيسية</Link>
        <Link to="/products" className="hover:text-indigo-600">المنتجات</Link>
        <Link to="/contact" className="hover:text-indigo-600">تواصل معنا</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
