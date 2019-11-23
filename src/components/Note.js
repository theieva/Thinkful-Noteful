import React from 'react';


class Note extends React.Component {
    render() {
        return (
            <div className='note'>
                <h2>NOTE 1</h2>
                <span>Date modified on Jan 3rd 2019</span>
                <button className='delete-button'>Delete Note</button>
            </div>
        )
    }
}
export default Note;