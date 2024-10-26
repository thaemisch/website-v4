import { Client, Databases } from "appwrite";

const endpoint = process.env.NEXT_PUBLIC_AW_ENDPOINT;
const project = process.env.NEXT_PUBLIC_AW_PROJECT_ID;

const client = new Client();
client
    .setEndpoint("https://appwrite.thaemisch.com/v1")
    .setProject(project);

const databases = new Databases(client);

export { client, databases };