import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { Menu } from "./views/Menu/Menu";
import { Profile } from "./views/Profile/Profile";
import { MenuProvider } from "./views/Menu/MenuProvider";
import { Opinions } from "./views/Opinions/Opinions";
import { OpinionsProvider } from "./views/Opinions/OpinionsProvider";

function App() {
  return (
    <Router>
      <MenuProvider>
        <OpinionsProvider>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/menu" element={<Menu />} />

            <Route path="/profile/:developer" element={<Profile />} />
            <Route path="/opinions" element={<Opinions />} />
          </Routes>
        </OpinionsProvider>
      </MenuProvider>
    </Router>
  );
}

export default App;
