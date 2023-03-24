import { Home } from "./Home";
import { Footer } from "./Component/Footer/Footer";
import { Header } from "./Component/Header/Header";
import {Route, Routes, BrowserRouter } from "react-router-dom";
import { About } from "./Component/About/About";

const App = () => {
  return (
    <>
     <BrowserRouter>
    <Header/>
        
          <Routes>
            <Route  path="/" element={<Home/>}/>
          </Routes>
          <Routes>
            <Route  path="/about" element={<About/>}/>
          </Routes>

    <Footer/>
    </BrowserRouter>
    </>
  );
}
  

export default App;
