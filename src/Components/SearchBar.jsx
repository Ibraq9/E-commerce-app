import React, { useContext } from 'react';
import { shopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';

const SearchBar = () => {

    const {showSeach,setShowSearch,search,setSearch} = useContext(shopContext);

    const closeClicked =()=>{
        setShowSearch(false);
        setSearch("");
    }

    return showSeach? (
        <div className='flex gap-3 justify-center items-center w-full my-8'>
            <div className='flex w-3/5 gap-5 h-8 px-5 rounded-2xl' style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                <input value={search} onChange={(e)=>setSearch(e.target.value)} style={{outline:"none"}} className='w-full px-3' placeholder='عايز ايه انت بس قولي ؟' />
                <img className='w-6 h-6 cursor-pointer' src={assets.search_icon} alt='Search' />
            </div>
            <img onClick={closeClicked} src={assets.cross_icon} alt='close_serac_bar_icon' className='w-4 cursor-pointer'/>
        </div>
    ) : null
}

export default SearchBar
