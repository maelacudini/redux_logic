import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth';


const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className='text-center'>
      <h1>Redux Auth</h1>
      {isAuth && (
        <div>
            <nav>
            <ul className='list-unstyled'>
                <li className='d-inline me-3'>
                    <a href='/'>My Products</a>
                </li>
                <li className='d-inline me-3'>
                    <a href='/'>My Sales</a>
                </li>
                <li className='d-inline'>
                    <a href='/' onClick={logoutHandler}>Logout</a>
                </li>
            </ul>
            </nav>
        </div>
      )}
    </header>
  );
};

export default Header;