import Card from "./Card";

function Todo({task, priority, onClickTask}){
    return (
        <p onClick={()=>onClickTask(task)} style={{color: "blue", cursor: "pointer"}}>
            {task} - {priority}
           
        </p>
        
    );
}

function TodoList(){
    const isCompleted = (task)=>{
        console.log("clicked task is:", task)     
    }
    return (
        <Card title="My todo list">
            <p>Todo Task is:</p>
            <Todo task="Learn React" priority="1" onClickTask={isCompleted}/>
            <Todo task="Build Project" priority="2" onClickTask={isCompleted}/>
        </Card>
    );
}

export default TodoList;