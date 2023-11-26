import React, {useState} from 'react';
import styles from './PostsList.module.css';

function PostsList(props) {
    return (
        <div className= {styles.list}>
            <p>{props.title}</p>
            <button onClick={props.onClick}>Remove</button>
        </div>
    )
};

export default PostsList;



