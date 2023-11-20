import ComponentCard from "@/components/UI/pcBuilder/ComponentCard";
export default function ComponentSection({
  title,
  components,
  hideUnconsidered,
}) {
  return (
    <div>
      <div className="bg-dark/50 text-white px-2.5 text-xs leading-5 font-semibold">
        {title}
      </div>
      {components
        .filter(({ product_code }) => (hideUnconsidered ? product_code : true))
        .map((component) => (
          <ComponentCard key={component.category} component={component} />
        ))}
    </div>
  );
}
