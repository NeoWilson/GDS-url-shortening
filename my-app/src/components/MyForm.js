import React,  {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { FormControl, InputGroup } from 'react-bootstrap'

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
        
        axios.post("http://localhost:5000/url/shorten",req)

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
                <Form onSubmit = {this.handleSubmit}>
                    <Row>
                        <Form.Group className="mb-3">
                            <Col>
                                <Form.Label htmlFor="basic-url">Full URL:</Form.Label>
                            </Col>
                            <Col>
                                <InputGroup className = "mb-3">
                                    <FormControl placeholder="E.g: https://google.com" aria-label="fullUrl" onChange={this.handleChangeURL}></FormControl>
                                </InputGroup>
                            </Col>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3">
                            <Col>
                                <Form.Label htmlFor="basic-url">URL Slug:</Form.Label> 
                            </Col>
                            <Col>
                                <FormControl placeholder="E.g: google" aria-label="newSlug" onChange={this.handleChangeSlug}></FormControl>
                            </Col>
                        </Form.Group>
                    </Row>
                    <Button variant = "primary" type = "submit"> Shorten! </Button>
                    <Row>
                    <Form.Group className="mb-3">
                        <Col>
                            <Form.Label htmlFor="basic-url"><br></br>Status:</Form.Label> 
                        </Col>
                        <Col>
                            {this.state.msg ? 
                            <Form.Label htmlFor="basic-url">
                                <b>{this.state.msg}</b>
                            </Form.Label> : 
                            <Form.Label htmlFor="basic-url">
                                <b>Idle</b>
                            </Form.Label>}
                        </Col>
                    </Form.Group>
                </Row>
                </Form>
            </Container>
        )
    }
}

export default MyForm