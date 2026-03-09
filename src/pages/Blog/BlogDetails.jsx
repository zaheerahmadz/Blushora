import { useParams, Link } from "react-router-dom";
import blogData from "../../constant/Blog";

import { Calendar, User } from "lucide-react";
import { useEffect } from "react";

const BlogDetail = () => {
  const { slug } = useParams();

  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) {
    return <h1 className="text-center py-20">Blog Not Found</h1>;
  }

  const currentIndex = blogData.findIndex((item) => item.slug === slug);

  const nextBlogs = [
    blogData[(currentIndex + 1) % blogData.length],
    blogData[(currentIndex + 2) % blogData.length],
    blogData[(currentIndex + 3) % blogData.length],
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-64 md:h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${blog.img})` }}
        ></div>

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
          <span className="bg-white/10 capitalize my-5 backdrop-blur-sm text-xs font-semibold tracking-wide px-4 py-2 rounded-full">
            {blog.icon}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold">{blog.title}</h1>

          <div className="flex items-center gap-6 text-xs py-5">
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span className="text-[15px]">{blog.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <User size={14} />
              <span className="text-[15px]">{blog.person}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <div className="max-w-2xl mx-auto px-4">
        <Link to="/blog" className="hover:text-red-500">
          ← Back to Blog
        </Link>

        <section className="py-10 prose prose-indigo max-w-none text-gray-700">
          {blog.content.map((para, idx) => {
            const lines = para.split("\n");

            return lines.map((line, lineIdx) => {
              const isHeading =
                /^Step \d+:/.test(line) ||
                /^[0-9]+\./.test(line) ||
                /^[A-Z][A-Za-z\s]*$/.test(line);

              return isHeading ? (
                <h3
                  key={`${idx}-${lineIdx}`}
                  className="text-xl font-semibold mt-6 mb-2 text-gray-900"
                >
                  {line}
                </h3>
              ) : (
                <p key={`${idx}-${lineIdx}`} className="mb-4 leading-loose">
                  {line}
                </p>
              );
            });
          })}
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-red-500 ">
          Next Blogs
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-6">
          {nextBlogs.map((item) => (
            <Link key={item.id} to={`/blog/${item.slug}`} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-500 transition">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
