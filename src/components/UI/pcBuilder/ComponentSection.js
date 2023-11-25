import ComponentCard from "@/components/UI/pcBuilder/ComponentCard";
export default function ComponentSection({
  title,
  components,
  hideUnconfigured,
  products,
}) {
  return (
    <div>
      <div className="bg-dark/50 text-white px-2.5 text-xs leading-5 font-semibold">
        {title}
      </div>
      {components
        .map((component) => ({
          ...component,
          ...products.find(
            (product) => product.category === component.category
          ),
        }))
        .filter(({ product_code }) => (hideUnconfigured ? product_code : true))
        .map((component) => (
          <ComponentCard key={component.category} component={component} />
        ))}
    </div>
  );
}
