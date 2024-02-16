import React from 'react';

import { Dropdown } from 'flowbite-react';
export const ShopSection = () => {
    return (
        <>
            <div className='bg-heading  w-[100%] h-[30vh] bg-center flex justify-center items-center'>
                <h1 className='text-white font-bold text-3xl text-center '>PRODUCTS</h1>
            </div>
            <div className='flex lg:flex-row flex-col px-60 py-12'>
                <div className='bg-red-200 h-[110vh] w-[15vw]'></div>
                <div className='bg-yellow-100 h-[110vh] w-[70vw]'>
                    <div className='bg-blue-300 h-[10vh] flex lg:flex-row flex-col justify-between'>
                        {/*  */}
                        <div className=' flex lg:flex-row flex-col gap-5 '>
                            <div className='bg-white h-[6vh] w-[10vw] border-2 border-slate-400 text-center'>
                            <Dropdown  label="Featured" inline>
                                <Dropdown.Item>Best Selling</Dropdown.Item>
                                <Dropdown.Item>Price,Low to high </Dropdown.Item>
                                <Dropdown.Item>Price,High to low</Dropdown.Item>
                                <Dropdown.Item>Date</Dropdown.Item>
                            </Dropdown>
                            </div>
                            <div className='bg-white h-[6vh] w-[10vw] border-2 border-slate-400 text-center'>
                            <Dropdown  label="All" inline>
                                <Dropdown.Item>10</Dropdown.Item>
                                <Dropdown.Item>20</Dropdown.Item>
                                <Dropdown.Item>30</Dropdown.Item>
                            </Dropdown>
                            </div>
                        </div>
                        {/* end */}
                        <div>
                            <p>Showing 1 to 6 of 8 items</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

