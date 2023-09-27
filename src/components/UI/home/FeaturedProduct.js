export default function FeaturedProduct({ products }) {
  return (
    <div className="mt-16 text-center">
      <h3 className="text-xl font-semibold">Featured Products</h3>
      <p className="mt-1 text-dark">Check & Get Your Desired Product!</p>
      {products.length}
    </div>
  );
}
