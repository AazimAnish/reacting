import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CatFact } from "./pages/CatFact";
import { ToDo } from "./pages/ToDo";
import { Excuses } from "./pages/Excuses";
import {Button, ButtonGroup} from "@nextui-org/react";


export default function App() {

  return (
    <>
      <div className="App">

      <Router>
        <div className="flex flex-cols gap-4 justify-center p-8 absolute inset-x-0 top-0">
          <Link to="/todo"><Button color="primary" variant="flat">ToDo</Button></Link>
          <Link to="/catfact"><Button color="primary" variant="flat">Cat Fact</Button></Link>
          <Link to="/excuses"><Button color="primary" variant="flat">Excuses</Button></Link>
        </div>

          <Routes>
            <Route path="/todo" element={<ToDo />}/>
            <Route path="/excuses" element={<Excuses />}/>
            <Route path="/catfact" element={<CatFact />}/>
          </Routes>
      </Router>

      </div>
    </>
  );
}
