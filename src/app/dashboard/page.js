"use client"
import { useSelector } from 'react-redux';
import UserProfile from '../_components/UserProfile';
import LoginRegisterContainer from '../_components/LoginRegisterContainer';

export default function Page() {
  const user = useSelector(state => state.user.value);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-4'>
      {
        user ?
          <UserProfile user={user} />
          :
          <LoginRegisterContainer />
      }
    </div>
  )
}