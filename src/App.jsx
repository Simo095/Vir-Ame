import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMenuActionBlob } from "./redux/action/menuAction";
import MenuPage from "./component/client-menu/MenuPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Container } from "react-bootstrap";
import HomePage from "./component/HomePage";

const App = () => {
  const dispatch = useDispatch();
  const [payed, setPayed] = useState(false);

  useEffect(() => {
    dispatch(fetchMenuActionBlob());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return payed ? (
    <Container
      style={{ minWidth: "320px", maxWidth: "1000px" }}
      fluid
      className="App m-0 p-0"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          {/* <Route path="/menu" element={<MenuPage />}></Route> */}
        </Routes>
      </BrowserRouter>
    </Container>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <Alert className="text-center" variant="danger">
        <strong>Warning:</strong>
        <p>Create React App is no longer supported. Please update your code.</p>
      </Alert>
    </div>
  );
};

export default App;
