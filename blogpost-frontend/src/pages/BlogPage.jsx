import React from 'react';
import Header from '../Component/Header';

const BlogPage = () => {
  
  const blogs = [
    {
      id: 1,
      title: 'The Force Awakens',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'Luke Skywalker',
      tags: ['Jedi', 'The Force', 'Galactic Events'],
    },
    {
      id: 2,
      title: 'The Dark Side Unveiled',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'Darth Vader',
      tags: ['Sith', 'Dark Side', 'Galactic Events'],
    },
    // Add more blog posts as needed
  ];

  return (

    <div>
        <Header/>
<div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-3xl text-yellow-500 mb-4 font-extrabold">Rebel Alliance Blog</h1>
        <button
          className="btn-primary bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
        >
          Create New Blog
        </button>
        {blogs.map((blog) => (
          <div key={blog.id} className="mb-8">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p className="text-gray-400">Author: {blog.author}</p>
            <p className="text-gray-300">{blog.content}</p>
            <div className="mt-2">
              {blog.tags.map((tag) => (
                <span key={tag} className="inline-block bg-gray-600 text-white text-xs px-2 py-1 rounded-full mr-2">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default BlogPage;
