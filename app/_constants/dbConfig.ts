const dbConfig = {
  appwriteEndpoint: String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT),
  appwriteApiKey: String(process.env.APPWRITE_APIKEY),
  appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(process.env.APPWRITE_DATABASE_ID),
};

export default dbConfig;
