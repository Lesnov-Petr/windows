import { GlobalStyle } from "./assets/globalStyles";
import { routes } from "./routes";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./Components/RequireAuth";
import { Loader } from "./Components/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "./Components/Container";

function App() {
  return (
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
        />

        <GlobalStyle />
        <Container>
          <Header />
        </Container>
        <Suspense fallback={<Loader />}>
          <Routes>
            {routes.map(
              ({ id, path, component: Component, isProtected, redirectTo }) => (
                <Route
                  key={id}
                  path={path}
                  element={
                    isProtected ? (
                      <RequireAuth redirectTo={redirectTo}>
                        <Container>
                          <Component />
                        </Container>
                      </RequireAuth>
                    ) : (
                      // <Container>
                      <Component />
                      // </Container>
                    )
                  }
                />
              )
            )}
          </Routes>
        </Suspense>
        <Container>
          <Footer />
        </Container>
      </div>
    </>
  );
}

export default App;
