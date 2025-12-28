import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Auth from "./components/Auth";
import LinkSent from "./pages/LinkSent";
import { ContactProvider } from "./lib/ContactContext";

export default function App() {
  return (
    <BrowserRouter>
      <ContactProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/link-sent' element={<LinkSent />} />
          <Route path='/contacts' element={<Contact />} />
        </Routes>
      </ContactProvider>
    </BrowserRouter>
  );
}
