import { useState } from "react";

const ListCreate = ({ disp }) => {
    const [toDoItem, setToDoItem] = useState('');

    const handleChange = (event) => {
        setToDoItem(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        disp(toDoItem);
    };

    return (
        <div className='inputTer'>
            <form onSubmit={handleSubmit}>
                <input value={toDoItem} onChange={handleChange} placeholder='Add an Item!' />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ListCreate;