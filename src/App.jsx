import { useState } from "react";

import Headers from "./components/header";
import Counter from "./pages/Counter";
import UserManagement from "./pages/UserManagement";

const App = () => {
  const [currentPage, setCurrentPage] = useState("counter");

  return (
    <>
      <Headers updatePage={setCurrentPage} />
      {currentPage === "counter" ? <Counter /> : <UserManagement />}
    </>
  );
};

export default App;
