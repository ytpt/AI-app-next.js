import styles from "./page.module.css";
import Image from "next/image";

async function getData(id) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {cache: "no-store"}
    );
    if (!res.ok) {
        throw new Error("Failed!");
    }

    return res.json();
}

const BlogId = async ({ params: {id} }) => {
    const data = await getData(id);

    return (
        <>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <p className={styles.desc}>{data.body}</p>
                    <div className={styles.author}>
                        <Image
                            src="https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=1380&t=st=1686056951~exp=1686057551~hmac=5da557bfff0192720a1dfa7608b353322afcbfc038886c891ba296fd8fa7e97b"
                            alt="avatar"
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span>Username</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=1380&t=st=1686056951~exp=1686057551~hmac=5da557bfff0192720a1dfa7608b353322afcbfc038886c891ba296fd8fa7e97b"
                        alt=""
                        fill
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p>Content</p>
            </div>
        </>
    );
};

export default BlogId;
