import { storage, ID } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUpload = await storage.createFile(
    "64b98a967f879e97be1f",
    ID.unique(),
    file
  );

  return fileUpload;
};

export default uploadImage;
