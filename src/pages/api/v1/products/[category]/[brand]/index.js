import connect from "@/lib/db";

export default async function handler(req, res) {
  try {
    const { products } = await connect();
    const { category, brand } = req.query;

    if (req.method === "GET") {
      const query = {
        category: category,
        brand: {
          $regex: brand,
          $options: "i",
        },
      };
      const result = await products.find(query).toArray();
      res.status(200).json({
        success: true,
        message: `The products of category ${category} & brand ${brand} has been retrieved successfully`,
        data: result,
      });
    }
  } finally {
    // await client.close();
  }
}
