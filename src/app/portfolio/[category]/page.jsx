import styles from "./page.module.css";
import Button from "../../../components/button/Button";
import Image from "next/image";

const Category = ({params: {category}}) => {
    return (
        <>
            <h1 className={styles.catTitle}>{category}</h1>
            <div className={styles.item} key="1">
                <div className={styles.content}>
                    <h1 className={styles.title}>test</h1>
                    <p className={styles.desc}>desc</p>
                    <Button text="See More" url="#"/>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        fill={true}
                        src="https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=1380&t=st=1686056951~exp=1686057551~hmac=5da557bfff0192720a1dfa7608b353322afcbfc038886c891ba296fd8fa7e97b"
                        alt="title"
                    />
                </div>
            </div>
            <div className={styles.item} key="2">
                <div className={styles.content}>
                    <h1 className={styles.title}>test</h1>
                    <p className={styles.desc}>desc</p>
                    <Button text="See More" url="#"/>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        fill={true}
                        src="https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=1380&t=st=1686056951~exp=1686057551~hmac=5da557bfff0192720a1dfa7608b353322afcbfc038886c891ba296fd8fa7e97b"
                        alt="title"
                    />
                </div>
            </div>
        </>
    );
};

export default Category;
