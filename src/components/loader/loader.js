import { Component } from 'react'
import { Spinner, Modal } from "react-bootstrap";

import './loader.scss'

class Loader extends Component {
    render() {
        return (
            <Modal centered contentClassName='loading-modal' show={this.props.show}>
                <Spinner className='m-auto' variant={this.props.variant} animation="border" />
            </Modal>
        )
    }
}

export default Loader