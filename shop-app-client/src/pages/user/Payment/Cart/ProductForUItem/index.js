import { useEffect, useState } from 'react';
import styles from './ProductForUItem.module.scss'
import classNames from 'classnames/bind';
import { ComboBox } from '~/components/Input';
import { GoTrash } from "react-icons/go";
import { IoMdThermometer } from 'react-icons/io';
const cx = classNames.bind(styles);
function ProductForUItem({props, onSelect}) {
    let [item, setItem] = useState({})
    let [colors, setColors] = useState([])
    let [sizes, setSizes] = useState([])
    useEffect(() => {
        setItem(props ? props : {
            productId: '',
            productavatar: '',
            productName: '',
            importPrice: '0',
		    exportPrice: '0',
            colors:[
                {
                    colorCode: '',
                    colorName: "",
                    images: '',
                    size:{}
                },
            ],
            discountPerc: 0,
            pBuy: 0,
            selectSize: '',
            selectColor: '',
        })
        
    }, [props])

    useEffect(() => {
        setColors(createListColorCBB())
        setSizes(createListSizeCBB(props.selectColor))
    }, [])

    function createListColorCBB(){
        const list = props.colors;
        if(list){
            const colors = [];
            list.forEach((element, index) => {
                if(Object.keys(element.size).length !== 0)
                    colors.push({id: index, name: element.colorName})
            });
            if(colors) return colors
            return [{id: -1, name: ''}]
        }
        else
            return [{id: -1, name: ''}]
    }

    function createListSizeCBB(currentColor){
        const list = props.colors;
        if(list){
            const color = list.find((i) => i.colorName === currentColor)
            if(color){
                return  Object.keys(color.size).map((s, index) => {
                    return {id: index, name: s}
                })
            }
        }
        else
            return [{id: -1, name: ''}]
    }

    function onColorchange(e){
        const list = item.colors;
        if(list){
            setSizes(createListSizeCBB(e.name))
            if(createListSizeCBB(e.name).map(item => item.name).includes(item.selectSize))
                setItem({...item, selectColor: e.name})
            else 
                setItem({...item, selectColor: e.name, selectSize: sizes[0].name})
        }
    }

    function onSizeChange(e){
        setItem({...item, selectSize: e.name})
    }
    return ( 
        <>
            <div className={cx('container')}>
                <div>
                    <img className={cx('image')} src={item.productavatar} alt=''/>
                </div>
                <div className={cx('rightContent')}>
                    <div>
                        <div className={cx('outerContent')}>
                            <span className={cx('productName')}>{item.productName}</span>
                        </div>
                        <div className={cx('selector')}>
                            <div style={{width: '120px'}}>
                                <ComboBox listItems={colors} placeHolder={''} selectedItem={item.selectColor} type={'list-gray'} filterValueSelected={onColorchange}/>
                            </div>
                            <div style={{width: '70px'}}>
                                <ComboBox listItems={sizes} placeHolder={''} selectedItem={item.selectSize} type={'list-gray'} filterValueSelected={onSizeChange}/>
                            </div>
                        </div>
                        <div style={{fontSize: '14px', fontStyle: 'italic'}}>Top 10 sản phẩm bán chạy</div>
                        <div style={{color: 'black', fontSize: '14px', fontWeight: '600', marginBottom: '15px'}}>{new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(item.exportPrice)}</div>
                        <div className={cx('account-info__btn')} onClick={onSelect}>
                            <span className={cx('account-info__btn-text')}>Lấy ngay</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductForUItem;