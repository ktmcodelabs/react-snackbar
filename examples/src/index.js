import React from 'react';
import {render} from 'react-dom';
import SnackBar from './../../src';
import uuidv4 from "uuid/v4";

const notifications = [
    {
        message: "You have new message.  consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore ",
        action: [
            {
                label: 'OK'
            },
            {
                label: 'View',
                link: 'https://sujanbyanjankar.com.np'
            }
        ]
    },
    {
        message: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore sit amet, consetetur sadipscing elitr, sed diam nonumy ei.",
        action: [
            {
                label: 'OK'
            }
        ]
    }
]

const options = {
    positionY: 'top',
    positionX: 'right',
    fadeout: 10,
    dummyDisplay: true
}

const App = () => (
    <SnackBar notifications={notifications} options={options}/>
);
render(<App/>, document.getElementById("snackbar"));