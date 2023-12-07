"use client";

import styles from "./page.module.css";
import useSWR from "swr";

const Dashboard = () => {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);

    return (
        <div>
            Dashboard
        </div>
    );
};

export default Dashboard;
