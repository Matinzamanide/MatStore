import { createContext, useContext } from "react";
import { Toaster, toast } from "sonner";
import { useLocalStorage } from "../hooks/use-localstorage";

interface IShoppingCartProvider {
  children: React.ReactNode;
}
interface CartItem {
  id: number;
  qty: number;
}
interface IShoppingCartContext {
  cartItems: CartItem[];
  HandlerIncreaseProductQty: (id: number) => void;
  HandlerDecreaseProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  handlerProductRemove: (id: number) => void;
  cartQty: number;
}
export const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

const ShoppingCartProvider: React.FC<IShoppingCartProvider> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "cartItems",
    []
  );

  const HandlerIncreaseProductQty = (id: number) => {
    toast.success("محصول با موفقیت اضافه شد ");
    setCartItems((currentItems) => {
      const productExits = currentItems.some((item) => item.id === id);
      if (!productExits) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) =>
          item.id === id ? { ...item, id: id, qty: item.qty + 1 } : item
        );
      }
    });
  };
  const HandlerDecreaseProductQty = (id: number) => {
    setCartItems((currentItem) => {
      const productExits = currentItem.find((item) => item.id === id);
      if (productExits?.qty === 1) {
        return currentItem.filter((item) => item.id !== id);
      } else {
        return currentItem.map((item) =>
          item.id === id ? { ...item, id: id, qty: item.qty - 1 } : item
        );
      }
    });
  };
  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  };
  const handlerProductRemove = (id: number) => {
    setCartItems((currentitem) => currentitem.filter((item) => item.id !== id));
    toast.error("محصول با موفقیت حذف شد");
  };
  const cartQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        cartQty,
        HandlerIncreaseProductQty,
        handlerProductRemove,
        getProductQty,
        HandlerDecreaseProductQty,
      }}
    >
      <Toaster richColors />

      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
