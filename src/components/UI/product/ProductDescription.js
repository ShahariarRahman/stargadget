export default function Description({ descriptions }) {
  return (
    descriptions && (
      <div
        id="product-description"
        className="pb-8 px-5 bg-white rounded tracking-normal leading-6 shadow-sm"
      >
        <h4 className="pt-5 text-lg lg:text-xl font-semibold">Description</h4>
        {descriptions.map(({ title, details }, index) => (
          <div key={index}>
            <h4 className="md:pt-4 text-lg lg:text-xl font-semibold">
              {title}
            </h4>
            <p className="pt-1 text-justify">{details}</p>
          </div>
        ))}
      </div>
    )
  );
}
