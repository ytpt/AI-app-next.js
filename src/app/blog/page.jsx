import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {cache: "no-store"}
    );
    if (!res.ok) {
        throw new Error("Failed!");
    }

    return res.json();
}

const Blog = async () => {
    const data = await getData();

    return (
        <>
            {data.map((item) => (
                <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
                    <div>
                        <Image
                            alt="blog"
                            width={400}
                            height={250}
                            className={styles.image}
                            src="https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=1380&t=st=1686056951~exp=1686057551~hmac=5da557bfff0192720a1dfa7608b353322afcbfc038886c891ba296fd8fa7e97b"
                        />
                    </div>
                    <div>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.body}</p>
                    </div>
                </Link>
            ))}
        </>
    );
};

export default Blog;
