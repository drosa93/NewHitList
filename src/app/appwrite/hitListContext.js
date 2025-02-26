import { databases } from './appwrite';

    const DATABASE_ID = '67b0078f0018d4b585c2'; // Replace with your database ID
    const COLLECTION_ID = '67b008520018e7f21c67'; // Replace with your collection ID
    
    async function getItems() {
      try {
        const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
        return response.documents;
      } catch (error) {
        console.error("Error fetching items:", error);
        return [];
      }
    }
    
    export { getItems };