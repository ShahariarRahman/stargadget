export const filteringOptions = {
  priceRange: {
    maxRange: [0, 685000],
    defaultRange: [0, 685000],
  },
  availability: [
    ["In Stock", "in_stock"],
    ["Pre Order", "pre_order"],
    ["Upcoming", "upcoming"],
  ],
  rating: ["1", "2", "3", "4", "5"],
  filterMenu: {
    name: "Product",
    sortOptions: [
      ["Default", "default"],
      ["Price (Low > High)", "asc"],
      ["Price (High > Low)", "desc"],
    ],
    showOptions: [20, 24, 48, 75, 90],
  },
};
