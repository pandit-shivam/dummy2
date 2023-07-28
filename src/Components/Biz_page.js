import React from 'react'
import { Card } from 'reactstrap'
import './Biz-pageStyle.css';
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { BsThreeDotsVertical, BsPerson, AiOutlineStar } from "react-icons/bs";

const Biz_page = () => {
    return (
        <div className='d-flex justify-content-center pt-5'>
            <Card>
                <div className='mt-3'>
                    <div className='d-flex px-2 fw-bold justify-content-between border-bottom'>
                        <p className=''>Liked Biz Page</p>
                        <BsThreeDotsVertical className=' ' />
                    </div>
                    <div className='d-flex border-bottom justify-content-between p-2 align-items-center'>
                        <img className='' src='https://images.pexels.com/photos/1289845/pexels-photo-1289845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width="100px" />
                        <div className='p-1'>
                            <b>Nazakat chikan</b>
                            <p className='mt-1'>clothing store  <BsPerson />15k</p>
                        </div>
                        <div>
                            <img className='px-1' src='https://cdn.iconscout.com/icon/premium/png-512-thumb/favorite-2651493-2198434.png?f=avif&w=256' width="25px"/>
                        </div>

                    </div>
                    <div className='d-flex border-bottom justify-content-between p-2 align-items-center'>
                        <img className='' src='https://images.pexels.com/photos/17583913/pexels-photo-17583913/free-photo-of-nevado-callangate-cusco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width="100px" />
                        <div className='p-1'>
                            <b>Nazakat chikan</b>
                            <p>clothing store <BsPerson />15k</p>
                        </div>
                        <div>
                            <img className='px-1' src='https://cdn.iconscout.com/icon/premium/png-512-thumb/favorite-2651493-2198434.png?f=avif&w=256' width="25px"/>
                        </div>
                    </div>
                    <div className='d-flex border-bottom justify-content-between p-2 align-items-center'>
                        <img className='' src='https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width="100px" />
                        <div className='p-1'>
                            <b>Nazakat chikan</b>
                            <p>clothing store <BsPerson />15k</p>
                        </div>
                        <div>
                            <img className='px-1' src='https://cdn.iconscout.com/icon/premium/png-512-thumb/favorite-2651493-2198434.png?f=avif&w=256' width="25px"/>
                        </div>
                    </div>
                    <div className='d-flex border-bottom justify-content-between p-2 align-items-center'>
                        <img className='' src='https://images.pexels.com/photos/17583913/pexels-photo-17583913/free-photo-of-nevado-callangate-cusco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width="100px" />
                        <div className='p-1'>
                            <b>Nazakat chikan</b>
                            <p>clothing store <BsPerson /> 15k</p>
                        </div>
                        <div>
                            <img className='px-1' src='https://cdn.iconscout.com/icon/premium/png-512-thumb/favorite-2651493-2198434.png?f=avif&w=256' width="25px"/>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Biz_page