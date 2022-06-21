import React from "react";
import Layout from "../../components/Layout/Layout";
import { GetServerSideProps } from "next";
import { ITodosData } from "../../interfaces/Todos";

interface ICompletedProps {
    todos: ITodosData[]
}
export const getServerSideProps: GetServerSideProps  = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    return {
        props: {todos: data}
    }
}

const Completed = ({ todos }: ICompletedProps)=> {
    const completedTasks = todos.filter(({ completed }) => completed)

    return (
        <Layout title='Completed Tasks'>
            {completedTasks.map((todo) => <div key={todo.id}>{todo.title}</div>)}
        </Layout>
    )
}

export default Completed;