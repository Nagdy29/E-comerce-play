import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const Products = () => {
  return (
    <div dir="rtl">
      <Navbar />
      <Breadcrumb title="المنتجات" />

      <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </div>
  );
};

export default Products;
