import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Show from "./pages/Show";
import About from "./pages/About";

import Layout from "./components/Layout";
function App() {
  return (
    <BrowserRouter>
    <Layout>
        <Routes>
          <Route path="/" element={<Show/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/create" element={<Create/>} />
        </Routes>
    </Layout>
      </BrowserRouter>
  )
}

export default App
