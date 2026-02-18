import { useState } from 'react';
import RegistrationForm from './components/RegistrationForm'
import RegistrationTable from './components/RegistrationTable';
import ImagesAndButtons from './components/ImagesAndButtons';
import NavBar from './components/NavBar';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUser = (newUser) => {
    setUsersList([...usersList, newUser]);
  };

  return (
    <>
      <NavBar />
      <RegistrationForm onUserAdded={addUser} />
      <RegistrationTable data={usersList} />
      <ImagesAndButtons />
    </>
  );
}

export default App;
