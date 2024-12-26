# TLT Media Website

This repository contains the codebase for a modern photography portfolio website built using Next.js and Cloudinary. The website allows photographers to showcase their work, organize images into categories, and manage content through a dedicated content management page.

## Features

- **Dynamic Photo Gallery**: Display images fetched directly from Cloudinary.
- **Responsive Design**: Optimized for desktop and mobile viewing.
- **Clean Aesthetic**: Black&white theme with a pinch of yellow inspired by old magazine styles.
- **Email-Based Bookings**: Simple, effective booking system without a database.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), React, Tailwind CSS
- **Image Hosting**: [Cloudinary](https://cloudinary.com/)
- **Email Handling**: Nodemailer (optional for bookings)
- **Environment Management**: `.env` file for sensitive data

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TriumphNdlovu/tlt-media.git
   cd tlt-media
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   Create a `.env.local` file in the root directory and add:
   ```env
   CLOUD_NAME=your-cloudinary-cloud-name
   API_KEY=your-cloudinary-api-key
   API_SECRET=your-cloudinary-api-secret
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   The website will be available at [http://localhost:3000](http://localhost:3000).

## Usage

### Photo Display
1. Images are dynamically fetched from Cloudinary based on categories.
2. Each category is displayed in a dedicated section on the gallery page.

### Bookings
1. Users can fill out a booking form to inquire about photography sessions.
2. Booking requests are sent via email to the photographer.

## Deployment

1. Build the application for production:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

Alternatively, deploy to platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/) for seamless hosting.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a new feature"
   ```
4. Push to your fork and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

For any issues or feature requests, please open an [issue](https://github.com/TriumphNdlovu/tlt-media/issues).
