import Layout from "./components/common/layout/Layout.tsx";
import Home from "./pages/Home.tsx";
import { BookStoreThemeProvider } from "./context/themeContext.tsx";

function App() {
  return (
    <>
      <BookStoreThemeProvider>
        <Layout>
          <Home />
        </Layout>
      </BookStoreThemeProvider>
    </>
  );
}

export default App;
