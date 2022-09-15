import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from "./components/Header/Header"
import { Home } from "./pages/Home/Home"
import { Tickets } from "./pages/Tickets/Tickets"
import { Ideas } from "./pages/Ideas/Ideas"
import { Contact } from "./pages/Contact/Contact"
import { Agents } from "./pages/Agents/Agents"
import { Articles } from "./pages/Articles/Articles"
import { Settings } from "./pages/Settings/Settings"
import { Subscribtion } from "./pages/Subscribtion/Subscribtion"
import { SingleCard } from './pages/singleCard/SingleCard';

function App() {
  return (
    <div className="App container">
      <Sidebar />

      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/subscribtion" element={<Subscribtion />} />
          <Route path='/item/:id' element={<SingleCard/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
