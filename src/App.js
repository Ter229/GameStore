import "./App.css";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import Footer from "./Component/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import PageGame from "./Component/Main/PageGame/PageGame";
import Cart from "./Component/Cart/Cart";
import Pay from "./Component/Pay/Pay";
import Library from "./Component/Library/Library";
import Profile from "./Component/Profile/Profile";
import ProfileEdit from "./Component/Profile/ProfileEdit/ProfileEdit";
import ProfileEditAvatar from "./Component/Profile/ProfileEdit/ProfileEditAvatar";
import ProfileEditMain from "./Component/Profile/ProfileEdit/ProfileEditMain";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/game-page/:id" element={<PageGame />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/library" element={<Library />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit" element={<ProfileEdit />}>
            <Route path="avatar" element={<ProfileEditAvatar />} />
            <Route path="main" element={<ProfileEditMain />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
