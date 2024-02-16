
import { Route, Routes } from 'react-router-dom';
import { Header } from './layouts/header';
import { PageAbout } from './pages/about/about';
import { PageHome } from './pages/home/home';
import { TheFooter } from './layouts/footer';
import { ContactSection } from './pages/contact/components/contactSection';
import { Pageshop } from './pages/shop/shop';



function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<PageHome />} />
                <Route path='/about' element={<PageAbout />} />
                <Route path='/contact' element={<ContactSection />} />
                <Route path='/shop' element={<Pageshop/>} />
            </Routes>
            <TheFooter/>
        </>
    );
}

export default App;

