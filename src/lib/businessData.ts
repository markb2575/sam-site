// Dynamic data for the business site

export type GalleryItem = {
  photo: string; // URL or path to the image
  description?: string;
};

export type Service = {
  name: string;
  description: string;
  image: string;
};

export const gallery: GalleryItem[] = [
  {
    photo: "/gallery/photo1.jpg",
    description: "Our team at work."
  },
  {
    photo: "/gallery/photo2.jpg"
    // No description
  },
  {
    photo: "/gallery/photo3.jpg",
    description: "A completed project."
  },
  {
    photo: "/gallery/photo1.jpg",
    description: "Our team at work."
  },
  {
    photo: "/gallery/photo2.jpg"
    // No description
  },
  {
    photo: "/gallery/photo3.jpg",
    description: "A completed project."
  },{
    photo: "/gallery/photo1.jpg",
    description: "Our team at work."
  },
  {
    photo: "/gallery/photo2.jpg"
    // No description
  },
  {
    photo: "/gallery/photo3.jpg",
    description: "A completed project."
  },{
    photo: "/gallery/photo1.jpg",
    description: "Our team at work."
  },
  {
    photo: "/gallery/photo2.jpg"
    // No description
  },
  {
    photo: "/gallery/photo3.jpg",
    description: "A completed project."
  },{
    photo: "/gallery/photo1.jpg",
    description: "Our team at work."
  },
  {
    photo: "/gallery/photo2.jpg"
    // No description
  },
];

export const companyInfo = {
  name: "Sam Nose",
  type: "General Contracting"
};

export const services: Service[] = [
  { name: "Custom Wood Working", description: "Expertly crafted custom wood projects for your home or business.", image: "/gallery/photo1.jpg" },
  { name: "Epoxy Floors", description: "Durable and beautiful epoxy flooring solutions.", image: "/gallery/photo2.jpg" },
  { name: "Custom Closets", description: "Tailored closet designs to maximize your space.", image: "/gallery/photo1.jpg" },
  { name: "Power Washing", description: "Professional power washing for all surfaces.", image: "/gallery/photo3.jpg" },
  { name: "Tiles", description: "Tile installation for floors, walls, and backsplashes.", image: "/gallery/photo1.jpg" },
  { name: "Countertops", description: "Custom countertop fabrication and installation.", image: "/gallery/photo3.jpg" },
  { name: "Landscaping", description: "Landscaping services to enhance your curb appeal.", image: "/gallery/photo2.jpg" },
  { name: "Drywall & Painting", description: "Drywall installation, repair, and professional painting.", image: "/gallery/photo3.jpg" },
  { name: "Flooring", description: "Installation of hardwood, laminate, vinyl, and more.", image: "/gallery/photo1.jpg" },
  { name: "Demolition and Cleanup", description: "Safe demolition and thorough cleanup services.", image: "/gallery/photo3.jpg" }
];

export const contactInfo = {
  email: "info@business.com",
  phone: "908-590-3751",
  calendar: "https://calendar.google.com/"
}; 