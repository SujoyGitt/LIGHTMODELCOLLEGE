import { Home } from "./Home";
import { Footer } from "./Component/Footer/Footer";
import { Header } from "./Component/Header/Header";
import {Route, Routes, BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <>
     <BrowserRouter>
    <Header/>
        
          <Routes>
            <Route  path="/" element={<Home/>}/>
          </Routes>

    <Footer/>
    </BrowserRouter>
    </>
  );
}
  

export default App;
