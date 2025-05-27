import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import { Header } from "./components/layouts/Header.jsx";
import { Footer } from "./components/layouts/Footer.jsx";
import { Accueil } from "./pages/Accueil.jsx";
import { Presentation } from "./pages/Presentation.jsx";
import { NewsCorner } from './pages/NewsCorner.jsx';
import { Contact } from "./pages/Contact.jsx";
import { Auth } from "./pages/Auth/Auth.jsx";
import { Categories } from "./components/layouts/Categories.jsx";
import { useAuth } from "./contexts/AuthContext.jsx";
import { isUserConnected } from "./services/users.js";
import { Admin } from "./pages/admin/Admin.jsx";

function App() {

  const { state, dispatch } = useAuth();

  useEffect(() => {
    checkAuthStatus();
  }, []);

  async function checkAuthStatus() {
    const resUser = await isUserConnected();
    if (resUser.ok && resUser.data.isUser) {
      dispatch({ type: "SET_USER", payload: true });
    } else {
      dispatch({ type: "LOGOUT" });
    }
  }

  return (
    <div className="app">
      <Header />
      <main>
        <aside>
          <Categories />
        </aside>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/newsCorner" element={<NewsCorner />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          {state.isConnected && <Route path="/admin" element={<Admin />} />}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
