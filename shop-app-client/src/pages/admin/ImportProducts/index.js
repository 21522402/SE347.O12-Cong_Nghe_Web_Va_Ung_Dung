import classNames from "classnames/bind";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineSearch, AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";


import { useState } from "react";



import styles from './ImportProducts.module.scss'
import DropDownImport from "./DropDownImport";
import ImportProductRow from "./ImportProductRow";
import Modal from "./Modal";

const cx = classNames.bind(styles)

function ImportProducts() {

    const [inputFocus, setInputFocus] = useState(false);
    const [openModelImport, setOpenModalImport] = useState(false)
    const [product, setProduct] = useState(null);
    const [showContract,setShowContract] = useState(true)

    const listSearchProducts = [
        {
            productName: 'Áo vest nữ màu hồng chìm',
            productId: 'NU001',
            exportPrice: 870000,
            quantity: 170,
            productImage: 'https://cdn-app.kiotviet.vn/sample/fashion/25.png'
        },
        {
            productName: 'Áo vest nữ màu hồng chìm',
            productId: 'NU001',
            exportPrice: 870000,
            quantity: 170,
            productImage: 'https://cdn-app.kiotviet.vn/sample/fashion/25.png'
        },
        {
            productName: 'Áo vest nữ màu hồng chìm',
            productId: 'NU001',
            exportPrice: 870000,
            quantity: 170,
            productImage: 'https://cdn-app.kiotviet.vn/sample/fashion/25.png'
        },
        {
            productName: 'Áo vest nữ màu hồng chìm',
            productId: 'NU001',
            exportPrice: 870000,
            quantity: 170,
            productImage: 'https://cdn-app.kiotviet.vn/sample/fashion/25.png'
        },
        {
            productName: 'Áo vest nữ màu hồng chìm',
            productId: 'NU001',
            exportPrice: 870000,
            quantity: 170,
            productImage: 'https://cdn-app.kiotviet.vn/sample/fashion/25.png'
        }
    ]
    const listTableProducts = [
        {
            productId: 'CM015',
            productName: 'Áo vest nữ màu hồng nổi 015'
        },
        {
            productId: 'CM016',
            productName: 'Áo vest nữ màu hồng nổi 016'
        },
        {
            productId: 'CM017',
            productName: 'Áo vest nữ màu hồng nổi 017'
        },
        {
            productId: 'CM018',
            productName: 'Áo vest nữ màu hồng nổi 018'
        },
        {
            productId: 'CM019',
            productName: 'Áo vest nữ màu hồng nổi 019'
        }
    ]
    return (
        <div className={cx('wrapper')}>
            <div style={{flex: '1'}}>
                <div className={cx('toolbox')}>

                    <div className={cx('title-import')}>
                        <span onClick={() => setShowContract(prev => !prev)} className={cx('icon')}><IoArrowBack /></span>
                        <span>  Nhập hàng</span>
                    </div>
                    {/* Filter */}
                    <div className={cx('filter-box')}>
                        <div className={cx('search-box', {
                            'input-focus': inputFocus
                        })}>
                            <AiOutlineSearch className={cx('icon')} />
                            <input onFocus={() => setInputFocus(true)} onBlur={() => setInputFocus(false)} type="text" placeholder="Theo mã, tên hàng" className={cx('search-input')} />
                            <AiFillCaretDown className={cx('icon')} />
                        </div>
                        {inputFocus &&
                            <DropDownImport items={listSearchProducts} />
                        }
                    </div>


                </div>

                <div className={cx('tableView')}>
                    <table className={cx('table')}>
                        <thead className={cx('thead')}>
                            <tr>
                                <th className={cx('delete')}></th>
                                <th className={cx('stt')}>STT</th>
                                <th className={cx('code')}>Mã hàng</th>
                                <th className={cx('name')}>Tên hàng</th>
                                <th className={cx('quantity')}>Số lượng</th>
                                <th className={cx('unitPrice')}>Đơn giá</th>
                                <th className={cx('price')}>Thành tiền</th>
                                <th className={cx('import')}></th>
                            </tr>
                        </thead>
                        <tbody>

                            {listTableProducts.map((item, index) => {
                                return (
                                    <ImportProductRow key={index} index={index} setModal={setOpenModalImport} setProduct={setProduct} product={item} />
                                )
                            })}

                        </tbody>
                    </table>
                </div>
                {openModelImport && <Modal setModal={setOpenModalImport} product={product} />}
            </div>
            <div className={cx('import-contract',{hide: showContract})}>
                <span>gdfgdfgdfg</span>
            </div>
        </div>
    );
}

export default ImportProducts;