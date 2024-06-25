import Link from "next/link";
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

const Page = () => {
  return (
    <div>
      {blogs.map((blog, index) => (
        <div key={index} className="border border-orange-500 p-4 m-5 rounded">
          <p>{blog.title}</p>
          <p>{blog.description}</p>
          <p className="mt-4">
            <Link
              className="bg-orange-500 p-2 rounded-md"
              href={`/Blogs/${blog.id}`}
            >
              View Details
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Page;
