import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {Route, Switch} from 'react-router-dom'

import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Category from './pages/Category';
import Recipte from './pages/Recipte';







function App() {
  return (
    <div className="App">
      <Header/>
      <main className='container content pt-5'>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/category/:name" component={Category}/>
        <Route path="/meals/:id" component={Recipte}/>
        <Route component={NotFound} /> 
        </Switch>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
