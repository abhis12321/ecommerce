"use client"
import { useSelector } from 'react-redux';
import UserProfile from '../_components/UserProfile';
import LoginRegisterContainer from '../_components/LoginRegisterContainer';

export default function Page() {
  const user = useSelector(state => state.user.value);

  return (
    <div className='h-nav flex flex-col items-center justify-center'>
      {
        user ?
          <UserProfile user={user} />
          :
          <LoginRegisterContainer />
      }
    </div>
  )
}