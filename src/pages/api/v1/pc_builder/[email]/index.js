import connect from "@/lib/db";

export default async function handler(req, res) {
  try {
    const { pcBuilder, products } = await connect();
    const { email } = req.query;

    if (req.method === "GET") {
      const result = await pcBuilder.findOne({ email }, { _id: 0, email: 0 });
      if (result) {
        const aggregationResult = await products
          .aggregate([
            {
              $match: {
                product_code: { $in: result.product_codes },
              },
            },
            {
              $project: {
                category: 1,
                product_name: 1,
                price: 1,
                product_code: 1,
                image_url: 1,
              },
            },
            {
              $group: {
                _id: null, // Grouping all documents into a single group
                totalProduct: { $sum: 1 }, // Count the number of documents
                totalPrice: { $sum: "$price" }, // Sum the price field for each document
                products: { $push: "$$ROOT" },
              },
            },
          ])
          .toArray();
        return res.status(200).json({
          success: true,
          message: `pc builder components retrieved successfully`,
          data: aggregationResult[0],
        });
      }
      return res.status(200).json({
        success: false,
        message: `pc builder components not found`,
        data: {},
      });
    }

    if (req.method === "DELETE") {
      const result = await pcBuilder.findOneAndDelete({ email });
      if (result) {
        return res.status(200).json({
          success: true,
          message: `Your PC has been build successfully! Old components cleared.`,
          data: result,
        });
      }
      return res.status(200).json({
        success: false,
        message: `Failed to build your pc. Try again!`,
        data: {},
      });
    }
  } finally {
    // await client.close();
  }
}
