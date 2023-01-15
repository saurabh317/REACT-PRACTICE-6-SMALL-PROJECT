import Card from "../UI/Card";
import styles from './AddUser.module.css';
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
    const [ enteredUsername, setEnteredUsername ] = useState('');
    const [ enteredAge, setEnteredage ] = useState('');
    const [error,setError] = useState(null);

    const AddUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title:'invalid input',
                message:"please enter valid name and age"
            });
            return;
        }

        if(+enteredAge < 1){
            setError({
                title:'invalid Age',
                message:"please enter valid  age"
            });
            return;
        }


        const object = {
            id:Math.random(),
            name: enteredUsername,
            age: enteredAge
        }
        props.onGetdata(object);
        setEnteredUsername('');
        setEnteredage('');
    }

    const usernameHandler = (e) => {
        setEnteredUsername(e.target.value)
    }

    const ageHandler = (e) => {
        setEnteredage(e.target.value)
    }
    
    const errorHandler =()=>{
        setError(null);
        };

    return (
        <>
       {error && <ErrorModal title={error.title} message={error.message} onErrorHandler={errorHandler} />}
        <Card className={styles.input}>
            <form onSubmit={AddUserHandler}>
                <label htmlFor="">UserName</label>
                <input type="text" name="" value={enteredUsername} onChange={usernameHandler} />
                <label htmlFor="">Age(in years)</label>
                <input type="number" name="" value={enteredAge} onChange={ageHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </>
    )
};
export default AddUser;