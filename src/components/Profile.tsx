import React from "react";
import styles from "../styles/profile.module.css";

const forms = [
    {
        name: "Name",
        placeholder: "Opara Linus Ahmed",
        required: false,
    },
    {
        name: "Email Address",
        placeholder: "OparaLinusAhmed@devmail.com",
        required: true,
        info: "The purchase receipt will be sent to this address",
    },
    {
        name: "Address 1",
        placeholder: "The address of the user goes here",
        required: false,
    },
    {
        name: "Address 2",
        placeholder: "and here",
        required: false,
    },
];

const Profile = () => {
    return (
        <main className={styles.container}>
            {forms.map(({ name, placeholder, required, info }) => {
                return (
                    <div className={styles.field}>
                        <label>
                            {name}{" "}
                            {required && (
                                <span style={{ color: "red" }}>*</span>
                            )}
                        </label>
                        <input
                            type="text"
                            placeholder={placeholder}
                            required={required}
                        />
                        {info && <div className={styles.info}>{info}</div>}
                    </div>
                );
            })}
            <div className={styles.region}>
                <div className={styles.field}>
                    <label>Local Government</label>
                    <select defaultValue="" className={styles.select}>
                        <option value="" disabled>
                            Please select
                        </option>
                        <option value="surulere">Surulere</option>
                    </select>
                </div>
                <div className={styles.field}>
                    <label>State</label>
                    <select defaultValue="" className={styles.select}>
                        <option value="" disabled>
                            Please select
                        </option>
                        <option value="lagos">Lagos</option>
                    </select>
                </div>
            </div>
        </main>
    );
};

export default Profile;
