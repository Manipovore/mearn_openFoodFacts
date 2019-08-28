import React from 'react';
import '../style/pagination.css'


const ComponentCategories = (props) => {
    return (
        <a href={'/' + props.category + '/' + props.name} className="list-group-item list-group-item-action">{props.name}</a>
    );
};

export default ComponentCategories;
