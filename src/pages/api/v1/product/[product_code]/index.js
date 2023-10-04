import connect from "@/lib/db";

export default async function handler(req, res) {
  try {
    const { products } = await connect();
    const { product_code } = req.query;

    if (req.method === "GET") {
      const result = await products.findOne({ product_code });
      if (result) {
        return res.status(200).json({
          success: true,
          message: `The product information of product_code: ${product_code} has been retrieved successfully`,
          data: result,
        });
      }
      res.status(200).json({
        success: false,
        message: `Product information not found for product_code: ${product_code}`,
        data: {},
      });
    }
  } finally {
    // await client.close();
  }
}
