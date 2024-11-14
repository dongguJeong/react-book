import Layout from "./components/common/layout/Layout.tsx";
import Home from "./pages/Home.tsx";
import { BookStoreThemeProvider } from "./context/themeContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/common/Error.tsx";
import SignUp from "./pages/SignUp.tsx";
import ResetPassword from "./pages/ResetPassword.tsx";
import Login from "./pages/Login.tsx";
import Books from "./pages/Books.tsx";

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
