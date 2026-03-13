import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } =
    useContext(CartContext);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = subtotal > 0 ? 200 : 0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="empty cart"
          className="w-32 opacity-60"
        />

        <h2 className="text-2xl font-semibold">Your Cart is Empty</h2>

        <p className="text-gray-500">
          Looks like you haven't added anything yet.
        </p>

        <Link to="/collection">
          <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-10 text-center">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* LEFT SIDE PRODUCTS */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-white p-4 rounded-xl shadow"
            >
              <img
                src={item.img}
                alt={item.info}
                className="w-28 h-28 object-cover rounded-lg"
              />

              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h2 className="font-semibold">{item.info}</h2>
                  <p className="text-red-500 font-bold">Rs {item.price}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 border rounded"
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 border rounded"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE ORDER SUMMARY */}

        <div className="bg-white p-6 rounded-xl shadow h-fit">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>Rs {subtotal}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Shipping</span>
            <span>Rs {shipping}</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>Rs {total}</span>
          </div>

          <button className="w-full mt-6 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
