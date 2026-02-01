import Card from "./Card";
import { useEffect } from "react";

type TodoProps={
    task: string
    priority: number
    onClickTask: (task: string)=>void
}


const Todo = ({task, priority, onClickTask}:TodoProps)=>{
    useEffect(() => {
        console.log("Todo mounted:", task);

        return () => {
        console.log("Todo unmounted:", task);
        };
    }, []);

    useEffect(() => {
        console.log("Task updated:", task);
    }, [task]);

    return (
        <p onClick={()=>onClickTask(task)} style={{color: "blue", cursor: "pointer"}}>
            {task} - {priority}
        </p>
        
        
    );
}

const TodoList = ()=>{
    const isCompleted = (task:string)=>{
        console.log("clicked task is:", task)     
    }
    return (
        <Card title="My todo list">
            <p>Todo Task is:</p>
            <Todo task="Learn React" priority={1} onClickTask={isCompleted}/>
            <Todo task="Build Project" priority={2} onClickTask={isCompleted}/>
        </Card>
    );
}

export default TodoList;