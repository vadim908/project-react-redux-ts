import './App.css';
import { Header } from '../Header/Header';
import { Route, Switch } from 'react-router';
import { Users } from '../Users/Users';
import { FirstPage } from '../FirstPage/FirstPage';
import { Posts } from '../Posts/Posts';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>

        <Route exact path="/">
          <FirstPage />
        </Route>

        <Route path="/users">
          <Users />
        </Route>

        <Route path="/posts">
          <Posts />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
