import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { Link } from "react-router-dom";
import ProductPrice from "../components/ProductPrice";
import Monitor from "../assets/monitor.png";
import Gamepad from "../assets/gamepad-small.png";
import Button from "../components/Button";

const Cart = () => {
  return (
    <Container>
      <section className="font-pop">
        <ul className="flex gap-3 pt-16 text-sm text-black font-normal">
          <Link to="/">
            <li className="opacity-50">Home</li>
          </Link>
          <Link>
            <li className="opacity-50">/</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
        </ul>
        <div className="lg:mt-20 lg:mb-35">
          <div className="flex justify-between py-6 px-10 shadow-[0_1px_13px_rgba(0,0,0,0.05)] mb-10">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          <ProductPrice
            src={Monitor}
            alt="monitor"
            price="650"
            subtotal="650"
          />
          <ProductPrice
            src={Gamepad}
            alt="gamepad"
            price="550"
            subtotal="1100"
          />
          <Flex className="justify-between pb-20">
            <Button text="Return To Shop"
              className="text-black! border! border-[#00000080]! bg-transparent hover:bg-secondary! hover:border-transparent! hover:text-white! duration-300"/>
              <Button text="Update Cart"
              className="text-black! border! border-[#00000080]! bg-transparent hover:bg-secondary! hover:border-transparent! hover:text-white! duration-300"/>
          </Flex>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="items-start">
              <input type="text" placeholder="Coupon Code" className="py-4 pl-6 pr-20 outline-0 border border-black rounded-sm mr-4"/>
              <Button text="Apply Coupon" className="hover:bg-red-600! text-white! border-transparent"/>
            </div>
            <div className="justify-self-end">
              <div className="w-[470px] border border-black rounded-sm py-8 px-4">
                <h6 className="text-xl text-black font-pop font-medium pb-6">Cart Total</h6>
                <div className="grid grid-cols-2 text-base text-black font-normal border-b border-[#00000066] pb-4 mb-4">
                  <span>Subtotal:</span>
                  <span className="justify-self-end">$1750</span>
                </div>
                <div className="grid grid-cols-2 text-base text-black font-normal border-b border-[#00000066] pb-4 mb-4">
                  <span>Shipping:</span>
                  <span className="justify-self-end">Free</span>
                </div>
                <div className="grid grid-cols-2 text-base text-black font-normal mb-4">
                  <span>Total:</span>
                  <span className="justify-self-end">$1750</span>
                </div>
                
                <div className="text-center"><Button className="hover:bg-red-600! text-white! border-transparent" text="Procees to checkout" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Cart;
