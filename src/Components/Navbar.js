import React from 'react'
import './Navbarstyle.css';
import { FaBars, FaFacebook, FaLinkedin, FaTimes } from 'react-icons/fa'
// import { card22 } from './Dummy';
import pop1 from './Assets/pop1.jpg'
import imagecard1 from './Assets/imagecard1.jpg'
import star from './Assets/star.avif'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
const Navbar = () => {
    return (

        <div className='d-flex justify-content-center pt-5 main1'>
            {/* <div className='card1 shadow-lg'>
                <img src='https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' className='img1' />
                <div className='text1'>
                    <div className='text-center pt-5'>
                        <h4 className='para1'>Action Pack</h4>
                        <p className='para2'>Music Equipment</p>
                        <div className=''>
                            <img src={star} className='star' />
                        </div>
                        <b className=''>524 <span className='para4'>people Follower</span></b>
                        <div className='pt-2'>
                            <button className='btn btn-success'>follow</button>&nbsp;
                            <button className='btn btn-secondary'>click it</button>
                        </div>
                    </div>
                </div>

            </div> */}
            <Card className='cd11'
                style={{
                    width: '20rem'
                }}
            >
                <img
                    alt="Sample"
                    src="https://plus.unsplash.com/premium_photo-1684373065669-eb284566f299?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                />
                <div>
                    <img src='https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' height='90px' className='img2' />
                </div>
                <CardBody>
                    <div className='text1 pt-5'>
                        <div className='text-center'>
                            <h4 className='para1'>Action Pack</h4>
                            <p className='para2'>Music Equipment</p>
                            <div className=''>
                                <img src={star} className='star' />
                            </div>
                            <b className=''>524 <span className='para4'>people Follower</span></b>
                            <div className='pt-2'>
                                <button className='btn btn-success'>follow</button>&nbsp;
                                <button className='btn btn-secondary'>click it</button>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Card
                style={{
                    width: '20rem'
                }}
            >
                <img
                    alt="Sample"
                    src="https://plus.unsplash.com/premium_photo-1684373065669-eb284566f299?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                />
                <div>
                    <img src='https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' height='90px' className='img2' />
                </div>
                <CardBody>
                    <div className='text1 pt-5'>
                        <div className='text-center'>
                            <h4 className='para1'>Action Pack</h4>
                            <p className='para2'>Music Equipment</p>
                            <div className=''>
                                <img src={star} className='star' />
                            </div>
                            <b className=''>524 <span className='para4'>people Follower</span></b>
                            <div className='pt-2'>
                                <button className='btn btn-success'>follow</button>&nbsp;
                                <button className='btn btn-secondary'>click it</button>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Card
                style={{
                    width: '20rem'
                }}
            >
                <img
                    alt="Sample"
                    src="https://plus.unsplash.com/premium_photo-1684373065669-eb284566f299?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                />
                <div>
                    <img src='https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' height='90px' className='img2' />
                </div>
                <CardBody>
                    <div className='text1 pt-5'>
                        <div className='text-center'>
                            <h4 className='para1'>Action Pack</h4>
                            <p className='para2'>Music Equipment</p>
                            <div className=''>
                                <img src={star} className='star' />
                            </div>
                            <b className=''>524 <span className='para4'>people Follower</span></b>
                            <div className='pt-2'>
                                <button className='btn btn-success'>follow</button>&nbsp;
                                <button className='btn btn-secondary'>click it</button>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Card
                style={{
                    width: '20rem'
                }}
            >
                <img
                    alt="Sample"
                    src="https://plus.unsplash.com/premium_photo-1684373065669-eb284566f299?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                />
                <div>
                    <img src='https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' height='90px' className='img2' />
                </div>
                <CardBody>
                    <div className='text1 pt-5'>
                        <div className='text-center'>
                            <h4 className='para1'>Action Pack</h4>
                            <p className='para2'>Music Equipment</p>
                            <div className=''>
                                <img src={star} className='star' />
                            </div>
                            <b className=''>524 <span className='para4'>people Follower</span></b>
                            <div className='pt-2'>
                                <button className='btn btn-success'>follow</button>&nbsp;
                                <button className='btn btn-secondary'>click it</button>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default Navbar