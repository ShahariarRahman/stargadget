import SmallProductCard from "@/components/UI/SmallProductCard";

export default function RelatedProducts({ products }) {
  return (
    products?.length > 0 && (
      <div className="px-5 bg-white rounded shadow-sm">
        <p className="text-base sm:text-lg font-semibold py-4 text-center text-secondary">
          Related Product
        </p>
        <div>
          {products.map((product) => (
            <SmallProductCard key={product.product_code} product={product} />
          ))}
        </div>
      </div>
    )
  );
}
