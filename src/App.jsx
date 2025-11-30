import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/counterSlice";
import { fetchUser } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();
  //Counter
  const count = useSelector((state) => state.counter.value);
  const [ammount, setAmmount] = useState(1);

  //User
  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-lg">React + Redux</h1>

      <div className="grid items-center text-center gap-2">
        <p className="text-lg font-semibold">Counter</p>
        <p className="main-heading text-lg">{count}</p>
        <input
          type="number"
          placeholder="Ammount..."
          value={ammount}
          onChange={(e) => setAmmount(e.target.value)}
          className="p-2 border border-gray-100 rounded-lg"
        />
        <div className="flex gap-2">
          <button
            className="bg-gray-100 hover:bg-gray-300 rounded-xl p-2"
            onClick={() => dispatch(increment(ammount))}
          >
            Increment
          </button>
          <button
            className="bg-gray-100 hover:bg-gray-300 rounded-xl p-2"
            onClick={() => dispatch(decrement(ammount))}
          >
            Decrement
          </button>
          <button
            className="bg-gray-100 hover:bg-gray-300 rounded-xl p-2"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center gap-2">
        <p className="text-lg font-semibold">User Management</p>
        <button
          className="bg-gray-100 hover:bg-gray-300 rounded-xl p-2"
          onClick={() => dispatch(fetchUser())}
        >
          FetchUser
        </button>
        {loading && <p className="">Loading...</p>}
        {users && (
          <>
            <p className="text-md font-semibold">Total User : {users.length}</p>
            <div className="flex flex-wrap gap-5 items-center justify-center">
              {users.map((user) => (
                <div className="grid bg-amber-100 hover:shadow-lg p-6 rounded-xl transition">
                  <p>Name: {user.name}</p>
                  <p>Email: {user.email}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
