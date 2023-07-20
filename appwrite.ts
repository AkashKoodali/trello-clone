import { Client, Account, ID, Storage, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);
//

const acccount = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);

export { acccount, database, storage, ID };
