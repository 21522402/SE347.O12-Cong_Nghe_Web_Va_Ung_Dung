import classNames from "classnames/bind";
import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import convertDate from "~/utils/convertDate";
import convertDateTime from "~/utils/convertDate2";
import baseUrl from '~/utils/baseUrl';
import axios from "axios";
import styles from './Bill.module.scss'
import BillRow from "./BillRow";

const cx = classNames.bind(styles)

function Bill() {
    const [listBill,setListBill] = useState([])
    const [listBillOrigin,setListBillOrigin] = useState([])
    const [inputFocus, setInputFocus] = useState(false);
    const dateInputElement = useRef(null);
    const nowDate = convertDate(new Date())

    const [filter,setFilter] = useState({
        textSearch: '',
        date: null,

    }) 

    const handleMouseOverDateFilter = () => {
        dateInputElement.current?.showPicker();
    }
    const convertDate2 = (value) => {
        const tmpArr = value.split('-');
        let date = [];
        for (let i = tmpArr.length - 1; i >= 0; i--) date = [...date, tmpArr[i]];
        const res = date.join('/');
        return res;
    }
    const handleChangeDateInput = (e) => {
        let value = e.target.value;
        if (!value) {
            setFilter(prev => ({...prev, date: ''}))
            return;
        }
        const res = convertDate2(value);

        setFilter(prev => ({...prev, date: res}))

    }

    const getAllBills = async () => {
        try {
            const res = await axios.get(`${baseUrl}/api/bill/getAllBills`)
            if (res) {
                const tmp = [...res.data.data].map(item => {
                    const time = convertDateTime(item.time)
                    return {
                        ...item,
                        time,
                    }
                })
                setListBill([...tmp])
                setListBillOrigin([...tmp])
                
            }
        } catch (error) {
            
        }
    }
    useEffect(() => {
        getAllBills()
    },[])

    useEffect(() => {
        setFilter(prev => ({...prev, date: ''}))
    }, [])
    useEffect(() => {
        let tmp = [...listBillOrigin]
        if (filter.date!=='') {
            tmp = tmp.filter(item => item.time.split(' ')[0] === filter.date)
        }
        if (filter.textSearch.trim()!=='') {
            tmp = tmp.filter(item => ('#' + item._id).includes(filter.textSearch.trim())
            ||  ('#' + item.orderId).includes(filter.textSearch.trim())
            ||  (item.customerName.toLowerCase()).includes(filter.textSearch.trim().toLowerCase())
            ||  (item.phoneNumber).includes(filter.textSearch.trim()))
        }
        setListBill([...tmp])
    },[filter])
    return (

        <div className={cx('wrapper')} >
            <div className={cx('container')}>
                <div>
                    <h1>QUẢN LÝ LỊCH SỬ</h1>
                    <div style={{ color: '#05CD99' }}>Lalitpur Branch</div>
                </div>
                <div className={cx('tabpanel')}>
                    <div className={cx('tabpanel-item', 'active')}>
                        Hóa đơn
                    </div>
                    <div className={cx('tabpanel-item')}>
                        <Link to="/admin/history/import" style={{textDecoration: 'none', color: '#000'}}>Nhập hàng</Link>
                    </div>
                </div>
                <div className={cx('content-total')}>
                    <div className={cx('content')}>
                        <div className={cx('wrapper-body')}>
                            <div className={cx('toolbox')}>
                                {/* Filter */}
                                <div className={cx('filter-box')}>
                                    <div className={cx('search-box', {
                                        'input-focus': inputFocus
                                    })}>
                                        <AiOutlineSearch className={cx('icon')} />
                                        <input onChange={(e) => setFilter(prev => ({...prev,textSearch: e.target.value }))} onFocus={() => setInputFocus(true)} onBlur={() => setInputFocus(false)} type="text" placeholder="Theo mã hóa đơn, đơn hàng, tên khách hàng,..." className={cx('search-input')} />
                                        <AiFillCaretDown className={cx('icon')} />
                                    </div>


                                    {/* Loại hàng */}
                                    <div className={cx('product-type')} onClick={handleMouseOverDateFilter}>
                                        <div className={cx('function-button')}>
                                            <span className={cx('btn', 'btn-succeed')} >{filter.date || nowDate}<AiFillCaretDown style={{ marginLeft: '4px' }} /></span>
                                        </div>
                                        <input onChange={handleChangeDateInput} ref={dateInputElement} type="date" style={{ opacity: '0', top: '6px', left: '6px', right: '0', position: 'absolute' }} />

                           

                                    </div>
                                </div>

                             
                            </div>

                            <div className={cx('tableView')}>
                                <table className={cx('table')}>
                                    <thead className={cx('thead')}>
                                        <tr>
                                            {/* <th className={cx('delete')}></th> */}
                                            <th className={cx('billCode')}>Mã hóa đơn</th>
                                            <th className={cx('orderCode')}>Mã đơn hàng</th>
                                            <th className={cx('date')}>Thời gian</th>
                                            <th className={cx('payMethod')}>Phương thức thanh toán</th>
                                            <th className={cx('customerName')}>Tên khách hàng</th>
                                            <th className={cx('customerPhone')}>Số điện thoại</th>
                                            <th className={cx('totalPrice')}>Tiền thanh toán</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {listBill.map((item, index) => {
                                            return (
                                                <BillRow key={index} itemBill={item}/>
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
}

export default Bill;