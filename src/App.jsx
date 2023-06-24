import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import '../src/css/App.css';
import Header from './components/Header';
import Auth from './components/Auth';
import User from './components/User';


function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <User />}
    </Fragment>
  );
}

export default App;