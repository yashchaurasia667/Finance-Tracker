import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";

import "./App.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Dashboard />} />
        <Route path="/auth" element={<Auth />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
