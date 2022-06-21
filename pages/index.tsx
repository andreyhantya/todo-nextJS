import Layout from "../components/Layout/Layout";
import { ITodosData } from "../interfaces/Todos";
import { GetServerSidePropsResult } from "next";

interface IHomeProps {
    todos: ITodosData[]
}

export const getServerSideProps  = async (): Promise<GetServerSidePropsResult<IHomeProps>> => {
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

const Home = ({ todos }: IHomeProps): JSX.Element => (
        <Layout title='Todo list'>
            {todos.map(( { id, title }) => <div key={id}>{title}</div>)}
        </Layout>
)

export default Home;