import styles from "./contact.module.css";
import Image from "next/image";
import Button from "../../components/button/Button";

const Contact = () => {
    return (
        <>
            <h1 className={styles.title}>Let`s Keep in Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.image}
                        alt="contacts"
                        src="/contact.png"
                        fill
                    />
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder="name" className={styles.input}/>
                    <input type="text" placeholder="email" className={styles.input}/>
                    <textarea placeholder="message" cols="30" rows="10" className={styles.textArea}/>
                    <Button text="Send" url="#"/>
                </form>
            </div>
        </>
    );
};

export default Contact;
