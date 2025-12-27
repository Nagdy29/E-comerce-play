import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow rounded-xl p-4">
      <img src={product.image} className="h-48 mx-auto" />
      <h3 className="font-bold mt-3">{product.name}</h3>
<p className="text-indigo-600 font-bold text-lg">{product.price}</p>

<Link
  to={`/products/${product.id}`}
  className="block text-center mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
>
  شراء الآن
</Link>
    </div>
  );
};

export default ProductCard;
