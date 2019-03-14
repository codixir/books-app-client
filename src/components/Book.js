import React from 'react';

export default ({ book: { Title, Author, ID, Year}, onDelete}) => {
    return (
        <div>
            <h2>{Title}</h2>
            <p>{Author}</p>
            <p>{Year}</p>
            <button className="btn btn-danger"
                type="button"
                onClick={() => onDelete(ID)}>
                    Remove
            </button>
        </div>
    )
}