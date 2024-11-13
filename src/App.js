import Layout from "./components/common/layout/Layout.tsx";
import Home from "./pages/Home.tsx";
import { BookStoreThemeProvider } from "./context/themeContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/common/Error.tsx";
import SignUp from "./pages/SignUp.tsx";

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
        <div>예비 도서 목록</div>
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
