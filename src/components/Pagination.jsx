import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Card from './Card';
import ProductImage from '../assets/product3.png'
import Flex from './Flex';
import axios from 'axios';



function Items({ currentItems }) {
  return (
    <Flex className='flex-wrap gap-x-8 gap-y-10'>
      {currentItems &&
        currentItems.map((item) => (
          <Card
           id={item.id}
            image={item.thumbnail}
            title={item.title}
            saleprice="300"
            regularprice="200"
            badge="new"
          />

        ))}
    </Flex>
  );
}

function Pagination({ itemsPerPage }) {

  let [allData, setAllData] = useState([])

  useEffect(() => {

    async function mydata() {
      let data = await axios.get("https://dummyjson.com/products")
      setAllData(data.data.products);
    }
    mydata()
  }, [])

  const [itemOffset, setItemOffset] = useState(0);


  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = allData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allData.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items  currentItems={currentItems} />
      <div className="flex justify-between items-end">
        <ReactPaginate
        breakLabel=""
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName="flex mt-10 "
        pageClassName="bg-black w-[55px] h-[30px] text-white inline-block mr-5 "
        pageLinkClassName="flex items-center justify-center h-full"
      />
      <h3>{itemOffset+1} - {endOffset} total: {allData.length}</h3>
      </div>
      
    </>
  );
}

export default Pagination