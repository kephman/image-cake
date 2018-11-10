import React from 'react';

function alertWord(word) {
    if (typeof window === 'object') {
        window.alert(word); // eslint-disable-line
    }
}

function getContainer(content) {
    return (
        <div>
            { typeof content === 'string' ? content : 'no content'}
        </div>
    );
}

export default { alertWord, getContainer };
