import { GlobalStyle } from "./assets/globalStyles";
import { routes } from "./routes";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./Components/RequireAuth";
import { Loader } from "./Components/Loader";
import { Container } from "./Components/Container";
import { Notification } from "./Components/Notification";

function App() {
  return (
    <>
      <div>
        <Notification />

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
              ),
            )}
          </Routes>
        </Suspense>
        {/* <Container>
          <Footer />
        </Container> */}
      </div>
    </>
  );
}

export default App;
