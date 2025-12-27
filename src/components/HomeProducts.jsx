import { products } from "../data/products";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const HomeProducts = () => {
  return (
    <section className="p-10 bg-white">
      <h3 className="text-3xl font-bold text-center mb-8">
        منتجات مميزة
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {products.slice(0, 3).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/products"
          className="text-blue-600 font-semibold hover:underline"
        >
          شوف كل المنتجات →
        </Link>
      </div>
    </section>
  );
};

export default HomeProducts;
