import { useParams } from "react-router-dom";
import blogData from "../../constant/Blog";
import { Calendar, User } from "lucide-react";

const BlogDetail = () => {
  const { slug } = useParams();

  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) {
    return <h1 className="text-center py-20">Blog Not Found</h1>;
  }

  return (
    <>
      <section className="relative w-full h-64 md:h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${blog.img})` }}
        ></div>

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col justify-center items-center h-full text-center text-white ">
          <span className=" bg-white/10 capitalize my-5 text-white backdrop-blur-sm text-xs font-semibold tracking-wide px-4 py-2 rounded-full ">
            {blog.icon}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold">{blog.title}</h1>
          <div className="flex items-center gap-6 text-xs text-white py-5">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-white" />
              <span className="text-[15px]">{blog.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <User size={14} className="text-white" />
              <span className="text-[15px]">{blog.person}</span>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-2xl mx-auto">
        <a href="/blog" className="hover:text-red-500 ">
          ← Back to Blog
        </a>
        <section className="container mx-auto py-10 px-4 lg:px-0 prose prose-indigo max-w-none text-gray-700">
          {blog.content.map((para, idx) => {
            // Split lines
            const lines = para.split("\n");
            return lines.map((line, lineIdx) => {
              // Simple rule: if line starts with "Step" or matches a heading pattern
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
                <p
                  key={`${idx}-${lineIdx}`}
                  className="mb-4 text-gray-700 leading-loose"
                >
                  {line}
                </p>
              );
            });
          })}
        </section>
      </div>
    </>
  );
};

export default BlogDetail;
