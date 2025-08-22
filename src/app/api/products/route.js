import dbConnect from "@/lib/dbConnect";

export async function POST(req) {
  try {
    const body = await req.json();
    const productsCollection = await dbConnect("productsCollection");

    const result = await productsCollection.insertOne(body);

    return new Response(
      JSON.stringify({ success: true, insertedId: result.insertedId }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}
