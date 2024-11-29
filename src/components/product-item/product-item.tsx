import React, { useState, useEffect } from "react";
import Button from "../button/button";
import { Products } from "../../types";
import { Fade } from "react-awesome-reveal";
import ProductItemSkeleton from "../product-item-skeleton/product-item-skeleton";

type IProductItem = Products;

const ProductItem: React.FC<IProductItem> = ({ title, image, price }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ProductItemSkeleton />;
  }

  return (
    <Fade duration={700}>
      <div className="productItemContainer">
        <img
          src={image}
          loading="lazy"
          className="aspect-video rounded-lg w-full"
          alt=""
        />

        <div className="mt-4 text-right">
          <p>{title}</p>
          <p className="my-2">{price} تومان</p>
        </div>

        <Button className="productItemButton">
          مشاهده محصول
        </Button>
      </div>
    </Fade>
  );
};

export default ProductItem;