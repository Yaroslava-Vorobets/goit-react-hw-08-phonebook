import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  
  const heandleLogOut = ()=> dispatch(logOut())

  return (
    <div>
      <p >Welcome, {user.name}</p>
      <button type="button" onClick={heandleLogOut} >
        Logout
      </button>
    </div>
  );
};
