import React, {useEffect, useState} from 'react';

function Projects () {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch('/users');
        const items = await data.json();
        setItems(items);
    };

    return (
        <section>
            <h1>HERE YOU HAVE</h1>
            {
            items.map(item => (
                <div>
                    <p>{item.id}</p>
                    <p>{item.email}</p>
                    <p>{item.password}</p>
                </div>
            ))
            }
        </section>
    );
}

export default Projects;