import { Route, Switch } from "react-router-dom";
import HomePage from './views/HomePage'
import Windows from './views/WindowsPage'
import Loggia from './views/LoggiaPage'
import StockPage from './views/StockPage'
import OfficePage from './views/OfficePage'
import Header from './Components/Header'


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/windows" component={Windows} />
        <Route path="/loggia" component={Loggia} />
        <Route path="/stock" component={StockPage} />
        <Route path="/office" component={OfficePage}/>
      </Switch>
      
    </div>
  );
}

export default App;
