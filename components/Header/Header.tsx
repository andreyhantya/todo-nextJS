import React from "react";
import Link from "next/link";
import styles from './styles.module.scss'

const Header = () => {
    const navigations = [
        {id: 1, title: "All tasks", path: '/allTasks'},
        {id: 2, title: "Todo", path: '/todos'},
        {id: 3, title: "Completed task", path: '/completed'},
    ]

    return (
        <header className={styles.header}>
           <h1>Todo</h1>
            <ul className={styles.linkWrapper}>
                {navigations.map(({id, title, path}) => (
                    <li key={id}>
                        <Link href={path}>
                            <a>{title}</a>
                        </Link>
                    </li>
                ))
                }
            </ul>
        </header>
    )
}

export default Header;