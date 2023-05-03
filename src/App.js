import './App.css';
import { useEffect, useState } from 'react';
import ListShow from './ListShow';
import ListCreate from './ListCreate';

const App = () => {
    const [listItems, setListItems] = useState([]);

    const handleDelete = (id) => {
        const updatedList = listItems.filter((toDoItem) => {
            return toDoItem.id !== id;
        });

        setListItems(updatedList);
    };

    const createItem = (toDoItem) => {
        const updatedItem = [...listItems, { id: Math.round(Math.random() * 9999), toDoItem }];

        setListItems(updatedItem);
    };

    // const displayItem = (toDoItem) => {
    //     setListItems(toDoItem);
    // }

    return (
        <div className='app'>
            <h1>To-Do list</h1>
            <ListCreate disp={createItem} />
            <ListShow listItems={listItems} itemDelete={handleDelete} />
        </div>
    )
};

export default App;

