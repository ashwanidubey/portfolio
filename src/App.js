import logo from './logo.svg';
import './App.css';
import './Mystyle.css';
import Header from './Header';
import Footer from './Footer';
import Intro from './Intro' ;
import Skills from './Skills';
import Project from './Project';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
function App() {
  
  return (
    <>
       
      <Router>
        <Switch>
           <Route exact path="/" render={()=>{return <><Header value={0}/><Intro  /></>}}/>
           <Route exact path="/intro" render={()=>{return <><Header value={0}/><Intro  /></>}}/>
           <Route exact path="/skills" render={()=>{return <><Header value={1}/><Skills /></>}}/>
           <Route exact path="/projects" render={()=>{return <> <Header value={2}/><Project/></>}}/>
          
        </Switch>
      </Router>
      <Footer />
         
   </>
  );
}

export default App;
