import React from 'react';
import uuidv4 from 'uuid/v4'
import './styles/style.css';


class SnackBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            notifications: [],
            options: {
                positionY: 'bottom',
                positionX: 'right',
                fadeout:15,
                dummyDisplay: false
            }
        }
    }

    componentWillMount() {
        let notifications = this.state.notifications
        let newItems = (this.props.notifications && this.props.notifications.length > 0) && this.props.notifications.map(ni => {
            ni.timestamp = new Date().getTime()
            ni.key = uuidv4()
            return ni
        })

        let options = this.state.options
        if (this.props.options && Object.keys(this.props.options).length > 0) {
            let newOptions = this.props.options
            Object.keys(newOptions).map(key => {
                options[key] = newOptions[key]
            });
        }

        this.setState({
            notifications: notifications.concat(newItems),
            options
        })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        let notifications = this.state.notifications
        let newItems = nextProps.notifications.map(ni => {
            ni.timestamp = new Date().getTime()
            ni.key = uuidv4()
            return ni
        })
        notifications.concat(newItems)
        this.setState({
            notifications
        })
    }

    componentDidMount() {
        if (this.state.options.dummyDisplay)
            this.dummyNotifications()
        this.cleaner()
    }

    render() {
        if (this.state.notifications.length <= 0) return <React.Fragment/>

        let style={}
        if(this.state.options.positionY === 'top'){
            style.top = '15px'
        }
        else{
            style.bottom = '15px'
        }
        if(this.state.options.positionX === 'left'){
            style.left = '20px'
        }
        else{
            style.right = '20px'
        }

        return <div id={'reactSnackBar'} className={'snackBarContainer'} style={style}>
            {this.state.notifications.map((item) => {
                return this.showItem(item)
            })}
        </div>
    }

    redirectTo(e, target) {
        window.location.href = target;
        this.closeItem(e)
    }

    closeItem(e) {
        let idx = e.target.getAttribute('data-key')
        let notifications = this.state.notifications.filter(i => i.key !== idx)
        this.setState({notifications})
    }

    showItem(item) {
        return <div key={uuidv4()} className={'snackBarItem'}>
            <div className={'messageBox'}>
                <p>{item.message}</p>
            </div>
            <div className={'actionBox'}>
                {item.action.map(a => {
                    if ("link" in a)
                        return <button key={uuidv4()}
                                       onClick={e => this.redirectTo(e, a.link)}>{a.label}</button>
                    else
                        return <button key={uuidv4()} data-key={item.key}
                                       onClick={e => this.closeItem(e)}>{a.label}</button>
                })}
            </div>
        </div>
    }

    cleaner() {
        setInterval(function () {
            let notifications = this.state.notifications
            let nowTime = new Date().getTime()
            notifications = notifications.filter(item => {
                return (nowTime - item.timestamp) / 1000 < this.state.options.fadeout
            })
            this.setState({notifications})
        }.bind(this), 1000);
    }

    dummyNotifications() {
        let counter = 1
        setInterval(function () {
            let notifications = this.state.notifications
            if (notifications.length >= 10) notifications.shift()
            notifications.push({
                timestamp: new Date().getTime(),
                key: uuidv4(),
                message: `Process ${counter++} Completed `,
                action: [
                    {
                        label: 'OK'
                    }
                ]
            })
            this.setState({notifications})
        }.bind(this), 5000);
    }
}

export default SnackBar;