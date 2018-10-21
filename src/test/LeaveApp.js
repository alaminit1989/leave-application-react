import React, { Component } from 'react';
import { CardImage, CardTitle, CardText } from 'mdbreact';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody } from 'mdbreact';
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

class LeaveApp extends Component {

    state = {
        startDate: moment()
      }

    render() {
        return (
            <div className='py-3'>
                <Container>
                    <Row>
                        <Col sm="8">
                            <Card>
                            <CardBody>
                                <form>
                                <p className="h4 text-center py-3">LEAVE APPLICATION</p>
                                <div className="row grey-text">
                                    <div className='col-sm-6'>
                                        <label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light">Search Employee</label>
                                        <input type="text" className="form-control form-control-sm" />
                                        <br />
                                        <label htmlFor="defaultFormCardEmailEx" className="grey-text font-weight-light">Type</label>
                                        <input type="email" className="form-control form-control-sm" />                                        
                                        <br />
                                        <label htmlFor="defaultFormCardEmailEx" className="grey-text font-weight-light">From Date</label>
                                        <DatePicker type="text" className="form-control form-control-sm"
                                        selected={this.state.startDate}
                                        onChange={this.handleChange.bind(this)} />
                                        <br />
                                        <DatePicker className="form-control form-control-sm"
                                            selected={this.state.startDate}
                                            onChange={this.handleChange}
                                            showTimeSelect
                                            showTimeSelectOnly
                                            timeIntervals={15}
                                            dateFormat="LT"
                                            timeCaption="Time"
                                        />
                                        <br />
                                        <label htmlFor="defaultFormCardEmailEx" className="grey-text font-weight-light">Reason</label>
                                        <input type="email" className="form-control form-control-sm" />
                                    </div>
                                    <div className='col-sm-6'>
                                        <label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light">Employee Details</label>
                                        <input type="text" className="form-control form-control-sm" />
                                        <br />
                                        <label htmlFor="defaultFormCardEmailEx" className="grey-text font-weight-light">Your email</label>
                                        <input type="email" className="form-control form-control-sm" />                                        
                                        <br />
                                        <label htmlFor="defaultFormCardEmailEx" className="grey-text font-weight-light">To Date</label>
                                        <DatePicker type="text" className="form-control form-control-sm"
                                        selected={this.state.startDate}
                                        onChange={this.handleChange.bind(this)} />  
                                        <br />
                                        <label htmlFor="defaultFormCardEmailEx" className="grey-text font-weight-light">Address</label>
                                        <input type="email" className="form-control form-control-sm" />                                      
                                    </div> 


                                     
                                                                    
                                    
                                </div>
                                <div className="text-center py-4 mt-3">
                                    <Button color="cyan" type="submit">Register</Button>
                                </div>
                                </form>
                            </CardBody>
                            </Card>
                        </Col>  
                    </Row>
                </Container>
            </div>
        );
    }

    handleChange(date) {
        this.setState({
          startDate: date
        });
      }
}

export default LeaveApp;