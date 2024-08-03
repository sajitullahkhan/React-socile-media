import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { useState } from 'react';
import PostListProvider from '../store/post-list-store';
import './App.css'
import { Outlet } from "react-router-dom";
function App() {

  const [selectTab, setSelectTab] = useState("Home");

  return (
    <PostListProvider>
      <div className='app-container'>
        <Sidebar selectTab={selectTab} setSelectTab={setSelectTab}></Sidebar>
        <div className='content'>
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  )
}

export default App;
