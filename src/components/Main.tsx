import { useState } from "react";
import styles from "../styles/main.module.css";
import Billing from "./Billing";
import Confirm from "./Confirm";
import Pay from "./Pay";
import Profile from "./Profile";

const Main = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step < 4 ? step + 1 : 1);
    };

    const handleHome = () => {
        setStep(1);
    };

    return (
        <main className={styles.container}>
            {step === 4 && <Confirm handleHome={handleHome} />}
            {step < 4 && (
                <section className={styles.wrapper}>
                    <h1>Complete your Purchase</h1>
                    <section className={styles.stepper}>
                        <div className={step === 1 ? styles.active : ""}>
                            Personal Info
                        </div>
                        <div
                            className={
                                step === 2 || step === 3 ? styles.active : ""
                            }
                        >
                            Billing Info
                        </div>
                        <div className={step === 4 ? styles.active : ""}>
                            Confirm Payment
                        </div>
                    </section>
                    {step === 1 && <Profile />}
                    {step === 2 && <Billing />}
                    {step === 3 && <Pay />}
                </section>
            )}
            {step < 4 && (
                <section className={styles.submit}>
                    <div onClick={handleNext} className={styles.next}>
                        <button>{step < 3 ? "Next" : "Pay"}</button>
                    </div>
                    <div className={styles.cancel} onClick={handleHome}>
                        <button>Cancel Payment</button>
                    </div>
                </section>
            )}
        </main>
    );
};

export default Main;
