import React from "react";

const blogs = [
  {
    id: 1,
    title: "Understanding the Basics of JSON",
    description:
      "A comprehensive guide to understanding JSON, its structure, and how to use it in web development.",
  },
  {
    id: 2,
    title: "Top 10 JavaScript Frameworks in 2024",
    description:
      "An overview of the most popular JavaScript frameworks in 2024, their features, and why you should consider using them.",
  },
  {
    id: 3,
    title: "How to Optimize Your Website for SEO",
    description:
      "Tips and strategies for optimizing your website to improve search engine rankings and increase organic traffic.",
  },
  {
    id: 4,
    title: "The Ultimate Guide to Web Accessibility",
    description:
      "Learn the importance of web accessibility and how to implement best practices to make your site accessible to all users.",
  },
  {
    id: 5,
    title: "Exploring the Future of AI in Web Development",
    description:
      "A look into how artificial intelligence is transforming web development and what the future holds for AI-driven web applications.",
  },
];

const page = ({ params }) => {
  const { title, description } = blogs.find((blog) => blog.id == params.id);
  return (
    <div className="h-screen py-5 ml-5">
      <p className="text-lg font-semibold">{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default page;
