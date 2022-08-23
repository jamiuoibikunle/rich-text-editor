import React from "react";
import styles from "../styles/pay.module.css";

const Pay = () => {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <div>Item Name</div>
                <div>N Price</div>
            </header>
            <section className={styles.item}>
                <div>Data science and usability</div>
                <div>50,000.00</div>
            </section>
            <section className={styles.shipping}>
                <div>Shipping</div>
                <div>0.00</div>
            </section>
            <section className={styles.total}>
                <div>Total</div>
                <div>50,000.00</div>
            </section>
        </main>
    );
};

export default Pay;
