import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-slate-50 py-36 text-center">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
        موبايلك الجديد
        <br />
        من <span className="text-indigo-600">Abdul Aziz Online</span>
      </h2>

      <p className="text-gray-600 max-w-xl mx-auto mb-10 text-lg">
        اختار موبايلك قبل زيادة الأسعار واستفيد بأقوى الخصومات
      </p>

      <Link
        to="/products"
        className="bg-indigo-600 text-white px-12 py-4 rounded-xl text-lg hover:bg-indigo-700 transition"
      >
        تصفح المنتجات
      </Link>
    </section>
  );
};

export default Hero;
