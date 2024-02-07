import React from 'react';
import Admonition from '@theme-original/Admonition';
// import MyCustomNoteIcon from '@site/static/img/info.svg';

export default function AdmonitionWrapper(props) {
    if (props.type === 'info') {
        return <Admonition title={false} icon={false} {...props} />;
    } else {
        return <Admonition {...props} />;
    }
    // return <Admonition icon={<MyCustomNoteIcon />} {...props} />;
}