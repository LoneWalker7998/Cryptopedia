import { BrowserRouter , Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header'
import Home from './Pages/Home'
import Coins from './Pages/Coins';
import { makeStyles } from '@material-ui/core';


function App() {
const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh"

  }
}))

const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        
          <Route path="/" component={Home} exact />
          <Route path="/coins/:id" component={Coins} />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
