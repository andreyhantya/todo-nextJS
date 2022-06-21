import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import styles from "./styles.module.scss";
import { ITodosData } from "../../interfaces/Todos";
import { GetServerSideProps } from "next";

interface IAllTasksProps {
    todos: ITodosData[]
}

export const getServerSideProps: GetServerSideProps  = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    if(!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {todos: data}
    }
}

const allTasks = ({ todos }: IAllTasksProps): JSX.Element => (
        <Layout title='All tasks'>
            <ul>
                {todos.map(({ id, title, completed })=> (
                    <li key={id}  className={completed ? styles.completed : null!}>
                        <Link href={`/allTasks/${id}`}>{title}</Link>
                    </li>
                ))}
            </ul>
        </Layout>
)

export default allTasks;