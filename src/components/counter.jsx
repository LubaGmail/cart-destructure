import React, { Component } from 'react';

class Counter extends Component {
    styles = {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#ffc107'
    };

    render() {
        // Object destructuring
        const {counter, onIncrement, onDelete} = this.props;
        
        return (
            // React.createElement('div')
            <div>
                <div
                    style={this.getBadgeStyles()} 
                    className={this.getBadgeClasses()}>
                        { this.formatCount() } 
                </div>
               
                <button 
                    onClick={ () => onIncrement(counter) }
                    style={this.styles} 
                    className='btn btn-primary m-2'>
                        Increment
                </button>
            
                <button 
                    // onClick={this.props.onDelete}
                    onClick={ () => this.props.onDelete(counter.id)}
                    style={{fontSize: '20px', color: '#ffffb3', fontWeight: 'bold' }}
                    className='btn btn-danger m-2'>
                        Delete
                </button>
            </div>
        );
    }

    handleInrement = (num) => {
        this.setState({value: this.props.counter.value + num});
    }

    getBadgeClasses = () => {
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    getBadgeStyles = () => {
        const style1 = {
            fontSize: '20px',
            color: 'blue'
        };
        const style2 = {
            fontSize: '20px',
            color: '#ffc107'
        };
        let styles = this.props.counter.value === 0 ? style1 : style2;

        return styles;
    }

    formatCount = () => {
        const { value: count } = this.props.counter;
        return count === 0 ? 'zero' : count;
    }
}

export default Counter; 
