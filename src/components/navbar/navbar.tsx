import { useShoppingCartContext } from "../../context/shopping-cart-context";
import Button from "../button/button";
import Container from "../container/container";
import { Link } from "react-router-dom";
import { CiShoppingBasket } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { useAuthContext } from "../../context/auth-context";

const Navbar = () => {
  const { cartQty} = useShoppingCartContext();
  const {isLogin,setIsLogin}=useAuthContext();
  const [menu, setMenu] = useState(false);
  const menuHandler = () => {
    setMenu(!menu);
  };

  return (
    <>
      {menu && (
        <div
          className="fixed bg-black opacity-50 z-20 inset-0"
          onClick={menuHandler}
        ></div>
      )}

      <div
        className={` ${
          menu ? "w-72" : "w-0"
        } duration-500 overflow-hidden z-30 h-screen bg-[rgba(0,0,0,0.2)] backdrop-blur-lg fixed`}
      >
        <FaTimes
          className="absolute left-3 top-4 text-3xl cursor-pointer"
          onClick={menuHandler}
        />

        <ul className="flex flex-col gap-10 mt-16 p-4">
          <li className="listItemSidebar">
            <Link onClick={menuHandler} to="/home">
              خانه
            </Link>
          </li>
          <li className="listItemSidebar">
            <Link onClick={menuHandler} to="/">
              فروشگاه
            </Link>
          </li>
          <li className="listItemSidebar">
            <Link onClick={menuHandler} to="/login">
              ثبت نام | ورود
            </Link>
          </li>
          <li className="listItemSidebar">
            <Link onClick={menuHandler} to="/cart">
              سبد خرید
            </Link>
          </li>
        </ul>
      </div>

      <div className="h-16  shadow-sm shadow-zinc-500 flex items-center">
        <Container>
          <div className="flex justify-between items-center">
            <RiMenu3Fill
              className="text-2xl md:hidden cursor-pointer"
              onClick={menuHandler}
            />

            <ul className="hidden md:flex gap-10">
              <li>
                <Link to="/home">خانه</Link>
              </li>
              <li>
                <Link to="/">فروشگاه</Link>
              </li>
            </ul>

            <div className="flex flex-row items-center">
              <Link to="/cart" className="relative ml-4">
                <span
                  className={`${
                    cartQty !== 0 && "bg-rose-500"
                  } rounded-[50%] w-6 h-6 flex items-center justify-center absolute bottom-6 -right-3`}
                >
                  {cartQty !== 0 && cartQty}
                </span>
                <CiShoppingBasket
                  size={40}
                  className="border-2 w-10 h-9 p-1 rounded border-neutral-600"
                />
              </Link>

              <Link to="/login">
                {isLogin ? (
                  <Button
                    className="border-2 border-neutral-700 ml-3 px-3 py-1 rounded"
                    onClick={() => setIsLogin(false)}
                  >
                    خروج از حساب
                  </Button>
                ) : (
                  <Button className="border-2 border-neutral-700 ml-3 px-3 py-1 rounded">
                    ورود | ثبت نام
                  </Button>
                )}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
