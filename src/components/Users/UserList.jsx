import Card from "../UI/Card";
import styles from './UserList.module.css';

const UserList = (props) => {
    // console.log(props);

    const userFun = (currentValue) => {
        return (
            <li key={currentValue.data.id}>
                {currentValue.data.name}
                (Age in years:{currentValue.data.age})
            </li>
        )

    }
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map(userFun)}
            </ul>
        </Card>

    )
}

export default UserList;