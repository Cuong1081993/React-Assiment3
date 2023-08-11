import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import DetailPage from "./pages/Detail";
import ShopPage from "./pages/Shop";
import CartPage from "./pages/Cart";
import CheckOutPage from "./pages/CheckOut";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "detail",
          element: <DetailPage />,
          children: [{ path: "productId", element: <DetailPage /> }],
        },
        { path: "shop", element: <ShopPage /> },
        { path: "cart", element: <CartPage /> },
        { path: "checkout", element: <CheckOutPage /> },
      ],
    },
    { path: "login", element: <LoginPage /> },
    { path: "register", element: <RegisterPage /> },
  ]);
  return <RouterProvider router={router}>
    
  </RouterProvider>;
}

export default App;
