import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../redux/userSlice";

const UserManagement = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);

  return (
    <div className="flex flex-col items-center justify-center text-center gap-2 p-10">
      <p className="text-2xl font-semibold ">User Management</p>
      <div className="flex w-full justify-between p-4 items-center">
        <p className="text-md font-semibold">
          Total User : {users ? users.length : "0"}
        </p>
        <button
          className="bg-gray-100 hover:bg-gray-200 rounded-xl p-2 px-4 transition"
          onClick={() => dispatch(fetchUser())}
        >
          {users.length == 0 ? "Load" : "Reload"}
        </button>
      </div>
      {loading ? (
        <p className="">Loading...</p>
      ) : (
        users && (
          <>
            <div className="flex flex-wrap gap-5 items-center justify-center">
              {users.map((user) => (
                <div className="grid bg-amber-100 hover:shadow-lg p-6 rounded-xl transition">
                  <p>Name: {user.name}</p>
                  <p>Email: {user.email}</p>
                </div>
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
};

export default UserManagement;
