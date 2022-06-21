import Layout from "../components/Layout/Layout";
import { ITodosData } from "../interfaces/Todos";
import { GetServerSideProps } from "next";

interface IHomeProps {
    todos: ITodosData[]
}

export const getServerSideProps: GetServerSideProps  = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    return {
        props: {todos: data}
    }
}

const Home = ({ todos }: IHomeProps): JSX.Element => (
        <Layout title='Todo list'>
            {todos.map(( { id, title }) => <div key={id}>{title}</div>)}
        </Layout>
)

export default Home;