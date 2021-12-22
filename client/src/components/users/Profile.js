import Account from './Account';
import AccountForm from './AccountForm';
import { MainContainer } from '../../styles/profileStyles';

const Profile = ({}) => {
  return (
    <MainContainer>
      <Account />
      <AccountForm />
    </MainContainer>
  )
}

export default Profile;