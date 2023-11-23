import connect from "@/lib/db";

export default async function handler(req, res) {
  try {
    const { pcBuilder } = await connect();
    if (req.method === "PATCH") {
      const { product_code, email } = JSON.parse(req.body);

      const exist = await pcBuilder.findOne({ email });
      let result;

      if (exist) {
        if (!exist.product_codes.includes(product_code)) {
          result = await pcBuilder.updateOne(
            { email },
            {
              $push: {
                product_codes: product_code,
              },
            }
          );
        } else {
          return res.status(409).json({
            success: false,
            message: `component already added`,
            data: {},
          });
        }
      } else {
        result = await pcBuilder.insertOne({
          email,
          product_codes: [product_code],
        });
      }
      res.status(200).json({
        success: true,
        message: `added successfully pc builder component`,
        data: result,
      });
    }
  } finally {
    // await client.close();
  }
}
