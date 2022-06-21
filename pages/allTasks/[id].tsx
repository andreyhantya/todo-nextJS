import Layout from "../../components/Layout/Layout";
import styles from './styles.module.scss'
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { ITodosData } from "../../interfaces/Todos";


type Todo = {
    title: string
}

type Params = {
    id: string
}

type Props = {
    todo: Todo
}

interface ITodoProps {
    todo: ITodosData
}

export const getServerSideProps = async (
    context: GetServerSidePropsContext ): Promise<GetServerSidePropsResult<Props>> => {
    const { id } = context.params as Params;
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