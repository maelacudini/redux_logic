import { useDispatch } from 'react-redux';
import { authActions } from '../store/Auth';

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login());
  };

  return (
    <form className='card m-5 p-5' onSubmit={loginHandler}>
      <div className='mb-3'>
        <label htmlFor='email'>Email</label>
        <input className='form-control' type='email' id='email' />
      </div>
      <div className='mb-3'>
        <label htmlFor='password'>Password</label>
        <input className='form-control' type='password' id='password' />
      </div>
      <div>
        <button className='btn btn-primary'>Login</button>
      </div>
    </form>
  );
};

export default Auth;