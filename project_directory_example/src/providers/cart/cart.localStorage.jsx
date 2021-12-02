// Example of how to update local storage
const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const localState = JSON.parse(localStorage.getItem('cartItems'));
  const [cartItems, setCartItems] = useState(localState);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartItemsTotal, setCartItemsTotal] = useState(0);

  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item) =>
    setCartItems(removeItemFromCart(cartItems, item));
  const clearItemsFromCart = (item) =>
    setCartItems(filterItemFromCart(cartItems, item));

  const toggleHidden = () => setHidden(!hidden);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartItemsTotal(getCartItemsTotal(cartItems));
  }, [cartItems]);
  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        addItem,
        removeItem,
        clearItemsFromCart,
        cartItems,
        cartItemsCount,
        cartItemsTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
