import Layout from "../../components/Layout/Layout";
import styles from './styles.module.scss'
import { GetServerSideProps } from "next";
import { ITodosData } from "../../interfaces/Todos";


interface ITodoProps {
    todo: ITodosData
}

export const getServerSideProps: GetServerSideProps = async (context ) => {
    const { id } = context.params!;
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await response.json();

    if(!data) {
        return {
            notFound: true
        }
    }
    return {
        props: {todo: data}
    }
}


const Todo = ({ todo }: ITodoProps): JSX.Element => {
    const { title } = todo

    return (
        <Layout title={title}>
            <div className={styles.todo}>{title}</div>
        </Layout>
    )
}

export default Todo