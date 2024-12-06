'use client'
import React, { useState } from "react";

import axios from "axios";

const ContentManagement = () => {
  const [images, setImages] = useState<File[]>([]);
  const [category, setCategory] = useState<string>("");
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImages([...event.target.files]);
    }
  };

  const handleUpload = async () => {
    if (!category || images.length === 0) {
      setUploadMessage("Please select a category and images.");
      return;
    }

    setUploading(true);
    setUploadMessage("");
    const cloudname = await process.env.NEXT_PUBLIC_CLOUD_NAME;

    try {
        for (const image of images) {
            const formData = new FormData();
            formData.append("file", image);
            formData.append("upload_preset", "uhlg7mqm");
            formData.append("folder", category);

            const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${cloudname}/image/upload`,
            formData
            );
            console.log('Upload response:', response.data);
        }
        setUploadMessage("Images uploaded successfully.");
        } catch (error) {
        console.error('Error uploading images:', error);
        setUploadMessage("Error uploading images. Please try again.");
        } finally {
        setUploading(false);
        setImages([]);
        setCategory("");
        }

  };

  return (
    <div className="min-h-screen bg-white text-black px-8 py-12 font-sans">
      <h1 className="text-3xl uppercase mb-8 font-bold">
        Content Management Page.
      </h1>

      <div className="max-w-xl mx-auto">
        <label className="block text-lg mb-4 uppercase">
          Select Category.
          <input
            type="select"
            placeholder="e.g., Wedding"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 mt-2 border border-black bg-transparent"
          />

        </label>

        <label className="block text-lg mb-4 uppercase">
          Select Images.
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 mt-2 border border-black bg-transparent"
          />
        </label>

        <div className="flex gap-4 flex-wrap mb-6">
          {images.length > 0 &&
            Array.from(images).map((img, index) => (
              <div key={index} className="w-24 h-24 bg-gray-100">
                <img
                  src={URL.createObjectURL(img)}
                  alt={`preview-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
        </div>

        <button
          onClick={handleUpload}
          className={`uppercase border px-4 py-2 ${
            uploading ? "bg-gray-400" : "bg-black text-white hover:bg-gray-700"
          }`}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload Images."}
        </button>

        {uploadMessage && (
          <p className="mt-4 text-lg text-center">
            {uploadMessage}.
          </p>
        )}
      </div>
    </div>
  );
};

export default ContentManagement;
