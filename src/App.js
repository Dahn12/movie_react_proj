import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Tv from "./pages/Tv";
import Celebrity from "./pages/Celebrity";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";


function App() {
  return (
    <div className="root-wrap">
      <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/movie' element = {<Movies/>} />
          <Route path='/tv' element = {<Tv/>} />
          <Route path='/person' element = {<Celebrity/>} />
          <Route path='/*' element = {<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
