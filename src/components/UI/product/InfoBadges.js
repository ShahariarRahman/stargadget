export default function InfoBadges({
  price,
  regular_price,
  status,
  product_code,
  brand,
}) {
  const infoItems = [
    ["Price", `${Number(price).toLocaleString()} ৳`],
    ["Regular Price", `${Number(regular_price).toLocaleString()} ৳`],
    ["Status", status ? "In Stock" : "Out Of Stock"],
    ["Product Code", product_code],
    ["Brand", brand],
  ];
  return (
    <div className="flex flex-wrap gap-2 text-xs lg:text-sm">
      {infoItems.map(([label, value]) => (
        <span
          key={label}
          className="bg-dark/5 px-3 py-1.5 inline-block lg:text-sm rounded-3xl"
        >
          <span className="text-dim">{label}: </span>
          <span className="lg:font-semibold">{value}</span>
        </span>
      ))}
    </div>
  );
}
