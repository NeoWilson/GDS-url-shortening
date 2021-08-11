import React,  {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { FormControl } from 'react-bootstrap'

class MyForm extends Component{
    state = {
        fullUrl: '',
        newSlug: '',
        msg: ''
    }

    handleChangeURL = event =>{
        this.setState({
            fullUrl: event.target.value
        })
    }

    handleChangeSlug = event =>{
        this.setState({
            newSlug: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const req = {
            fullUrl: this.state.fullUrl,
            newSlug: this.state.newSlug
        }
        
        axios.post("https://asia-southeast1-gds-url-shortening.cloudfunctions.net/app/url/shorten",req)

        .then(res=>{
            console.log(res)
            console.log(res.status)
            console.log(res.data)
            this.setState({
                msg: res.data
            })
        })
        .catch(err=>{
            console.log(err)
            this.setState({
                msg: err.response.data
            })
        })
    }

    render(){
        return(
            <Container>
                <Row className="justify-content-md-center">
                    <Form onSubmit = {this.handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="basic-url">Full URL:</Form.Label>
                            <FormControl placeholder="E.g: https://google.com" aria-label="fullUrl" onChange={this.handleChangeURL}></FormControl>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="basic-url">URL Slug:</Form.Label>
                            <FormControl placeholder="E.g: google" aria-label="newSlug" onChange={this.handleChangeSlug}></FormControl>
                        </Form.Group>

                        <Button variant = "primary" type = "submit"> Shorten! </Button>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="basic-url"><br></br>Status:</Form.Label>
                        </Form.Group>
                    </Form>
                </Row>
                <Row className="justify-content-md-center">
                    <Form>
                        <Form.Group className="mb-3">
                            {this.state.msg ? <Form.Label htmlFor="basic-url">
                                    <b>{this.state.msg}</b></Form.Label> : 
                                <Form.Label htmlFor="basic-url">
                                    <b>Idle</b>
                                </Form.Label>}
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
        )
    }
}

export default MyForm