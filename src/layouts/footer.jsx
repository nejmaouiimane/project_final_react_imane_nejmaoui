import React from 'react';
import { Link } from 'react-router-dom';

import { Footer } from 'flowbite-react';
import { BsFacebook,  BsGoogle,  BsInstagram, BsPinterest, BsTwitter } from 'react-icons/bs';

export const TheFooter = () => {
    return (    
        <>
            <Footer className='bg-slate-100'>
                <div className="w-full">
                    <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-5">
                        <div className='flex lg:flex-col flex-col lg:w-[18vw] w-[100vw]'>
                            <Footer.Title className='text-black' title="GET IN TOUCH" />
                            <Footer.LinkGroup >
                                    <p >Any question ? Let us know in store at 8th floor,379 Husdon St, </p>
                                    <p>New York, NY 10018 or call us on (+1) 96 716 6879</p>
                                <div className="mt-4 flex space-x-2 sm:mt-0 ">
                                    <Footer.Icon href="#" icon={BsFacebook} />
                                    <Footer.Icon href="#" icon={BsTwitter} />
                                    <Footer.Icon href="#" icon={BsPinterest} />
                                    <Footer.Icon href="#" icon={BsGoogle} />
                                    <Footer.Icon href="#" icon={BsInstagram} />
                                </div>
                            </Footer.LinkGroup>
                        </div>
                        <div >
                            <Footer.Title className='text-black' title="CATEGORIES" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Men</Footer.Link>
                                <Footer.Link href="#">Women</Footer.Link>
                                <Footer.Link href="#">Dresses</Footer.Link>
                                <Footer.Link href="#">Sunglasses</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-black' title="LINKS" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Search</Footer.Link>
                                <Footer.Link href="#">About Us</Footer.Link>
                                <Footer.Link href="#">Contact Us</Footer.Link>
                                <Footer.Link href="#">Returns</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-black' title="HELP" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Track Ord</Footer.Link>
                                <Footer.Link href="#">Returns</Footer.Link>
                                <Footer.Link href="#">Shipping</Footer.Link>
                                <Footer.Link href="#">FAQs</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-black' title="NEWSLETTER" />
                            <Footer.LinkGroup col>
                            <input className='bg-slate-100 border-b-4 border-0 border-black' placeholder=' Email Adress' type="text" />
                            <button className='bg-black text-white w-[150px] py-3 rounded-2xl'>SUBSCRIBE</button>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                    <div className="w-full bg-slate-100 text-center ">
                        <Footer.Copyright href="#" by="Shopify Theme Developed by MassTechnologist All right reserved" year={2022} />
                    </div>
                </div>
            </Footer>

        </>
    );
};


