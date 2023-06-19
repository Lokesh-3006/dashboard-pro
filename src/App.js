
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import { Stack } from 'react-bootstrap';
import IconsSection from './components/IconSection';
import About from './components/dummy/About';
import Contacts from './components/dummy/Contacts';
import Favorites from './components/dummy/Favorites';
import Feedback from './components/dummy/Feedback';
import Help from './components/dummy/HelpComponent';
import More from './components/dummy/More';
import MyHome from './components/dummy/MyHome';
import Organization from './components/dummy/Organization';
import Profile from './components/dummy/Profile';
import Tools from './components/dummy/Tools';
import './App.css';

function App() {

  return (<>
    <BrowserRouter>
      <Container fluid className="upper-section back-ground" >
        <Navbar />
        <Stack style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
          <Stack>
            <IconsSection />
          </Stack>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/feedback' element={<Feedback />} />
            <Route path='/help' element={<Help />} />
            <Route path='/more' element={<More />} />
            <Route path='/myHome' element={<MyHome />} />
            <Route path='/organization' element={<Organization />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/tools' element={<Tools />} />
          </Routes>
        </Stack>
      </Container >
    </BrowserRouter>
  </>)
}

export default App;
