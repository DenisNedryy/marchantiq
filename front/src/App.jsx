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
import { Admin2 } from "./pages/admin/Admin2.jsx";
import { News_focus } from "./pages/News_focus.jsx";
import { Items } from "./pages/items/Items.jsx";
import { ItemsDetails } from "./pages/items/ItemsDetails.jsx";
import { useState } from "react";
import { AdminUpdate } from "./pages/admin/AdminUpdate.jsx";
import { AdminUpdateImg } from './pages/admin/AdminUpdateImg.jsx';
import { AdminAddImg } from "./pages/admin/AdminAddImg.jsx";
import { AdminUpdateNews } from "./pages/admin/AdminUpdateNews.jsx";
import { AdminUpdateThreads } from "./pages/admin/AdminUpdateThreads.jsx";
import { AdminUpdateThreadImg } from './pages/admin/AdminUpdateThreadsImg.jsx';
import { SearchedItems } from "./pages/items/SearchedItems.jsx";
import { useScrollToTop } from "./hooks/useScrollToTop.js";

function App() {

  const { state, dispatch } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
    useScrollToTop();

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
    setIsLoading(false);
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
          <Route path="/news" element={<NewsCorner />} />
          <Route path="/news/news-details/:uuid" element={<News_focus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/:uuid" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          {state.isConnected && <Route path="/admin/addItems" element={<Admin />} />}
          {state.isConnected && <Route path="/admin/updateItems" element={<AdminUpdate />} />}
          {state.isConnected && <Route path="/admin/addItems-image" element={<AdminAddImg />} />}
          {state.isConnected && <Route path="/admin/updateItems-image" element={<AdminUpdateImg />} />}
          {state.isConnected && <Route path="/admin/addArticles" element={<Admin2 />} />}
          {state.isConnected && <Route path="/admin/updateArticle" element={<AdminUpdateNews />} />}
          {state.isConnected && <Route path="/admin/updateThread" element={<AdminUpdateThreads />} />}
          {state.isConnected && <Route path="/admin/updateThreadImg" element={<AdminUpdateThreadImg />} />}
          <Route path="/items/searchedItems/:searchedValue" element={<SearchedItems />} />
          <Route path="/items/:category" element={<Items />} />
          <Route path="/items/:category/items-details/:uuid" element={<ItemsDetails />} />
        </Routes>
      </main>
      {!isLoading && <Footer />}
    </div>
  )
}

export default App;
