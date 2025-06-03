import React, { useEffect, useState } from 'react';
import matter from 'gray-matter';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const files = ['post1.md', 'post2.md'];
      const allPosts = await Promise.all(
        files.map(async (filename) => {
          const res = await fetch(`/src/posts/${filename}`);
          const text = await res.text();
          const { data, content } = matter(text);
          return { ...data, content };
        })
      );
      setPosts(allPosts);
    }

    fetchPosts();
  }, []);

  return (
    <section className="py-20 px-4 md:px-20 bg-gray-800">
      <h2 className="text-3xl font-bold mb-8">Blog</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-400 text-sm mb-1">{post.date}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags && post.tags.map((tag, i) => (
                <span key={i} className="text-xs bg-gray-600 text-white px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
            <p className="text-gray-300">{post.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </section>
  );
}
