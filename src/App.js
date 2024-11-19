import Layout from "./components/common/layout/Layout.tsx";
import Home from "./pages/Home.tsx";
import { BookStoreThemeProvider } from "./context/themeContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/common/Error.tsx";
import SignUp from "./pages/SignUp.tsx";
import ResetPassword from "./pages/ResetPassword.tsx";
import Login from "./pages/Login.tsx";
import Books from "./pages/Books.tsx";
import BookDetail from "./pages/BookDetail.tsx";
import Cart from "./pages/Cart.tsx";
import Order from "./pages/Order.tsx";
import Orderlist from "./pages/Orderlist.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/books",
    element: (
      <Layout>
        <Books />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <SignUp />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/reset",
    element: (
      <Layout>
        <ResetPassword />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/book/:bookId",
    element: (
      <Layout>
        <BookDetail />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/cart",
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/order",
    element: (
      <Layout>
        <Order />
      </Layout>
    ),
    errorElement: <Error />,
  },

  {
    path: "/orderlist",
    element: (
      <Layout>
        <Orderlist />
      </Layout>
    ),
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <>
      <BookStoreThemeProvider>
        <RouterProvider router={router} />
      </BookStoreThemeProvider>
    </>
  );
}

export default App;
