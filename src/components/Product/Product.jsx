import {MdFavoriteBorder} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiShoppingBag} from 'react-icons/bi'
import styled from "styled-components";
import {Link} from 'react-router-dom'
import './Product.css'

const Product = ({item}) => {
  return (
    <div className='pro-container'>      
      <div className='circle' />
      <img src={item.img} alt="" style={{ height: '90%', zIndex: 2 }} className='cat-pro'/>
      <div className='pro-info'>
        <div className='pro-icon'>
          <BiShoppingBag/>          
          </div>
        <div className='pro-icon'>
        <Link to={`/product/${item._id}`}>
          <AiOutlineSearch />
          </Link>          
          </div>
        <div className='pro-icon'>
           <MdFavoriteBorder/>
        </div>
      </div>
    </div>
  );
};

export default Product;
