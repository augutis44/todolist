
function ListShow({ listItems, itemDelete }) {

    const handleDeleteClick = (id) => {
        itemDelete(id);
    }

    const renderListItems = listItems.map((item) => {
        return <li key={item.id}>
            {item.toDoItem} <button onClick={() => handleDeleteClick(item.id)}>Delete</button>
        </li>;
    });


    return (
        <ul>
            {renderListItems}
        </ul>
    );

};

export default ListShow;