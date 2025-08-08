import { useState } from "react";

export default function NewTask({onAddTask}) {

    const [task, setTask] = useState("");

    function handleChange(event) {
        setTask(event.target.value);
    }

    function handleClick() {
        onAddTask(task);
        setTask('');
    }

    return (
        <div className="flex gap-4 items-center">
            <input onChange={handleChange} value={task} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
            <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    )
}