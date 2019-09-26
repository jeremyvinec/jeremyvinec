import React from 'react'

export default class Header extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            offset: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.parallaxShift);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.parallaxShift);
    }

    parallaxShift = () => {
        this.setState({
            offset: window.pageYOffset
        });
    };

    render(){
        return(
            <header 
                className='header-background'
                style={{ backgroundPositionY: this.state.offset}}
            >
                <section
                    className='info-container'
                    style={{ bottom: this.state.offset / 2 }}
                    >
                    <h4>Développement web & app</h4>
                    <h1>Jérémy Yvinec</h1>
                    <h3>React JS & React Native</h3>
                </section>
            </header>
        )
    }
}