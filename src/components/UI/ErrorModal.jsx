import styles from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';
const ErrorModal =(props) =>{
    return(
        <div>
        <div className={styles.backdrop} onClick={props.onErrorHandler}>
        <Card className={styles.modal}>
            <header className={styles.header}>
            <h2>{props.title}</h2>
            </header>

            <div className={styles.content}>
            <p>{props.message}</p>
            </div>

            <footer className={styles.actions }>
            <Button type='submit' onClick={props.onErrorHandler}>Okay</Button>
            </footer>
           
        </Card>
        </div>
        </div>

    )
}
export default ErrorModal;