import { BiSearch, BiTrash } from 'react-icons/bi';
import styles from './style.module.scss'
import classNames from 'classnames/bind';
import Select from 'react-select';
import { BsEye } from 'react-icons/bs';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const cbb = [
    { value: 'All', label: 'All' },
    { value: 'Last 3 months', label: '3 tháng cuối' },
    { value: 'Last 6 months', label: '6 tháng cuối' }

]
const cusList = [
    {
        cusName: 'Nguyen Van Phat',
        address: 'Binh Son, Quang Ngai',
        registerDate: '20/10/2022',
        totalAmount: 10000000,
    },
    {
        cusName: 'Nguyen Van Phat',
        address: 'Binh Son, Quang Ngai',
        registerDate: '20/10/2022',
        totalAmount: 10000000,
    },
    {
        cusName: 'Nguyen Van Phat',
        address: 'Binh Son, Quang Ngai',
        registerDate: '20/10/2022',
        totalAmount: 10000000,
    },
    {
        cusName: 'Nguyen Van Phat',
        address: 'Binh Son, Quang Ngai',
        registerDate: '20/10/2022',
        totalAmount: 10000000,
    },
    {
        cusName: 'Nguyen Van Phat',
        address: 'Binh Son, Quang Ngai',
        registerDate: '20/10/2022',
        totalAmount: 10000000,
    },
    {
        cusName: 'Nguyen Van Phat',
        address: 'Binh Son, Quang Ngai',
        registerDate: '20/10/2022',
        totalAmount: 10000000,
    },
    {
        cusName: 'Nguyen Van Phat',
        address: 'Binh Son, Quang Ngai',
        registerDate: '20/10/2022',
        totalAmount: 10000000,
    },
    {
        cusName: 'Nguyen Van Phat',
        address: 'Binh Son, Quang Ngai',
        registerDate: '20/10/2022',
        totalAmount: 10000000,
    },
    {
        cusName: 'Nguyen Van Phat',
        address: 'Binh Son, Quang Ngai',
        registerDate: '20/10/2022',
        totalAmount: 10000000,
    },
    {
        cusName: 'Nguyen Van Phat',
        address: 'Binh Son, Quang Ngai',
        registerDate: '20/10/2022',
        totalAmount: 10000000,
    },
    {
        cusName: 'Nguyen Van Phat',
        address: 'Binh Son, Quang Ngai',
        registerDate: '20/10/2022',
        totalAmount: 10000000,
    },
    {
        cusName: 'Nguyen Van Phat',
        address: 'Binh Son, Quang Ngai',
        registerDate: '20/10/2022',
        totalAmount: 10000000,
    },
]
function CustomerManage() {
    const [currentPage, setCurrentPage] = useState(1);
    const recordPerPages = 10;
    const lastIndex = currentPage * recordPerPages;
    const firstIndex = lastIndex - recordPerPages;
    const records = cusList.slice(firstIndex, lastIndex);
    const npage = Math.ceil(cusList.length / recordPerPages);
    const numbers = [...Array(npage + 1).keys()].slice(1);


    return (
        <div className={cx('wrapper')} style={{fontSize:'14px'}}>
            <div className={cx('top-navbar')}>
            </div>
            <div className={cx('container')}>
                <div>
                    <h1>Manage Customer!</h1>
                    <div style={{color:'#05CD99'}}>Lalitpur Branch</div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('header-content')}>
                        <form className={cx('search-field')}>
                            <BiSearch fontSize={20} style={{ position: 'absolute', top: '0', left: 0, marginTop: '20px', marginLeft: '18px' }} />
                            <input type='text' name='searchField' id='searchField' className={cx('search-input')} placeholder='Tìm kiếm' />
                        </form>
                        <Select options={cbb} 
                                
                                defaultValue={cbb[0]}
                                className={cx('combobox')} />
                    </div>
                    <div style={{ padding: '10px 32px 40px', width: '100%', minHeight:'620px' }}>
                        <table style={{ width: '100%', borderRadius: '10px', borderColor: 'transparent', border: 'none', position: 'relative' }}>
                            <thead style={{ width: '100%', borderRadius: '10px', borderColor: 'transparent', border: 'none', }} >
                                <tr style={{ width: '100%', backgroundColor: '#a4c4e9', color: 'black', borderRadius: '10px' }}>
                                    <th className={cx('col-tbl')} style={{ paddingLeft: '20px' }}>CusID</th>
                                    <th className={cx('col-tbl')}>Tên khách hàng</th>
                                    <th className={cx('col-tbl')}>Địa chỉ</th>
                                    <th className={cx('col-tbl')}>Ngày đăng ký</th>
                                    <th className={cx('col-tbl')}>Tổng giao dịch</th>
                                    <th className={cx('col-tbl')}>Tác vụ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    records.map((item, index) => {
                                        return (
                                            <tr key={index} className={cx('row-item')}>
                                                <td style={{ paddingLeft: '25px', width: '10%' }}>KH{index + (currentPage-1)*recordPerPages+1}</td>
                                                <td style={{ width: '25%' }}>{item.cusName}</td>
                                                <td style={{ width: '25%' }}>{item.address}</td>
                                                <td style={{ width: '15%' }}>{item.registerDate}</td>
                                                <td style={{ width: '15%' }}>{item.totalAmount}</td>
                                                <td>
                                                    <div style={{ display: 'flex' }}>
                                                        <button style={{ marginRight: '4px' }}>
                                                            <BsEye fontSize={20} color='blue' />
                                                        </button>
                                                        <button>
                                                            <BiTrash fontSize={20} color='red' />
                                                        </button>
                                                    </div>
                                                </td>

                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div style={{ display: 'flex', padding: '0 32px 20px', justifyContent: 'space-between' }}>
                        <div>Showing: <span>{recordPerPages}</span> of {cusList.length} entries</div>
                        <nav >
                            <ul className={cx('pagination')} >
                                <li className={cx('page-item')}>
                                    <Link href='#' onClick={prePage}
                                        className={cx('page-link')}>Prev</Link>
                                </li>
                                {
                                    numbers.map((item, index) => (
                                        <li key={index} className={cx(`page-item`, { 'active': currentPage === item })}>
                                            <Link href='#' onClick={() => changeCPage(item)}
                                                className={cx('page-link')}>{item}</Link>
                                        </li>
                                    ))
                                }
                                <li className={cx('page-item')}>
                                    <Link href='#' onClick={nextPage}
                                        className={cx('page-link')}>Next</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    
                </div>
            </div>
            <footer className={cx("sticky-footer")}>
                <div className={cx("container")}>
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2023</span>
                    </div>
                </div>
            </footer>
        </div>
    );
    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    function changeCPage(id) {
        setCurrentPage(id)
    }
    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }
}
export default CustomerManage;