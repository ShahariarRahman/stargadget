export default function PriceInformation({ price_info }) {
  return (
    <div className="pb-8 px-5 bg-white rounded shadow-sm">
      <h3 className="pt-5 text-lg lg:text-xl font-semibold">
        {price_info?.title}
      </h3>
      <p className="pt-5 text-justify">{price_info?.details}</p>
    </div>
  );
}
