import React from "react";

const Card = (props) => {
    const logoURL = props.logo;
    const title = props.title;
    const link = props.link;

    return (
        <div className="Card">
            <img src={logoURL} alt={title} />
            <h3>{title}</h3>
            <a href={link}>
                <button>Resource</button>
            </a>
        </div>
    );
}

export default Card;