import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Tv from "./pages/Tv";
import Celebrity from "./pages/Celebrity";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import MovieDetail from "./pages/MovieDetail";


function App() {
  return (
    <div className="root-wrap">
      <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/movie' element = {<Movies/>} />
          <Route path='/movie/:title' element = {<MovieDetail/>} />
          <Route path='/tv' element = {<Tv/>} />
          <Route path='/person' element = {<Celebrity/>} />
          <Route path="/login" element = {<LoginPage/>} />
          <Route path='/*' element = {<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
