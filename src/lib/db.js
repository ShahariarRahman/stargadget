import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const connect = async () => {
  try {
    if (!client.topology) {
      await client.connect();
      console.log("🛢 database connected successfully");
    }
    const starGadgetDB = client.db("star-gadget");
    return {
      products: starGadgetDB.collection("products"),
      pcBuilder: starGadgetDB.collection("pcBuilder"),
    };
  } catch (error) {
    console.error("failed to connect to database:", error);
  }
};

export default connect;
