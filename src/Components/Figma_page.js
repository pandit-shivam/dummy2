import React from 'react'
import './Figma_pageStyle.css'
import {
    Card, CardImg, CardBody,
    CardTitle, CardText, Button
} from "reactstrap"

const Figma_page = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className="mt-5" >
                <Card className='shadow p-1 mb-1 bg-white rounded'>
                    <div className='p-3'>
                        <div className='text-center'>
                            <img className='mt-4 img0099' src='https://images.pexels.com/photos/1435530/pexels-photo-1435530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width="100px" />
                        </div>
                        <div className='text-center mt-4'>
                            <h4 className='fw-bold'>Shivam pandey</h4>
                        </div>
                        <div>
                            <div className='text-center mt-4'>
                                <b className='m-0'>Student</b>
                                <p className='m-0 text-secondary'>Kelin-Jasen123</p>
                                <b className='m-0 text-success'>Add Location</b>
                            </div>
                            <div className='d-flex justify-content-center mt-4 gap-3'>
                                <div className='text-center'>
                                    <b className='fw-bold font-weight-bold'>50</b>
                                    <p className='fw-bold text-secondary'>Follower</p>
                                </div>
                                <div className="vr" style={{ height: "8vh" }}></div>
                                <div className='text-center'>
                                    <b>50</b>
                                    <p className='fw-bold text-secondary'>Follower</p>
                                </div>
                                <div className="vr" style={{ height: "8vh" }}></div>
                                <div className='text-center'>
                                    <b>50</b>
                                    <p className='fw-bold text-secondary'>Follower</p>
                                </div>
                            </div>
                            <div className='text-center mt-3'>
                                <button className='btn btn-outline-success'>View Profile</button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Figma_page