import Layout from "../../components/Layout/Layout";
import React from "react";
import {ITodosData} from "../../interfaces/Todos";
import { GetServerSideProps } from "next";

interface ITodosProps {
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

const Todos = ({ todos }: ITodosProps): JSX.Element => {
    const todoTasks = todos.filter(({ completed }) => !completed)

    return (
        <Layout title='Todo Tasks'>
            {todoTasks.map((todo) => <div key={todo.id}>{todo.title}</div>)}
        </Layout>
    )
}

export default Todos;