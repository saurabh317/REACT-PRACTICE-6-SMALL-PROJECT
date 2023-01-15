import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


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
  <div>
    <AddUser onGetdata={dataHandler} />
    <UserList users={usersList} />

  </div>
);
}

export default App;
