import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({onAddProject, onCancel}) {
    const modalRef = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === ""){
            modalRef.current.open();
            return;
        }

        onAddProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        })
    }

    return (
    <>
    <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Please check your entered data</p>
        <p className="text-stone-600 mb-4">Please enter a valid title, description and due date.</p>
    </Modal>
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 mt-4">
            <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
            <li><button onClick={handleSave} className="bg-stone-800 text-stone-50 px-6 py-2 rounded-md hover:bg-stone-950">Save</button></li>
        </menu>
        <div>
            <Input ref={title} label= "Title" type="text"></Input>
            <Input ref={description} label= "Description" isTextarea></Input>
            <Input ref={dueDate} label= "Due Date" type="date"></Input>
        </div>

    </div>
    </>
    )
}