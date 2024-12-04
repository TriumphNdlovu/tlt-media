import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,       
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET, 
});

export async function fetchAllPicturesByCategory() {
  try {
    const folders = await cloudinary.api.sub_folders(''); // Fetch all root folders

    const categorizedImages: Record<string, any[]> = {};

    for (const folder of folders.folders) {
      const resources = await cloudinary.api.resources({
        type: 'upload',
        prefix: folder.path, // Fetch all resources in the folder
        max_results: 500,    // Adjust as needed (max: 500 per request)
      });

      categorizedImages[folder.name] = resources.resources.map((resource:any) => ({
        url: resource.secure_url,
        public_id: resource.public_id,
        folder: folder.path,
      }));
    }

    console.log(categorizedImages);

    return categorizedImages;
  } catch (error) {
    console.error('Error fetching pictures:', error);
    throw new Error('Failed to fetch pictures from Cloudinary.');
  }
}
