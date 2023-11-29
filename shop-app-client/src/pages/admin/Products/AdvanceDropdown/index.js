import classNames from "classnames/bind";
import styles from './AdvanceDropdown.module.scss'
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";


const cx = classNames.bind(styles)

function AdvanceDropdown({ items, style, onClick, indexA, indexB, addNewItem, removeItem }) {
    const [isAdd, setAdd] = useState(false)
    const handleClickItem = (item) => {
        onClick(item, indexA, indexB)
    }
    const handleClickRemoveItem = (e, item) => {
        e.stopPropagation()
        removeItem(item)

    }
    const handleClickAddNewItem = (e) => {
        e.stopPropagation()
        setAdd(true)
    }
    const handleClickSaveNewItem = (e) => {
        e.stopPropagation()
        if (inputElement.current.value.trim()!=='') {
            addNewItem(inputElement.current.value.trim())
        }
 
        setAdd(false)
    }
    const handleClickCancleAddNewItem = (e) => {
        e.stopPropagation()
        setAdd(false)
    }
    useEffect(() => {
        if (isAdd) {
            inputElement.current.focus();
        }
    },[isAdd])
    const inputElement = useRef(null)
    return (

        <div className={cx('wrapper')} style={style}>
            {
                isAdd &&
                <div style={{ padding: '0 20px' }}>
                <input ref={inputElement} type="text" onClick={(e) => e.stopPropagation()} />
            </div>
            }
            <ul className={cx('listItem')}>
                {items && items.map((item, index) =>
                    <li key={index} onClick={() => handleClickItem(item)}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span>{item}</span>
                            <div onClick={(e) => handleClickRemoveItem(e, item)} style={{ padding: '0 2px' }}>
                                <strong >X</strong>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
            {
                !isAdd &&
                <div onClick={(e) => handleClickAddNewItem(e)} style={{ padding: '5px', background: '#fff', textAlign: 'center' }}>
                    <span className={cx('btn', 'btn-succeed')} style={{ color: '#fff' }}><AiOutlinePlus className={cx('icon')} /> Thêm mới</span>
                </div>
            }
            {
                isAdd &&
                <div style={{ padding: '5px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px'}}>
                    <span  onClick={(e) => handleClickSaveNewItem(e)} className={cx('btn', 'btn-succeed')} style={{ color: '#fff' }}> Xác nhận</span>
                    <span  onClick={(e) => handleClickCancleAddNewItem(e)} className={cx('btn', 'btn-failed')} style={{ color: '#fff' }}> Hủy</span>
                </div>
            }
        </div>
    );
}

export default AdvanceDropdown;