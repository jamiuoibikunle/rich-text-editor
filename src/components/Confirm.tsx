import styles from "../styles/confirm.module.css";
import success from "../resources/check-fill.svg";

interface Props {
    handleHome: () => void;
}

const Confirm = ({ handleHome }: Props) => {
    return (
        <main className={styles.container}>
            <main className={styles.wrapper}>
                <div className={styles.success}>
                    <img src={success} />
                </div>
                <h1 className={styles.header}>Purchase Completed</h1>
                <div className={styles.message}>
                    Please check your email for details concerning this
                    transaction
                </div>
                <div className={styles.return}>
                    <button onClick={handleHome}>Return Home</button>
                </div>
            </main>
        </main>
    );
};

export default Confirm;
