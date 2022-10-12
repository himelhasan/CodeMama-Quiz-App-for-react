import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Utilities/route";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
