import React from "react";
import { useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  multiplyByAmount,
} from "../redux/counter/counterSlice";

const Navbar = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      I am a Navbar! I can also access counter!!!{" "}
      <span style={{ margin: "4px", fontWeight: "bold" , color: "green"}}>{count}</span>{" "}
    </div>
  );
};

export default Navbar;
