import './App.scss';
import 'swiper/swiper.min.css';
import './assets/boxicons-2.1.0/boxicons-2.1.0/css/boxicons.min.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Routes from './config/Routes';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <p style={{ textAlign: 'center' }}>"Create By Nguyễn Kim Khôi ( nguyenkimkhoi2709@gmail.com )"</p>
      <Route render={props => (
        <>
          <Header {...props}/>
          <Routes />
          <Footer />
        </>
      )} />
    </BrowserRouter>
  );
}

export default App;
