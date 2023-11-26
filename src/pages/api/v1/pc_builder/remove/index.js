import connect from "@/lib/db";

export default async function handler(req, res) {
  try {
    const { pcBuilder } = await connect();
    if (req.method === "PATCH") {
      const { product_code, email } = JSON.parse(req.body);

      const result = await pcBuilder.updateOne(
        { email },
        {
          $pull: { product_codes: product_code },
        }
      );

      if (result) {
        return res.status(200).json({
          success: true,
          message: `${product_code} removed from pc builder component`,
          data: result,
        });
      }
      return res.status(204).json({
        success: false,
        message: `failed to remove ${product_code} pc builder component`,
        data: {},
      });
    }
  } finally {
    // await client.close();
  }
}
