import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMenuActionBlob } from "./redux/action/menuAction";
import MenuPage from "./component/client-menu/MenuPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import HomePage from "./component/HomePage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenuActionBlob());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container
      style={{ minWidth: "320px", maxWidth: "1000px" }}
      fluid
      className="App m-0 p-0"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/menu" element={<MenuPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
