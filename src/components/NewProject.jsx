import Input from "./Input";

export default function NewProject() {
    return (
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 mt-4">
            <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button className="bg-stone-800 text-stone-50 px-6 py-2 rounded-md hover:bg-stone-950">Save</button></li>
        </menu>
        <div>
            <Input label= "Title" type="text"></Input>
            <Input label= "Description" isTextarea></Input>
            <Input label= "Due Date"></Input>
        </div>

    </div>
    )
}