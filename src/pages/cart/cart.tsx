import { useEffect, useState } from "react";
import Button from "../../components/button/button";
import CartItem from "../../components/cart-item/cart-item";
import Container from "../../components/container/container";
import { useShoppingCartContext } from "../../context/shopping-cart-context";
import { Products } from "../../types";
import { getProducts } from "../../services/api";

const Cart = () => {
  const { cartItems, cartQty } = useShoppingCartContext();
  const [products, setProducts] = useState<Products[]>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getProducts();
        setProducts(result);
      } catch (error) {
        console.error("Failed to fetch Products :", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="mt-10 min-h-screen">
        <Container>
          <div className="">
            {cartItems.map((item) => {
              return <CartItem id={item.id} key={item.id} qty={item.qty} />;
            })}

            <div className="shadow-[0px_0px_2px_2px_#101010] rounded-lg p-4">
              <p> تعداد کل محصولات : {cartQty}</p>
              <p>
                قیمت نهایی :
                {cartItems.reduce((total, cartitem) => {
                  const item = products?.find(
                    (product) => parseInt(product.id as string) === cartitem.id
                  );
                  return total + (item?.price || 0) * cartitem.qty;
                }, 0)}
              </p>
            </div>

            <Button className="bg-emerald-600 px-3 py-1 rounded my-10">
              ثبت سفارش
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Cart;
