import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
    return (
        <>
            <h1 className={styles.selectTitle}>Choose a gallery</h1>
            <div className={styles.items}>
                <Link href="/portfolio/illustrations" className={styles.item}>
                    <span className={styles.title}>Illustrations</span>
                </Link>
                <Link href="/portfolio/websites" className={styles.item}>
                    <span className={styles.title}>Websites</span>
                </Link>
                <Link href="/portfolio/application" className={styles.item}>
                    <span className={styles.title}>Application</span>
                </Link>
            </div>
        </>
    );
};

export default Portfolio;
