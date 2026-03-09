import React from "react";

const Founders = () => {
  const data = [
    {
      id: 1,
      Name: "Kanak Sharma",
      Title: "Co-Founder & Product Head",
      info: "I wanted to create products that my grandmother would recognize, but my dermatologist would approve.",
      img: "/images/Founder1.png",
    },
    {
      id: 2,
      Name: "Aly D'Suza",
      Title: "Co-Founder & CEO",
      info: "Blushora isn't just a brand; it's a bridge between cultures, generations, and scientific advancements.",
      img: "/images/Founder2.png",
    },
  ];
  return (
    <>
      <section className="py-12 w-full">
        <h2 className="text-center text-3xl md:text-4xl font-semibold">
          Meet The <span className="text-red-500">Founders</span>
        </h2>

        <div className="max-w-5xl mx-auto mt-10 px-4 grid gap-10 sm:grid-cols-2">
          {data.map((item, index) => {
            const { img, Name, Title, info } = item;

            return (
              <div className="text-center" key={index}>
                <div className="w-44 h-44 md:w-56 md:h-56 mx-auto overflow-hidden rounded-full">
                  <img
                    src={img}
                    alt={Title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                <h2 className="text-2xl md:text-3xl mt-4 font-medium">
                  {Name}
                </h2>

                <h3 className="text-red-500 mt-1">{Title}</h3>

                <p className="mt-3 text-gray-600 max-w-md mx-auto leading-relaxed">
                  {info}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Founders;
