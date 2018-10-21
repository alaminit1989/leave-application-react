import React, { Component } from 'react';
import { CardTitle } from 'mdbreact';
import { Container, Row, Col, Card, CardBody } from 'mdbreact';
import { Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "react-datepicker/dist/react-datepicker.css";

const initialState = {
    name: '',
    leavetype: '',
    fdate: '',
    tdate: '',
    reason: ''
}

class LeaveApp extends Component {

    constructor() {
        super()

        this.myForm = React.createRef()
    }

    state = initialState

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()

        console.log(this.state)

        //this.myForm.current.reset()
        //this.setState({
        //    ...initialState
        //})
    }

    render() {
        return (
            <Form  onSubmit={ this.submitHandler }>
            <div className='py-4'>
                <Container>
                    <Row>
                        <Col sm="12">
                            <Card>
                            <CardTitle style={{background: '#3F51B5', fontSize: '21px', height: '62px', color: '#fff', paddingLeft: '23px', paddingTop: '15px', paddingBottom: '25px'}} >LEAVE APPLICATION</CardTitle>
                            <CardBody>

                                
                                    <Row>
                                        <Col xs='6'>
                                            <FormGroup>
                                                <Label for="name" className="grey-text font-weight-light">Search Employee Name</Label>
                                                <InputGroup size="sm">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="fas fa-search-plus" style={{color: '#C0C0C0'}} ></i>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input 
                                                        name='name'
                                                        id='name' 
                                                        value={ this.state.name }  
                                                        onChange={ this.changeHandler }                                                         
                                                        />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="name" className="grey-text font-weight-light">From Date</Label>
                                                <Input 
                                                    type="date" 
                                                    name="fdate" 
                                                    id="fdate"
                                                    bsSize="sm" 
                                                    placeholder="date placeholder"
                                                    value={ this.state.fdate }  
                                                    onChange={ this.changeHandler }                                                         
                                                     />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="name" className="grey-text font-weight-light">Start Time</Label>
                                                <Input 
                                                    type="time" 
                                                    name="stime" 
                                                    bsSize="sm" 
                                                    id="stime" 
                                                    placeholder="time placeholder" 
                                                    />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="name" className="grey-text font-weight-light">Reason</Label>
                                                <Input 
                                                    type="textarea" 
                                                    name="reason" 
                                                    id="reason" 
                                                    value={ this.state.reason }  
                                                    onChange={ this.changeHandler }
                                                    />
                                            </FormGroup>
                                        </Col>
                                        <Col xs='6'>
                                            <FormGroup>
                                                <label htmlFor="type" className="grey-text font-weight-light">Leave Type</label>
                                                <Input 
                                                    type="select" 
                                                    name='leavetype' 
                                                    bsSize="sm" 
                                                    id='leavetype'
                                                    value={ this.state.leavetype }  
                                                    onChange={ this.changeHandler }
                                                    >
                                                    <option value='CasualLeave'>Casual Leave</option>
                                                    <option value='EarnLeave'>Earn Leave</option>
                                                    <option value='MedicalLeave'>Medical Leave</option>
                                                    <option value='PLLeave'>PL Leave</option>
                                                </Input>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="name" className="grey-text font-weight-light">To Date</Label>
                                                <Input 
                                                    type="date" 
                                                    name="tdate" 
                                                    id="tdate" 
                                                    bsSize="sm" 
                                                    placeholder="date placeholder" 
                                                    value={ this.state.tdate }  
                                                    onChange={ this.changeHandler }
                                                    />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="name" className="grey-text font-weight-light">End Time</Label>
                                                <Input 
                                                    type="time" 
                                                    name="etime" 
                                                    bsSize="sm" 
                                                    id="etime" 
                                                    placeholder="time placeholder" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="name" className="grey-text font-weight-light">Address</Label>
                                                <Input 
                                                    type="textarea" 
                                                    name="address" 
                                                    id="address" />
                                            </FormGroup>
                                            <Button color="primary" size="sm" type='submit' className="float-right">Submit</Button>
                                        </Col>                             
                                    </Row>                                      
                                
                            </CardBody>
                            </Card>
                        </Col>  
                    </Row>
                </Container>
            </div>
            </Form>
        );
    }

}

export default LeaveApp;