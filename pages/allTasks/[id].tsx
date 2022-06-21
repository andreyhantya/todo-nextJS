import Layout from "../../components/Layout/Layout";
import styles from './styles.module.scss'
import {is} from "immutable";


export const getServerSideProps = async (context: any) => {
    const { id } = context.params
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

const Todo = ({ todo }: any) => {
    const {id, title, completed} = todo


    return (
        <Layout>
            <div className={styles.todo}>{title}</div>
        </Layout>
    )
}

export default Todo