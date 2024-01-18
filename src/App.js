import Brand from "./components/Brand";
import Input from "./components/Input";
import './components/css/bootstrap.min.css';
import Store from "./components/Store/Store";
import { Provider } from "react-redux";
import List from "./components/List";
import { BrowserRouter, Link, Route, Routers, Routes, useNavigate } from 'react-router-dom'
import './components/App.css'
function App() {
  return (
    <div className="container" >
      <Provider store={Store}>
        <BrowserRouter>
          <div className="row justify-content-evenly">
            <div className="col-12"><Brand /></div>
            <div onClick={() => {}} className="col-5 custom-hover  p-2 rounded-3 d-flex justify-content-center  btn btn-outline-primary text-black" >
              <Link style={{ textDecoration: 'none', color: "black", width: '100%' }} to='/'>CREATE DATA</Link>
            </div>
            <div onClick={() => { }} className="col-5 col-6  p-2 btn btn-outline-primary custom-hover rounded-3 d-flex justify-content-center" >
              <Link style={{ textDecoration: 'none', color: "black", width: '100%' }} to='/data'>CHECK DATA</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Routes>
                <Route path="/" element={<Input />} />
                <Route path="/data" element={<List />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;
