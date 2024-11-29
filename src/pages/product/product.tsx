import { useParams } from "react-router-dom";
import Container from "../../components/container/container";
import Button from "../../components/button/button";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import { Products } from "../../types";
import { useShoppingCartContext } from "../../context/shopping-cart-context";

const Product = () => {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<Products>();

  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const result = await getProduct(params.id as string);
        setProduct(result);
      } catch (error) {
        console.error("Faild to fetch Product :", error);
      }
    };
    fetchproduct();
  }, []);
  console.log(product);
  const {
    HandlerIncreaseProductQty,
    getProductQty,
    HandlerDecreaseProductQty,
    cartItems,
  } = useShoppingCartContext();
  console.log(cartItems);
  return (
    <div className="min-h-screen ">
      <Container>
        <div className="border border-neutral-700 shadow-lg rounded-lg mt-10 py-5 grid grid-cols-12 ">
          <div className="col-span-12 lg:col-span-4 p-3 ">
            <img
              src={product?.image}
              loading="lazy"
              className="rounded-lg w-full"
              alt=""
            />

            <div className="">
              <p className="mt-6">قیمت : {product?.price}</p>

              <br />

              {getProductQty(parseInt(params.id as string)) !== 0 ? (
                <div className="">
                  <Button
                    className="bg-emerald-600 text-white px-3 py-2 rounded hover:bg-emerald-600  "
                    onClick={() =>
                      HandlerIncreaseProductQty(parseInt(params.id as string))
                    }
                  >
                    {" "}
                    +{" "}
                  </Button>
                  <p className="inline mx-4">
                    {getProductQty(parseInt(params.id as string))}
                  </p>
                  <Button
                    className="bg-rose-700 text-white px-3 py-2 rounded"
                    onClick={() =>
                      HandlerDecreaseProductQty(parseInt(params.id as string))
                    }
                  >
                    {" "}
                    -{" "}
                  </Button>
                </div>
              ) : (
                <Button
                  className="bg-indigo-700 text-white px-3 py-2 rounded mt-3 hover:bg-emerald-600  "
                  onClick={() =>
                    HandlerIncreaseProductQty(parseInt(params.id as string))
                  }
                >
                  افزودن به سبد خرید
                </Button>
              )}
            </div>
          </div>

          <div className=" col-span-12 lg:col-span-8 p-4">
            <h1 className="text-4xl">{product?.title}</h1>

            <p className="my-8">{product?.description}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
