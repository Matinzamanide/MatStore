import React, { useEffect, useState } from "react";
import Button from "../button/button";
import { getProduct } from "../../services/api";
import { Products } from "../../types";
import { useShoppingCartContext } from "../../context/shopping-cart-context";
import { Link } from "react-router-dom";
import CartItemSkeleton from "../cart-item-skelton/cart-item-skelton";

interface ICartItem {
  id: number;
  qty: number;
}

const CartItem: React.FC<ICartItem> = ({ qty, id }) => {
  const [product, setProduct] = useState<Products | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await getProduct(id);
        setProduct(result);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        setLoading(false);
      }
    };
  
    fetchProduct();
  }, [id]);

  const {
    HandlerIncreaseProductQty,
    handlerProductRemove,
    HandlerDecreaseProductQty,
  } = useShoppingCartContext();

  if (loading) {
    return <CartItemSkeleton />;
  }

  return (
    <div className="cartItemContainer">
      <div className="flex items-center">
        <Link to={`/product/${id}`}>
          <img
            src={product?.image}
            loading="lazy"
            className="w-48 rounded-md"
            alt={product?.title || ""}
          />
        </Link>

        <div className="mr-10">
          <p className="my-3">{product?.title}</p>
          <div className="flex">
            <Button
              className="bg-emerald-600 px-4 rounded"
              onClick={() => HandlerIncreaseProductQty(id)}
            >
              +
            </Button>
            <p className="mx-3">{qty}</p>
            <Button
              className="bg-red-600 px-4 rounded"
              onClick={() => HandlerDecreaseProductQty(id)}
            >
              -
            </Button>
          </div>
          <p className="my-4">قیمت : {(product?.price ?? 0) * qty}</p>
        </div>
      </div>
      <Button
        className="bg-rose-700 text-white px-4 py-2 rounded my-2"
        onClick={() => handlerProductRemove(id)}
      >
        حذف محصول
      </Button>
    </div>
  );
};

export default CartItem;
