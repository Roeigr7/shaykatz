import './App.css';
import MainPage from './Pages/MainPage/Main';
import WhatYouGet from './Pages/WhatYouGet/WhatYouGet';
import AboutMe from './Pages/AboutMe/AboutMe';
import Walla from './Pages/Walla/Walla';
import Customers from './Pages/Customers/Customers';
import Footer from './Pages/Footer/Footer';
function App() {
  return (
    <div className='App'>
      <MainPage />
      <WhatYouGet />
      <AboutMe />
      <Walla />
      <Customers />
      <Footer />
    </div>
  );
}

export default App;
