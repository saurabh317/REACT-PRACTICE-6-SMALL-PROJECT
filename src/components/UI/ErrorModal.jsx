import styles from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return (<div className={styles.backdrop} onClick={props.onErrorHandler} />)
};

const ModalOverlay = (props) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>

            <div className={styles.content}>
                <p>{props.message}</p>
            </div>

            <footer className={styles.actions}>
                <Button  onClick={props.onErrorHandler}>Okay</Button>
            </footer>

        </Card>
    );
};

const ErrorModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop
                onErrorHandler={props.onErrorHandler} />,
                document.getElementById('backdrop-root')
            )}

            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onErrorHandler={props.onErrorHandler}/>,
                document.getElementById('overlay-root')

            )}
        </>
    )
}
export default ErrorModal;