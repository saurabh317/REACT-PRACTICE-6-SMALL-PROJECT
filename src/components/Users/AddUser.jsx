import Card from "../UI/Card";
import styles from './AddUser.module.css';
import Button from "../UI/Button";
import { useState, useRef} from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {

    const NameRef = useRef();
    const AgeRef =  useRef();

    // const [ enteredUsername, setEnteredUsername ] = useState('');
    // const [ enteredAge, setEnteredage ] = useState('');
    const [error,setError] = useState(null);
    const AddUserHandler = (event) => {
        event.preventDefault();

        const userName = NameRef.current.value;
        const userAge = AgeRef.current.value;

        console.log(userName , userAge);

        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title:'invalid input',
                message:"please enter valid name and age"
            });
            return;
        }

        if(+userAge < 1){
            setError({
                title:'invalid Age',
                message:"please enter valid  age"
            });
            return;
        }


        const object = {
            id:Math.random(),
            name: userName,
            age: userAge
        }
        props.onGetdata(object);
        NameRef.current.value ='';
        AgeRef.current.value ='';
        

        // setEnteredUsername('');
        // setEnteredage('');
    }


     // const usernameHandler = (e) => {
    //     setEnteredUsername(e.target.value)
    // }

    // const ageHandler = (e) => {
    //     setEnteredage(e.target.value)
    // }
    
    const errorHandler =()=>{
        setError(null);
        };

    return (
        <>
       {error && <ErrorModal title={error.title} message={error.message} onErrorHandler={errorHandler} />}
        <Card className={styles.input}>
            <form onSubmit={AddUserHandler}>
                <label htmlFor="">UserName</label>
                <input type="text" name="" ref={NameRef}/>
                <label htmlFor="">Age(in years)</label>
                <input type="number" name="" ref={AgeRef}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </>
    )
};
export default AddUser;