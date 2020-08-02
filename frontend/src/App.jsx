import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PhoneList } from './pages/PhoneListContainer/PhoneList';
import { PhoneDetail } from './pages/PhoneDetailComponent/PhoneDetail';
import { MobilesContext } from './shared/contexts/MobilesContext';
import './App.scss';

function App() {

  const [mobiles, setMobiles] = useState([]);

  return (
    <div className="App">
      <Router>
        <nav>
          <ul className="block-list">
            <li className="block-list__list">
              <Link className="block-list__link" to="/">Terminales</Link>
            </li>
          </ul>
        </nav>
        <MobilesContext.Provider value={[mobiles, setMobiles]}>
          <Switch>
            <Route path="/:id">
              <PhoneDetail/>
            </Route>
            <Route path="/">
              <PhoneList />
            </Route>
          </Switch>
        </MobilesContext.Provider>
      </Router>
    </div>
  );
}

export default App;
