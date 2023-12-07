import styles from "./page.module.css";
import Image from "next/image";

const BlogId = async ({ params }) => {
    return (
        <>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>Title</h1>
                    <p className={styles.desc}>Desc</p>
                    <div className={styles.author}>
                        <Image
                            src={data.img}
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span>Username</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="" alt="" fill={true} className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <p>Content</p>
            </div>
        </>
    );
};

export default BlogId;
