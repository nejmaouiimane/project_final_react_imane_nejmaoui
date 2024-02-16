import React, { useState } from 'react';
import pic from '../../../assets/img/item-01.jpg'
import { Dropdown } from 'flowbite-react';
import item6 from "../../../assets/img/item-02.jpg"
import item2 from "../../../assets/img/product-detail-03.jpg"
import item3 from "../../../assets/img/product-detail-02.jpg"
import item4 from "../../../assets/img/product-detail-01.jpg"
import item5 from "../../../assets/img/gallery-13.jpg"
import item from "../../../assets/img/item-11.jpg"
import item1 from "../../../assets/img/item-01.jpg"
import item7 from "../../../assets/img/item-03.jpg"
import item8 from "../../../assets/img/item-04.jpg"
import item9 from "../../../assets/img/item-05.jpg"
import item10 from "../../../assets/img/item-06.jpg"
import item11 from "../../../assets/img/item-07.jpg"
import item12 from "../../../assets/img/item-08.jpg"
import galery from "../../../assets/img/gallery-08.jpg"
import galery1 from "../../../assets/img/gallery-07.jpg"
import galery2 from "../../../assets/img/gallery-04.jpg"
import galery3 from "../../../assets/img/gallery-05.jpg"
import galery4 from "../../../assets/img/gallery-03.jpg"
export const ShopSection = () => {
    const [myProduct, setProduct] = useState([
        {
            id: "1",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            Catégories: "NEW",
            Brand: " w i s s ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",
            logDescrition: "redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",
            image: item,
            quantity: 1
        }, {
            id: "2",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            Catégories: "SALE",
            Brand: " w i s s ",
            logDescrition: "redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj ",
            image: item2,
            quantity: 1
        }, {
            id: "3",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            Catégories: "Men",
            logDescrition: "redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",
            Brand: " w i s s ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj ",
            image: item3,
            quantity: 5
        }, {
            id: "4",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            Catégories: "   OLD",
            logDescrition: "redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",
            Brand: " w i s s ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj ",
            image: item4,
            quantity: 3
        }, {
            id: "5",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            Catégories: "NEW",
            logDescrition: "redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",
            Brand: " w i s s ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj ",
            image: item5,
            quantity: 2
        },
        {
            id: "6",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            logDescrition: "redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",
            Catégories: "SALE",
            Brand: " w i s s ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj ",
            image: item6,
            quantity: 4
        }, {
            id: "7",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            logDescrition: "redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",
            Catégories: "NEW",
            Brand: " w i s s ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj ",
            image: item1,
            quantity: 7
        }, {
            id: "8",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            logDescrition: "redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",
            Catégories: "OLD",
            Brand: " w i s s ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj ",
            image: item7,
            quantity: 4
        }, {
            id: "9",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            logDescrition: "redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",
            Catégories: "OLD",
            Brand: " w i s s ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj ",
            image: item8,
            quantity: 1
        }, {
            id: "10",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            logDescrition: "redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",
            Catégories: "Best seller",
            Brand: " w i s s ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj ",
            image: galery,
            quantity: 1
        }, {
            id: "11",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            logDescrition: "redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",
            Catégories: "OLD",
            Brand: " w i s s ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj ",
            image: galery1,
            quantity: 2
        },
        {
            id: "12",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            logDescrition: "redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",
            Catégories: "OLD",
            Brand: " w i s s ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj ",
            image: galery2,
            quantity: 3
        },
        {
            id: "13",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            logDescrition: "redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",
            Catégories: "SALE",
            Brand: " w i s s ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj ",
            image: galery3,
            quantity: 6
        },
        {
            id: "14",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            logDescrition: "redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",
            Catégories: "SALE",
            Brand: " w i s s ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj ",
            image: galery4,
            quantity: 5
        },
        {
            id: "15",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            logDescrition: "redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",
            Catégories: "Best Seller",
            Brand: " w i s s ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj ",
            image: galery4,
            quantity: 10
        }
    ])

    return (
        <>
            <div className='bg-heading  w-[100%] h-[30vh] bg-center flex justify-center items-center'>
                <h1 className='text-white font-bold text-3xl text-center '>PRODUCTS</h1>
            </div>
            <div className='flex lg:flex-row flex-col px-40 py-12'>
                {/*side bar  */}
                <div className=' h-fit w-[17vw] flex  flex-col p-7'>
                    <div className='py-7'>
                        <h1 className='font-bold text-xl'>Categories</h1>
                        <p>Best Seller (8 items)</p>
                        <p>Featured (8 items)</p>
                        <p>Men (8 items)</p>
                        <p>Women (8 items)</p>
                    </div>
                    <div className='py-7'>
                        <h1 className='font-bold text-xl'>color</h1>
                        <div><input type="checkbox" name="" id="" /> <span>black</span></div>
                        <div><input type="checkbox" name="" id="" /> <span>grey</span></div>
                        <div><input type="checkbox" name="" id="" /> <span>red</span></div>

                    </div>
                    <div className='py-7' >
                        <h1 className='font-bold text-xl'>price</h1>
                        <div><input type="checkbox" name="" id="" /> <span>0-20</span></div>
                        <div><input type="checkbox" name="" id="" /> <span>20-40</span></div>

                    </div>
                    <div>
                        <h1 className='font-bold text-xl'>size</h1>
                        <div><input type="checkbox" name="" id="" /> <span>L</span></div>
                        <div><input type="checkbox" name="" id="" /> <span>M</span></div>
                        <div><input type="checkbox" name="" id="" /> <span>S</span></div>
                        <div><input type="checkbox" name="" id="" /> <span>XL</span></div>
                    </div>
                    <br />
                    <input type="text" placeholder='  Search...' />
                </div>
                {/* end sidebar */}
                <div className=' h-fit w-[70vw]'>
                    <div className=' h-[10vh] flex lg:flex-row flex-col justify-between'>
                        {/*  */}
                        <div className=' flex lg:flex-row flex-col gap-5 '>
                            <div className='bg-white h-[6vh] w-[10vw] border-2 border-slate-400 text-center'>
                                <Dropdown label="Featured" inline>
                                    <Dropdown.Item>Best Selling</Dropdown.Item>
                                    <Dropdown.Item>Price,Low to high </Dropdown.Item>
                                    <Dropdown.Item>Price,High to low</Dropdown.Item>
                                    <Dropdown.Item>Date</Dropdown.Item>
                                </Dropdown>
                            </div>
                            <div className='bg-white h-[6vh] w-[10vw] border-2 border-slate-400 text-center'>
                                <Dropdown label="All" inline>
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
                    <div className='flex flex-wrap gap-5 w-[80%]'>
                        
                    {
                        myProduct.map((element, index) =>

                            <div className=' h-fit w-[20vw] group flex flex-col'>
                                <div class="group w-[20vw] relative cursor-pointer items-center justify-center overflow-hidden transition-shadow ">
                                    <div class="h-96 w-[20vw]">
                                        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={element.image} alt="" />
                                    </div>
                                    <div class=" w-[20vw] absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                    <div key={element.id} class=" w-[20vw] absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[40%]">
                                        <button key={element.id} class="rounded-full  py-2 px-3.5 font-com text-sm capitalize shadow shadow-black/60 bg-gray-100 text-gray-900 hover:bg-pink-300 hover:text-white duration-300"
                                        >ADD TO CART</button>
                                    </div>
                                </div>

                                <h1>{element.price}</h1>
                            </div>
                        )
                    }

                    </div>
                </div>
            </div>
        </>
    );
};

