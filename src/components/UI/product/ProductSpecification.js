export default function ProductSpecification({ specification }) {
  if (!specification || !Object.keys(specification).length > 0) {
    return;
  }

  const specificationElement = Object.entries(specification).map(
    ([specTitle, specs], index) => (
      <div className="pb-5" key={index}>
        <h6 className="text-base px-5 py-2 rounded bg-secondary/10 text-secondary font-semibold">
          {specTitle}
        </h6>
        {Object.entries(specs).map(([specSubtitle, spec]) => (
          <div
            className="lg:flex px-2 md:px-4 py-2.5 border-b hover:bg-[#fafbfc]"
            key={specSubtitle}
          >
            <p className="w-full text-dim">{specSubtitle}</p>
            <div className="w-full">
              {Array.isArray(spec) ? (
                spec.map((singleSpec, index) => <p key={index}>{singleSpec}</p>)
              ) : (
                <p>{spec}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  );

  return (
    <div
      id="product-specification"
      className="px-4 lg:px-5 bg-white rounded shadow-sm"
    >
      <div className="py-5">
        <h2 className="text-lg lg:text-xl font-semibold">Specification</h2>
      </div>
      <div>{specificationElement}</div>
    </div>
  );
}
