import HomeProductCard from "@/components/UI/HomeProductCard";

export default function FeaturedProduct({ products }) {
  return (
    <div className="mt-16 text-center">
      <h3 className="text-xl font-semibold">Featured Products</h3>
      <p className="mt-1 text-dark">Check & Get Your Desired Product!</p>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3 text-gray-700">
        {products &&
          products.map((product) => (
            <HomeProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
}
