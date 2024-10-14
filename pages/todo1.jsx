import { ToDoApp } from '@/components/todo';
import Head from 'next/head';
export default function Todo1Page() {
  return <>
    <div className="до-head"></div>
    <Head>
      <title>To Do List</title>
    </Head>
    <h1>To Do List</h1>
    <ToDoApp/>
  </>;
}