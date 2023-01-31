import React, {useEffect, useState} from 'react';

function Projects () {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch('/projects');
        console.log(data);
        const items = await data.json();
        setItems(items);
    };

    return (
        <section>
            <h1>HERE YOU HAVE</h1>
            {
            items.map(item => (
                <div>
                    <p>{item.name}</p>
                    <p>{item.link}</p>
                    <p>{item.desc}</p>
                </div>
            ))
            }
        </section>
    );
}

export default Projects;