import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Button from '../components/Button'
import Logo from '../assets/logo.png'
import ListItem from '../components/ListItem'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link, } from 'react-router-dom'
import { TbUser } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { addbreadcrumb } from '../slices/breadCrumbSlice'
import ProductOne from '../assets/product1.png'
import { decrementaddtocart, deleteaddtocart, incrementaddtocart } from '../slices/addToCartSlice'
import { RxCross2 } from "react-icons/rx";





const Navbar = () => {
  let [Apidata,setApiData]=useState([])
  let [search,setSearch]=useState([])

  let [input,setInput]=useState('')
  let [dropdown, setDropdown] = useState(false)
  let [cartdropdown, setCartDropdown] = useState(false)
  
  let data = useSelector(state => state.cartitem.cartvalue)
  let wishList = useSelector(state => state.wishlistSlice.value)

  let handleInput=(e)=>{
   setInput(e.target.value);

    let data=Apidata.filter(item=>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
     setSearch(data);
    

  }
 
  





  let dispatch = useDispatch()

  let handleBreadCrumb = (name) => {
    dispatch(addbreadcrumb(name))


  }
  let handleIncrement=(item)=>{
    dispatch(incrementaddtocart(item))
    
  }
  let handleDecrement=(item)=>{
    dispatch(decrementaddtocart(item))
  }
  let handleDelete = (item) => {
    dispatch(deleteaddtocart(item));
  };

  
    let total=0
    data.map(item=>{
      total += item.quantity*item.price
    })

      useEffect(()=>{
            fetch("https://dummyjson.com/products")
            .then(res=>res.json())
            .then(data=>setApiData(data.products))
    
        },[])



  return (
    <nav className="pt-10 pb-4 border-[#9a9a9a4d] border">
      <Container>
        <Flex>
          <div className="w-3/12">
            <Image src={Logo} />
          </div>
          <div className="w-5/12 ">
            <ul className="flex gap-x-12 cursor-pointer">
              <Link onClick={() => handleBreadCrumb("Home")} to="/">
                <ListItem text="Home" />
              </Link>
              <Link onClick={() => handleBreadCrumb("Cart")} to="/cart">
                {" "}
                <ListItem text="Cart" />
              </Link>
              <Link onClick={() => handleBreadCrumb("Checkout")} to="/checkout">
                <ListItem text="Checkout" />
              </Link>
              <Link onClick={() => handleBreadCrumb("Contact")} to="/contact">
                <ListItem text="Contact" />
              </Link>
              <Link onClick={() => handleBreadCrumb("About")} to="/about">
                <ListItem text="About" />
              </Link>
            </ul>
          </div>
          <div className="w-4/12 pl-10 relative">
            <Flex className="items-center justify-between">
              <div className="relative w-[243px] bg-[#F5F5F5]">
                <input onChange={handleInput}
                value={input}
                  className="w-full py-1 pl-4 pr-7  placeholder:text-xs"
                  type="text"
                  placeholder="What are you looking for?"
                />

                {/* Search ber */}
               {

                 input.length > 0 &&
                search.map(item=>(
                   <div className="absolute z-50 top-8 left-0 border border-black w-full h-[400px] bg-primary1 rounded py-4 pl-2 pr-5">
                  <Link onClick={()=>setInput("")} to={`/productdetails/${item.id}`}>
                  <Flex className="justify-between items-center">
                    <Flex className="gap-x-4 my-1.5 items-center">
                      <Image className="w-6" src={item.thumbnail}/>
                      <p className="text-xs">{item.title}</p>
                    </Flex>
                     
                  </Flex>
                  </Link>
                </div>

                ))
               }



                <IoSearchOutline className="absolute top-[9px] right-2 text-base" />
              </div>
              <Link to='/wishlist'>
              <div className=" relative">

              <IoIosHeartEmpty className="text-xl " />
              <div className='flex justify-center items-center absolute top-0 -translate-y-1/2 -right-2 w-4 h-4 rounded-full bg-red-500'>
              <p className='text-xs'>{wishList.length}</p>
              </div>
              </div>
              </Link>

              <IoCartOutline
                onClick={() => setCartDropdown(!cartdropdown)}
                className="text-xl"
              />
              {cartdropdown && (
                <div className="absolute top-12 left-0 z-50 w-[400px] h-[80vh] overflow-y-scroll bg-primary1">
                  <ul className="border-b border-black pb-4 flex justify-between items-center my-5 mx-5 text-black text-xs font-semibold font-pop">
                    <li>Action:</li>
                    <li>Image:</li>
                    <li>Name:</li>
                    <li>Quantity:</li>
                    <li>SubTotal:</li>
                  </ul>
                  {data.map((item) => (
                    <ul
                      key={item.id}
                      className="border-b border-black pb-4 flex justify-between items-center my-5 mx-5 text-black text-xs font-normal font-pop"
                    >
                      <li>
                        <button
                          onClick={() => handleDelete(item)}
                          className="w-6 h-6 flex items-center justify-center rounded-md bg-gray-100 bg-red-500 hover:text-white transition"
                        >
                          <RxCross2 size={18} />
                        </button>
                      </li>
                      <li>
                        <Image className="w-[35px] h-[35px]" src={item.image} />
                      </li>
                      <li>{item.title.substring(0, 12)}...</li>
                      <li className="border border-black py-1 px-3">
                        <button
                          onClick={() => handleDecrement(item)}
                          className="mr-2"
                        >
                          -
                        </button>
                        <button>{item.quantity}</button>
                        <button
                          onClick={() => handleIncrement(item)}
                          className="ml-2"
                        >
                          +
                        </button>
                      </li>
                      <li>{item.price * item.quantity}$</li>
                    </ul>
                  ))}

                  <h1 className="absolute bottom-5 right-5 text-xl font-bold font-pop">
                    Totol: {total}$
                  </h1>

                  {data.length > 0 ?
                  <div className="flex gap-x-3 justify-center">
                      <Link to="/cart">
                        <Button className="!py-2 !px-8 text-sm" text="View Cart" />
                      </Link>
                      <Link to="/checkout">
                        <Button className="!py-2 !px-8 text-sm" text="Checkout" />
                      </Link>
                    </div>
                   :
                   <h1 className='text-center pt-10 text-2xl font-bold'>Cart Empty</h1>
                   }
                </div>
              )}

              <div
                onClick={() => setDropdown(!dropdown)}
                className="w-[25px] h-[25px] bg-[#DB4444] rounded-full flex justify-center items-center"
              >
                <TbUser className="text-white" />
              </div>
              {dropdown && (
                <div className="z-100 w-[200px] py-[20px] absolute top-full right-5 bg-red-500">
                  <ul>
                    <Link to='/login'><li>login</li></Link>
                    <Link to='/signup'><li>registration</li></Link>
                    
                  </ul>
                </div>
              )}
            </Flex>
          </div>
        </Flex>
      </Container>
    </nav>
  );
}

export default Navbar