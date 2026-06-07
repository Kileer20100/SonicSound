import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConnectionMenuPage } from "./pages/ConnectionMenu/ConnectionMenu";
import { NotFoundPage } from "./pages/NotFound/NotFound";
import { invoke } from "@tauri-apps/api/core";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initApp = async () => {
      setLoading(true);
      
      await delay(1000);
      
      invoke("close_splashscreen").catch(console.error);
      setLoading(false);
    };

    initApp();
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConnectionMenuPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
