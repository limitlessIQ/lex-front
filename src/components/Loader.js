import React from 'react'
import Spinner from 'react-loader-spinner'
import '../styles/Loader.css'

export class Loader extends React.Component {
    constructor(props){
        super(props)

        this.loaderContainer = React.createRef()
    }

    componentDidMount() {
        this.removeLoader()
    }

    // remove after 3s of display
    removeLoader = () => {
        setTimeout(() => {
            this.loaderContainer.current.style.display = 'none'
        }, 3000);
    }

    render(){
        return (
            <div ref={this.loaderContainer} className="loaderContainer">
                <Spinner color='black' type="TailSpin" height='30px'></Spinner>
            </div>
        )
    }

    
}

export default Loader
