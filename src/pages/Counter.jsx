import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, reset } from "../redux/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [ammount, setAmmount] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center text-center p-10">
      <div className="bg-white rounded-2xl shadow-2xl p-10 flex flex-col gap-5">
        <p className="text-2xl font-semibold">Counter</p>
        <p className="main-heading text-2xl font-bold">{count}</p>
        <input
          type="number"
          placeholder="Ammount..."
          value={ammount}
          onChange={(e) => setAmmount(e.target.value)}
          className="p-2 border border-gray-100 rounded-lg"
        />
        <div className="flex gap-2">
          <button
            className="bg-gray-100 hover:bg-gray-200 rounded-xl p-2 px-4 transition"
            onClick={() => dispatch(increment(ammount))}
          >
            Increment
          </button>
          <button
            className="bg-gray-100 hover:bg-gray-200 rounded-xl p-2 px-4 transition"
            onClick={() => dispatch(decrement(ammount))}
          >
            Decrement
          </button>
          <button
            className="bg-gray-100 hover:bg-gray-200 rounded-xl p-2 px-4 transition"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
