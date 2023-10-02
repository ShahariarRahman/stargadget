import connect from "@/lib/db";

export default async function handler(req, res) {
  try {
    const { products } = await connect();
    const { category } = req.query;

    if (req.method === "GET") {
      const result = await products.find({ category }).toArray();
      res.status(200).json({
        success: true,
        message: `The products of category ${category} has been retrieved successfully`,
        data: result,
      });
    }
  } finally {
    // await client.close();
  }
}
