import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME || '',
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '',
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET || '',
});

type ImageResource = {
  url: string;
  public_id: string;
  folder: string;
};

type CategorizedImages = {
  [key: string]: ImageResource[];
};

export async function GET(request: Request) {
  console.log("I does get here");
  try {
    // Fetch all folders at the root level
    const folders = await cloudinary.api.sub_folders('');

    const categorizedImages: CategorizedImages = {};

    // Loop through each folder and fetch its images
    for (const folder of folders.folders) {
      // Fetch resources in the folder, with pagination support
      let resources: any[] = [];
      let next_cursor = null;

      do {
        const response = await cloudinary.api.resources({
          type: 'upload',
          prefix: folder.path,
          max_results: 500, // Adjust if necessary
          next_cursor: next_cursor,
        });

        resources = [...resources, ...response.resources];
        next_cursor = response.next_cursor;
      } while (next_cursor);

      // Store the categorized images by folder name
      categorizedImages[folder.name] = resources.map((resource: any) => ({
        url: resource.secure_url,
        public_id: resource.public_id,
        folder: folder.path,
      }));
    }

    categorizedImages.map((category:any) => {
      console.log(category);
    }
    );

    // Send the categorized images as the response
    return new Response(
      JSON.stringify(categorizedImages),
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error fetching pictures:', error.message || error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch pictures' }),
      { status: 500 }
    );
  }
}
