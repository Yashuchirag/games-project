import { Fragment } from "react";


function ListGroup() {
    let items = ["New York", "Tokyo", "London", "Sydney", "Beijing"];
    
    const handleClick = (event: React.MouseEvent) => {
        console.log(event);
    }

    return (
        <Fragment>
            <h2>List Group</h2>
            {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item) => (
                    <li 
                        className="list-group-item" 
                        onClick={handleClick} 
                        key={item}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}

export default ListGroup;