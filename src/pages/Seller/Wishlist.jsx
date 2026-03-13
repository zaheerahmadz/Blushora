import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Wishlist = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { wishlist, toggleWishlist, addToCart } = useContext(CartContext);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-10">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center gap-6 py-20">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
            alt="empty"
            className="w-32 opacity-60"
          />

          <p className="text-gray-500 text-lg">Your wishlist is empty</p>

          <Link to="/shop">
            <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.info}
                  className="w-full h-full object-cover hover:scale-110 transition"
                />
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-sm font-semibold">{item.info}</h2>

                <div className="flex gap-2 items-center">
                  <span className="text-red-500 font-bold">
                    Rs {item.DiscountPrice}
                  </span>

                  <span className="text-gray-400 line-through text-sm">
                    Rs {item.price}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => {
                      addToCart(item);
                      toggleWishlist(item);
                    }}
                    className="flex-1 bg-red-500 text-white rounded-lg py-2 hover:bg-red-600 transition text-sm"
                  >
                    Move To Cart
                  </button>

                  <button
                    onClick={() => toggleWishlist(item)}
                    className="flex-1 border border-red-500 text-red-500 rounded-lg py-2 hover:bg-red-500 hover:text-white transition text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Wishlist;
