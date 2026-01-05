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
  // closets
  { photo: "/gallery/closets-0.jpg" },
  { photo: "/gallery/closets-1.jpg" },
  { photo: "/gallery/closets-2.jpg" },
  { photo: "/gallery/closets-3.jpg" },
  { photo: "/gallery/closets-4.jpg" },
  { photo: "/gallery/closets-5.jpg" },

  // countertops
  { photo: "/gallery/countertops-0.jpg" },
  { photo: "/gallery/countertops-1.jpg" },
  { photo: "/gallery/countertops-2.jpg" },
  { photo: "/gallery/countertops-3.jpg" },
  { photo: "/gallery/countertops-4.jpg" },
  { photo: "/gallery/countertops-5.jpg" },
  { photo: "/gallery/countertops-6.jpg" },
  { photo: "/gallery/countertops-7.jpg" },
  { photo: "/gallery/countertops-8.jpg" },
  { photo: "/gallery/countertops-9.jpg" },

  // flooring
  { photo: "/gallery/flooring-0.jpg" },
  { photo: "/gallery/flooring-1.jpg" },
  { photo: "/gallery/flooring-2.jpg" },
  { photo: "/gallery/flooring-3.jpg" },

  // installation
  { photo: "/gallery/installation-0.jpg" },
  { photo: "/gallery/installation-1.jpg" },
  { photo: "/gallery/installation-2.jpg" },
  { photo: "/gallery/installation-3.jpg" },

  // woodworking
  { photo: "/gallery/woodworking-0.jpg" },
  { photo: "/gallery/woodworking-1.jpg" },
  { photo: "/gallery/woodworking-2.jpg" },
  { photo: "/gallery/woodworking-3.jpg" },
  { photo: "/gallery/woodworking-4.jpg" },
  { photo: "/gallery/woodworking-5.jpg" },
  { photo: "/gallery/woodworking-6.jpg" },
  { photo: "/gallery/woodworking-7.jpg" },
  { photo: "/gallery/woodworking-8.jpg" },
  { photo: "/gallery/woodworking-9.jpg" },
  { photo: "/gallery/woodworking-10.jpg" },
  { photo: "/gallery/woodworking-11.jpg" },
  { photo: "/gallery/woodworking-12.jpg" },
  { photo: "/gallery/woodworking-13.jpg" },
  { photo: "/gallery/woodworking-14.jpg" },
  { photo: "/gallery/woodworking-15.jpg" },
  { photo: "/gallery/woodworking-16.jpg" },
  { photo: "/gallery/woodworking-17.jpg" }
];

export const companyInfo = {
  name: "Sam Nose",
  type: "General Contracting"
};

export const services: Service[] = [
  { name: "Custom Wood Working", description: "Expertly crafted custom wood projects for your home or business.", image: "/gallery/woodworking-15.jpg" },
  { name: "Epoxy Floors", description: "Durable and beautiful epoxy flooring solutions.", image: "/stock/epoxy-0.jpg" },
  { name: "Custom Closets", description: "Tailored closet designs to maximize your space.", image: "/gallery/closets-2.jpg" },
  { name: "Power Washing", description: "Professional power washing for all surfaces.", image: "/stock/powerwash-0.jpg" },
  { name: "Tiles", description: "Tile installation for floors, walls, and backsplashes.", image: "/gallery/flooring-3.jpg" },
  { name: "Countertops", description: "Custom countertop fabrication and installation.", image: "/gallery/countertops-8.jpg" },
  { name: "Landscaping", description: "Landscaping services to enhance your curb appeal.", image: "/stock/landscape-0.jpg" },
  { name: "Drywall & Painting", description: "Drywall installation, repair, and professional painting.", image: "/gallery/woodworking-14.jpg" },
  { name: "Flooring", description: "Installation of hardwood, laminate, vinyl, and more.", image: "/gallery/flooring-2.jpg" },
  { name: "Demolition and Cleanup", description: "Safe demolition and thorough cleanup services.", image: "/stock/demolition-0.jpg" },
  { name: "Installation", description: "Safely installing heavy appliances and furniture.", image: "/gallery/installation-3.jpg" }
];

export const contactInfo = {
  email: "info@business.com",
  phone: "908-590-3751",
  calendar: "https://calendar.google.com/"
};
