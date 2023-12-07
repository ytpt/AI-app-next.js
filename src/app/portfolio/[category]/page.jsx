import styles from "./page.module.css";
import Button from "../../../components/button/Button";
import Image from "next/image";
import {items} from "./data";
import {notFound} from "next/navigation";

const getData = (cat) => {
    const data = items[cat];

    if (data) {
        return data
    }

    return notFound();
}

const Category = ({ params: {category} }) => {
    const data = getData(category);

    return (
        <>
            <h1 className={styles.catTitle}>{category}</h1>
            {data.map((item) => (
                <div className={styles.item} key={item.id}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.desc}</p>
                        <Button text="See More" url="#"/>
                    </div>
                    <div className={styles.imgContainer}>
                        <Image
                            className={styles.img}
                            fill
                            src={item.image}
                            alt={item.title}
                        />
                    </div>
                </div>
            ))}
        </>
    );
};

export default Category;
