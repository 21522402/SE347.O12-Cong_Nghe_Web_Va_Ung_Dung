import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import baseUrl from '~/utils/baseUrl';
import ItemSearch from './ItemSearch';
import styles from './SearchPopup.module.scss';

const cx = classNames.bind(styles);


// function SearchPopup({ onMouseLeave }) {
//     return (
//         <div onMouseMove={() => onMouseLeave()} className={cx('wrapper')}>
//             <div onMouseMove={(e) => e.stopPropagation()} className={cx('inner')}>
//                 <div className={cx('separate')}>

//                 </div>

//                 <div className={cx('title')}>
//                     Sản phẩm
//                 </div>

//                 <div className={cx('list-product-filter')}>
//                     <ItemSearch />
//                     <ItemSearch />
//                     <ItemSearch />
//                     <ItemSearch />
//                 </div>
//                 <div style={{textAlign: 'center', marginTop: '16px'}}>
//                     <div className={cx('btn-view-all')}>Xem tất cả</div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SearchPopup;

function SearchPopup({ onMouseLeave , searchKey }) {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const handleSearch = async () => {
      console.log(searchKey)
      try {
        setLoading(true);
        if (searchKey && searchKey.trim() !== '') {
          const response = await axios.get(`${baseUrl}/api/products/search/${searchKey}`);
          if(response.data){
            setSearchResults(response.data.data);
          }
        } else {
          setSearchResults([]); 
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      // Call handleSearch or perform other actions on search query change
      handleSearch();
    }, [searchKey]);
  
    return (
      <div onMouseMove={() => onMouseLeave()} className={cx('wrapper')}>
        <div onMouseMove={(e) => e.stopPropagation()} className={cx('inner')}>
          <div className={cx('separate')}></div>
          <div className={cx('title')}>Sản phẩm</div>
          <div className={cx('list-product-filter')}>
            {searchResults?.map((result) => (
              <ItemSearch key={result._id} result={result} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <div className={cx('btn-view-all')}>Xem tất cả</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SearchPopup;