import { useState } from 'react';
import './App.css';
import BodyTitle from './components/BodyTitle';
import MyForm from './components/MyForm';
import MyNavbar from './components/MyNavbar';
import { BrowserRouter as Router, Route, Routes} 
        from "react-router-dom";
import About from './components/About';
import Footer from './components/Footer';
import MyAlert from './components/MyAlert';

function App() {
  const [darkMode,setDarkMode]=useState("light");
  const [alert,setAlert] = useState(null);
  const darkModeFunction = ()=>
  {
      if(darkMode==="light")
      {
          setDarkMode("dark");
          document.body.style.background="#383838";
          document.body.style.color="white";
      }
      else
      {
          setDarkMode("light");
          document.body.style.background="white";
          document.body.style.color="black";
      }
  }
  function showAlert(message,type)
  {
      setAlert({
        msg:message,
        type:type
      });

      setTimeout(()=>{
        setAlert(null);
      },2000);
  }
  return (
    <>
     <Router>
      <MyNavbar name="Password-Generator" mode={darkMode} fun={darkModeFunction}></MyNavbar>
      <MyAlert alert={alert}/>
      <Routes>
          <Route exact path="/" element=
          {
            <>
              <BodyTitle></BodyTitle>
              <MyForm mode={darkMode} alert={showAlert}></MyForm>
            </>
          }/>
          <Route exact path="/about" element={<About/>} />
        </Routes>
      <Footer mode={darkMode}></Footer>
      </Router>
    </>
  );
}

export default App;
