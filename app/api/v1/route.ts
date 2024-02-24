import dbConfig from "@/app/_constants/dbConfig";
import { appwriteDb } from "@/app/appwrite/config";
import { Query } from "appwrite";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // const response = await appwriteDb.listDocuments(
    //   dbConfig.appwriteDatabaseId,
    //   dbConfig.appwriteUserCollectionId,
    //   [Query.equal("$id", [params.id])]
    // );
    return Response.json("hello");
  } catch (error: any) {
    return Response.json({
      message: "Document was not fetched!!",
      error: error.response.message,
    });
  }
}
