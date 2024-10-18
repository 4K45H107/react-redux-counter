import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  increment,
  decrement,
  incrementByAmount,
  multiplyByAmount,
} from "./redux/counter/counterSlice";
import Navbar from "./components/Navbar";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "4px" }}>
        <button
          onClick={() => dispatch(decrement())}
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            fontWeight: "bold",
          }}
        >
          -
        </button>
        Currently count is{" "}
        <span style={{ margin: "4px", fontWeight: "bold", color: "red" }}>
          {count}
        </span>
        <button
          onClick={() => dispatch(increment())}
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            fontWeight: "bold",
          }}
        >
          +
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(2))}
          style={{
            marginRight: "10px",
            fontWeight: "bold",
          }}
        >
          ++
        </button>
        <button
          onClick={() => dispatch(multiplyByAmount(2))}
          style={{
            marginRight: "10px",
            fontWeight: "bold",
          }}
        >
          *
        </button>
      </div>
    </>
  );
}

export default App;
