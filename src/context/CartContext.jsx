import { createContext, useState, useEffect } from "react";

// 1️⃣ Create Context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // 2️⃣ State for Cart
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 3️⃣ State for Wishlist
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // 4️⃣ Save Cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 5️⃣ Save Wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // 6️⃣ Add item to Cart (increments qty if already in cart)
  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // 7️⃣ Remove item from Cart
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // 8️⃣ Increase item quantity
  const increaseQty = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  // 9️⃣ Decrease item quantity
  const decreaseQty = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item,
      ),
    );
  };

  // 🔟 Toggle Wishlist (add/remove)
  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.find((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product],
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        toggleWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
