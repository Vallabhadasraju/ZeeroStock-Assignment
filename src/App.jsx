import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import MainContent from './components/MainContent';
import './App.css'

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainContent/>}/>
          <Route path="add-product" element={<AddProduct/>} />
          <Route path="edit-product/:id" element={<EditProduct/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
