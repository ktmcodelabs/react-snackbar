# react-snackbar-notification

Snackbar like notification component for React Js

# Installation
```bash
npm i react-snackbar-notification
```

# Usage
```jsx

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
<SnackBar notifications={notifications}/>
```

# Options

```jsx harmony
const options = {
    positionY: 'top', // vertical position
    positionX: 'right', // horizontal position
    fadeout: 10, // auto hide notification item in seconds
    dummyDisplay: true // show dummy notifications (for demo only)
}
```

# Options

| Parameter | Default | Options | Description |
| ---------- |:-------:| :-----:| :-----|
| positionY | 'bottom' | 'top','bottom' | vertical position |
| positionX | 'right' | 'left','right' | horizontal position |
| fadeout | 15 | | auto hide notification item duration in seconds |
| dummyDisplay | false | boolean | show dummy notifications (for demo only) |
