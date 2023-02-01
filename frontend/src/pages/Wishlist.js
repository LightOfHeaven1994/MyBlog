import React from "react";

function Wishlist () { 

    const withlistItems = [
        {
            id: 1,
            url: "https://www.alza.cz/iphone-14-pro-max?dq=7403224",
            img: "https://images.pexels.com/photos/5709063/pexels-photo-5709063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "description",
            price: "optionally price"
        },
        {
            id: 2,
            url: "https://www.alza.cz/iphone-14-pro-max?dq=7403224",
            img: "https://images.pexels.com/photos/5709063/pexels-photo-5709063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "description",
            price: "optionally price"
        },
        {
            id: 3,
            url: "https://www.alza.cz/iphone-14-pro-max?dq=7403224",
            img: "https://images.pexels.com/photos/5709063/pexels-photo-5709063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "description",
            price: "optionally price"
        },
    ] 

    return (
        <section>
            <div className="wishlist-items">
                <h1>User's wishlist</h1>
                {withlistItems.map((item) => (
                    <div className="wishlist-item" key={item.id}>
                        <div className="wishlist-item-img">
                            <img src={item.img} alt=""></img>
                        </div>
                        <div className="wishlist-item-content">
                            <p>URL: {item.url}</p>
                            <p>Description: {item.desc}</p>
                            <p>Price: {item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Wishlist;