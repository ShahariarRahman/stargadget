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
  peripheral: [
    {
      category: "gpu",
      categoryImg: category.gpu,
      categoryName: "GPU",
      required: false,
    },
    {
      category: "mouse",
      categoryImg: category.mouse,
      categoryName: "Mouse",
      required: false,
    },
    {
      category: "keyboard",
      categoryImg: category.keyboard,
      categoryName: "Keyboard",
      required: false,
    },
    {
      category: "power-station",
      categoryImg: category.powerStation,
      categoryName: "Power Station",
      required: false,
    },
    {
      category: "printer",
      categoryImg: category.printer,
      categoryName: "Printer",
      required: false,
    },
    {
      category: "headphone",
      categoryImg: category.headphone,
      categoryName: "Headphone",
      required: false,
    },
    {
      category: "bluetooth-speaker",
      categoryImg: category.bluetoothSpeakers,
      categoryName: "Bluetooth Speakers",
      required: false,
    },
  ],
};
