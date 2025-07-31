import Input from "./Input";
import { useRef } from "react";

export default function NewProject({onAddProject}) {

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        //validation...

        onAddProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        })
    }

    return (
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 mt-4">
            <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button onClick={handleSave} className="bg-stone-800 text-stone-50 px-6 py-2 rounded-md hover:bg-stone-950">Save</button></li>
        </menu>
        <div>
            <Input ref={title} label= "Title" type="text"></Input>
            <Input ref={description} label= "Description" isTextarea></Input>
            <Input ref={dueDate} label= "Due Date" type="date"></Input>
        </div>

    </div>
    )
}