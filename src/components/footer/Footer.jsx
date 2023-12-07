import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div>2023 AI App. All rights reserved</div>
            <div className={styles.social}>
                <Image src="/vk.png" alt="vk.com" width={15} height={15} className={styles.icon}/>
                <Image src="/inst.png" alt="instagram" width={15} height={15} className={styles.icon}/>
                <Image src="/twitter.png" alt="twitter" width={15} height={15} className={styles.icon}/>
                <Image src="/yt.png" alt="youtube" width={15} height={15} className={styles.icon}/>
            </div>
        </footer>
    );
};

export default Footer;
