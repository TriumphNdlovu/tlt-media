import { v2 as cloudinary } from 'cloudinary';
import type { NextApiRequest, NextApiResponse } from 'next';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME || '',
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '',
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET || '',
});

type CategorizedImages = {
  [key: string]: {
    url: string;
    public_id: string;
    folder: string;
  }[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Fetch all folders at the root level
    const folders = await cloudinary.api.sub_folders('');
    const categorizedImages: CategorizedImages = {};

    // Loop through each folder and fetch its images
    for (const folder of folders.folders) {
      const resources = await cloudinary.api.resources({
        type: 'upload',
        prefix: folder.path,
        max_results: 500, // Limit the number of results per folder
      });

      categorizedImages[folder.name] = resources.resources.map((resource: any) => ({
        url: resource.secure_url,
        public_id: resource.public_id,
        folder: folder.path,
      }));
    }

    res.status(200).json(categorizedImages);
  } catch (error: any) {
    console.error('Error fetching pictures:', error.message || error);
    res.status(500).json({ error: 'Failed to fetch pictures' });
  }
}
