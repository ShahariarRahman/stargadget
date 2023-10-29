export default function KeyFeatures({ features }) {
  return (
    <div className="py-2">
      <h4 className="py-2 text-lg">Key Features</h4>
      {features &&
        Object.entries(features).map(([title, value]) => (
          <div key={title}>
            <span>{title}:&nbsp; </span>
            <span>{value}</span>
          </div>
        ))}
    </div>
  );
}
