import { Images } from "@/utils/images";
const { category } = Images;

export const componentItems = {
  core: [
    {
      category: "processor",
      categoryImg: category.cpu,
      categoryName: "Processor",
      required: true,
    },
    {
      category: "motherboard",
      categoryImg: category.motherboard,
      categoryName: "Motherboard",
      required: true,
    },
    {
      category: "ram",
      categoryImg: category.ram,
      categoryName: "RAM",
      required: true,
    },
    {
      category: "power-supply",
      categoryImg: category.powerSupply,
      categoryName: "Power Supply",
      required: true,
    },
    {
      category: "storage-device",
      categoryImg: category.storageDevice,
      categoryName: "Storage Device",
      required: true,
    },
    {
      category: "monitor",
      categoryImg: category.monitor,
      categoryName: "Monitor",
      required: true,
    },
  ],
};
