import { useEffect, useState } from 'react';
import styles from './ProductForUItem.module.scss'
import classNames from 'classnames/bind';
import { ComboBox } from '~/components/Input';
import { GoTrash } from "react-icons/go";
import { IoMdThermometer } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { importItemToOrder } from '~/redux/actions';
const cx = classNames.bind(styles);
function ProductForUItem({props}) {
    const dispatch = useDispatch();
    let [colors, setColors] = useState([])
    let [sizes, setSizes] = useState([])
    let [image, setImage] = useState([])
    let [item, setItem] = useState({})

    useEffect(() => {
        setColors(createListColorCBB(props.colors))
        setSizes(createListSizeCBB(props.color, props.colors))
        setImage(getImage(props.color, props.colors));
        setItem(props ? props : {
            productId: '1',
            productavatar: '',
            productName: '',
            importPrice: 0,
		    exportPrice: 0,
            colors:[
                {
                    colorCode: '',
                    colorName: '',
                    images: '',
                    size:{
                    }
                },
            ],
            discountPerc: 0,
            quantity: 0,
            size: '',
            color: '',
        })
    }, [])

    function createListColorCBB(list){
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

    function createListSizeCBB(currentColor, list){
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

    function onColorchange(e, list){
        if(list){
            setSizes(createListSizeCBB(e.name, item.colors))
            if(!createListSizeCBB(e.name, item.colors).map((item) => item.name).includes(item.size)){
                console.log("màu này không có size bạn đang chọn")
                return
            }
            setImage(getImage(e.name, list));
            setItem({...item, color: e.name})
        }
    }

    function getQuantity(){
        const list = props.colors;
        if(list){
            const color = list.find((i) => i.colorName === props.color)
            if(color){
                return color.size[props.size].quantity
            }
        }
        else
            return 0;
    }

    function onSizeChange(e){
        item.size = e.name
        setItem({...item, 'size': e.name})
    }

    function getImage(currentColor, list){
        if(list){
            const color = list.find((i) => i.colorName === currentColor)
            if(color){
                return color.images
            }
        }
        else
            return [{id: -1, name: ''}]
    }

    function handleItemToOrder(){
        dispatch(importItemToOrder({
            product: item,
            color: props.color,
        }))
    }
    return ( 
        <>
            <div className={cx('container')}>
                <div className={cx('image')}>
                    <img className={cx('image')} src={image} alt=''/>
                </div>
                <div className={cx('rightContent')}>
                    <div>
                        <div className={cx('outerContent')}>
                            <span className={cx('productName')}>{item.productName}</span>
                        </div>
                        <div className={cx('selector')}>
                            <div style={{width: '120px'}}>
                                <ComboBox listItems={colors} placeHolder={''} selectedItem={item.color} type={'list-gray'} filterValueSelected={(e) => onColorchange(e, item.colors)}/>
                            </div>
                            <div style={{width: '70px'}}>
                                <ComboBox listItems={sizes} placeHolder={''} selectedItem={item.size} type={'list-gray'} filterValueSelected={onSizeChange}/>
                            </div>
                        </div>
                        <div style={{fontSize: '14px', fontStyle: 'italic'}}>Top 10 sản phẩm bán chạy</div>
                        <div style={{display: 'flex', flexDirection: 'row', gap: '5px', alignItems: 'flex-end', marginBottom: '15px'}}>
                            <div style={{fontWeight: '600'}}>{new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(item.exportPrice * (1 - item.discountPerc))}</div>
                            <del style={{fontWeight: '400', fontSize: '14px', color: '#ccc'}}>{new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(item.exportPrice)}</del>
                        </div>
                        <div className={cx('account-info__btn')} onClick={() => handleItemToOrder()}>
                            <span className={cx('account-info__btn-text')}>Lấy ngay</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductForUItem;