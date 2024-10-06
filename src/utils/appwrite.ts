import { Account, Client, Databases } from "appwrite";

export const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('67023a3e000857cdab6c')

export const databases = new Databases(client)
export const account = new Account(client)
export { ID } from 'appwrite'