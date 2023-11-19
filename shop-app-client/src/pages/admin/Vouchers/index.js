import { BiSearch, BiTrash } from 'react-icons/bi';
import styles from './style.module.scss'
import classNames from 'classnames/bind';
import Select from 'react-select';
import { BsEye } from 'react-icons/bs';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { CustomeButton, Modal } from '~/components';
import { MdAdd } from 'react-icons/md';
import AddVoucher from './AddVoucher';
import EditVoucher from './EditVoucher';
import ViewVoucher from './ViewVoucher';
const cx = classNames.bind(styles);
function Vouchers() {
    const cbb = [
        { value: 'All', label: 'All' },
        { value: 'Expired', label: 'Expired' },
        { value: 'UnExpired', label: 'UnExpired' }
    ]
    const cusList = [
        {
            voucherCode: 'UNDERW3TR',
            price: 20,
            amount: 100,
            minPrice:500000,
            isPercent:true,
            voucherImage:'https://mcdn.coolmate.me/image/October2023/mceclip2_40.jpg',
            description:'Khuyen mai dat biet nhan ngay quoc te phu nu viet nam. Ap dung ngay de tru truc tiep vao don hang',
            startDate: '20/10/2022',
            expiredDate: '20/10/2022',
            status: 'Expired'
        },
        {
            voucherCode:'WOMENDAY8TR',
            price: 90000,
            amount: 100,
            minPrice:500000,
            isPercent:false,
            voucherImage:'https://mcdn.coolmate.me/image/October2023/mceclip2_40.jpg',
            description:'Khuyen mai dat biet nhan ngay quoc te phu nu viet nam. Ap dung ngay de tru truc tiep vao don hang',
            startDate: '20/10/2022',
            expiredDate: '30/10/2023',
            status: 'UnExpired'
        },
        {
            voucherCode: 'UNDERW3TR',
            price: 70000,
            amount: 100,
            minPrice:500000,
            isPercent:false,
            voucherImage:'https://mcdn.coolmate.me/image/October2023/mceclip2_40.jpg',
            description:'Khuyen mai dat biet nhan ngay quoc te phu nu viet nam. Ap dung ngay de tru truc tiep vao don hang',
            startDate: '20/10/2022',
            expiredDate: '20/10/2022',
            status: 'Expired'
        },
        {
            voucherCode: 'UNDERW3TR',
            price: 70000,
            amount: 100,
            minPrice:500000,
            isPercent:false,
            voucherImage:'https://mcdn.coolmate.me/image/October2023/mceclip2_40.jpg',
            description:'Khuyen mai dat biet nhan ngay quoc te phu nu viet nam. Ap dung ngay de tru truc tiep vao don hang',
            startDate: '20/10/2022',
            expiredDate: '20/10/2022',
            status: 'UnExpired'
        },
        {
            voucherCode: 'UNDERW3TR',
            price: 70000,
            amount: 100,
            minPrice:500000,
            isPercent:false,
            voucherImage:'https://mcdn.coolmate.me/image/October2023/mceclip2_40.jpg',
            description:'Khuyen mai dat biet nhan ngay quoc te phu nu viet nam. Ap dung ngay de tru truc tiep vao don hang',
            startDate: '20/10/2022',
            expiredDate: '20/10/2022',
            status: 'Expired'
        },
        {
            voucherCode: 'UNDERW3TR',
            price: 70000,
            amount: 100,
            minPrice:500000,
            isPercent:false,
            voucherImage:'https://mcdn.coolmate.me/image/October2023/mceclip2_40.jpg',
            description:'Khuyen mai dat biet nhan ngay quoc te phu nu viet nam. Ap dung ngay de tru truc tiep vao don hang',
            startDate: '20/10/2022',
            expiredDate: '20/10/2022',
            status: 'Expired'
        },
        {
            voucherCode: 'UNDERW3TR',
            price: 70000,
            amount: 100,
            minPrice:500000,
            isPercent:false,
            voucherImage:'https://mcdn.coolmate.me/image/October2023/mceclip2_40.jpg',
            description:'Khuyen mai dat biet nhan ngay quoc te phu nu viet nam. Ap dung ngay de tru truc tiep vao don hang',
            startDate: '20/10/2022',
            expiredDate: '20/10/2022',
            status: 'Expired'
        },
        {
            voucherCode: 'UNDERW3TR',
            price: 70000,
            amount: 100,
            minPrice:500000,
            isPercent:false,
            voucherImage:'https://mcdn.coolmate.me/image/October2023/mceclip2_40.jpg',
            description:'Khuyen mai dat biet nhan ngay quoc te phu nu viet nam. Ap dung ngay de tru truc tiep vao don hang',
            startDate: '20/10/2022',
            expiredDate: '20/10/2022',
            status: 'UnExpired'
        },
        {
            voucherCode: 'UNDERW3TR',
            price: 70000,
            amount: 100,
            minPrice:500000,
            isPercent:false,
            voucherImage:'https://mcdn.coolmate.me/image/October2023/mceclip2_40.jpg',
            description:'Khuyen mai dat biet nhan ngay quoc te phu nu viet nam. Ap dung ngay de tru truc tiep vao don hang',
            startDate: '20/10/2022',
            expiredDate: '20/10/2022',
            status: 'Expired'
        },
        {
            voucherCode: 'UNDERW3TR',
            price: 70000,
            amount: 100,
            minPrice:500000,
            isPercent:false,
            voucherImage:'https://mcdn.coolmate.me/image/October2023/mceclip2_40.jpg',
            description:'Khuyen mai dat biet nhan ngay quoc te phu nu viet nam. Ap dung ngay de tru truc tiep vao don hang',
            startDate: '20/10/2022',
            expiredDate: '20/10/2022',
            status: 'UnExpired'
        },
        {
            voucherCode: 'UNDERW3TR',
            price: 70000,
            amount: 100,
            minPrice:500000,
            isPercent:false,
            voucherImage:'https://mcdn.coolmate.me/image/October2023/mceclip2_40.jpg',
            description:'Khuyen mai dat biet nhan ngay quoc te phu nu viet nam. Ap dung ngay de tru truc tiep vao don hang',
            startDate: '20/10/2022',
            expiredDate: '20/10/2022',
            status: 'Expired'
        },
        {
            voucherCode: 'UNDERW3TR',
            price: 70000,
            amount: 100,
            minPrice:500000,
            isPercent:false,
            voucherImage:'https://mcdn.coolmate.me/image/October2023/mceclip2_40.jpg',
            description:'Khuyen mai dat biet nhan ngay quoc te phu nu viet nam. Ap dung ngay de tru truc tiep vao don hang',
            startDate: '20/10/2022',
            expiredDate: '20/10/2022',
            status: 'UnExpired'
        },
    ]
    const [currentPage, setCurrentPage] = useState(1);
    const recordPerPages = 10;
    const lastIndex = currentPage * recordPerPages;
    const firstIndex = lastIndex - recordPerPages;
    const records = cusList.slice(firstIndex, lastIndex);
    const npage = Math.ceil(cusList.length / recordPerPages);
    const numbers = [...Array(npage + 1).keys()].slice(1);


    const [modalAddVoucher, setModalAddVoucher] = useState(false)
    const [modalEditVoucher, setModalEditVoucher] = useState(false)
    const [modalViewVoucher, setModalViewVoucher] = useState(false)
    const [seletedItem, setSetlectedItem] = useState(null)


    return (
        <div className={cx('wrapper')} style={{fontSize:'14px'}}>
            <div className={cx('top-navbar')}>
            </div>
            <div className={cx('container')}>
                <div>
                    <h1>Manage Vouchers!</h1>
                    <div style={{ color: '#05CD99' }}>Lalitpur Branch</div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('header-content')}>
                        <div style={{ display: 'flex' }}>
                            <form className={cx('search-field')}>
                                <BiSearch fontSize={20} style={{ position: 'absolute', top: '0', left: 0, marginTop: '20px', marginLeft: '18px' }} />
                                <input type='text' name='searchField' id='searchField' className={cx('search-input')} placeholder='Search' />
                            </form>
                            <Select options={cbb}
                                defaultValue={cbb[0]}
                                className={cx('combobox')} />
                        </div>
                        <div  onClick={()=>setModalAddVoucher(true)}>
                            <CustomeButton className={cx('cus-button')} title={'Add Voucher'} icon={<MdAdd fontSize={20} />} isLeft={true} bgHover={'#2f5acf'} textColorHover={'white'} containStyles={{ width: '150px', backgroundColor: 'black', color: 'white', borderRadius: '8px', padding: '22px 10px', marginTop: '6px' }} />
                        </div>
                    </div>
                    <div style={{ padding: '10px 32px 40px', width: '100%', minHeight: '620px' }}>
                        <table style={{ width: '100%', borderRadius: '10px', borderColor: 'transparent', border: 'none', position: 'relative' }}>
                            <thead style={{ width: '100%', borderRadius: '10px', borderColor: 'transparent', border: 'none', }} >
                                <tr style={{ width: '100%', backgroundColor: '#a4c4e9', color: 'black', borderRadius: '10px' }}>
                                    <th className={cx('col-tbl')} style={{ paddingLeft: '20px' }}>VoucherID</th>
                                    <th className={cx('col-tbl')}>Voucher Code</th>
                                    <th className={cx('col-tbl')} >Price</th>
                                    <th className={cx('col-tbl')}>Amount</th>
                                    <th className={cx('col-tbl')}>Start Date</th>
                                    <th className={cx('col-tbl')}>Expired Date</th>
                                    <th className={cx('col-tbl')}>Status</th>
                                    <th className={cx('col-tbl')}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    records.map((item, index) => {
                                        return (
                                            <tr key={index} className={cx('row-item')}>
                                                <td style={{ paddingLeft: '34px', width: '12%' }}>KM{index + (currentPage - 1) * recordPerPages + 1}</td>
                                                <td style={{ width: '20%' }}>{item.voucherCode}</td>
                                                <td style={{ width: '13%' }}>{item.isPercent ? `${item.price} %` : `${item.price} VND`} </td>
                                                <td style={{ width: '10%' }}>{item.amount}</td>
                                                <td style={{ width: '10%' }}>{item.startDate}</td>
                                                <td style={{ width: '12%' }}>{item.expiredDate}</td>
                                                <td style={{ width: '11%' }}>
                                                    <div className={cx({ 'expired-item': item.status === 'Expired' }, { 'unExpired-item': item.status === 'UnExpired' })}>
                                                        {item.status}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div style={{ display: 'flex' }}>
                                                        <button style={{ marginRight: '4px' }} onClick={()=>{setModalEditVoucher(true); setSetlectedItem(item)}}>
                                                            <AiOutlineEdit fontSize={20} color='blue' />
                                                        </button>
                                                        <button style={{ marginRight: '4px' }} onClick={()=>{setModalViewVoucher(true); setSetlectedItem(item)}}>
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
            <footer className={cx("sticky-footer")} style={{zIndex:10}}>
                <div className={cx("container")}>
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2023</span>
                    </div>
                </div>
            </footer>
            <Modal visible={modalAddVoucher} setModal={setModalAddVoucher}>
                <AddVoucher />
            </Modal>
            <Modal visible={modalEditVoucher} setModal={setModalEditVoucher}>
                <EditVoucher item={seletedItem}/>
            </Modal>
            <Modal visible={modalViewVoucher} setModal={setModalViewVoucher}>
                <ViewVoucher item={seletedItem}/>
            </Modal>
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
export default Vouchers;