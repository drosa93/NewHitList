import { Client, Account, Databases, ID } from 'appwrite';

export const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1')
client.setProject('67afd1fe002789edc85c');

export const account = new Account(client);

export const databases = new Databases(client);
