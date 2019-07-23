import React from 'react';
import {render} from 'react-dom';
import SnackBar from './../../src';
import uuidv4 from "uuid/v4";

const notifications = [
    {
        timestamp: new Date().getTime(),
        key: uuidv4(),
        message: "You have new message.  consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore ",
        action: [
            {
                label: 'OK'
            },
            {
                label: 'View',
                link: 'http://message'
            }
        ]
    },
    {
        timestamp: new Date().getTime(),
        key: uuidv4(),
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