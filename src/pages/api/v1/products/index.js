import connect from "@/lib/db";
export default async function handler(req, res) {
  try {
    const { products } = await connect();
    if (req.method === "GET") {
      const result = await products.find({}).limit(20).toArray();
      const total = await products.countDocuments();
      res.status(200).json({
        success: true,
        message: `${result.length} products retrieved from ${total} products successfully`,
        data: result,
      });
    }
  } finally {
    // await client.close();
  }
}
