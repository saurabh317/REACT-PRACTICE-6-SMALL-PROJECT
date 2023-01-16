import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import Wrapper from './components/HELPER/Wrapper';


function App() {

  const [ usersList , setUsersList ] = useState([]);
  
  const dataHandler = (data) => {
    setUsersList((previousData) => {
      return([...previousData,{data}]);
    })
    // console.log(data);
    // console.log(usersList);
  }

return (
  <Wrapper>
    <AddUser onGetdata={dataHandler} />
    <UserList users={usersList} />
  </Wrapper>
);
}

export default App;
