import { useEffect, useState } from 'react';
import styles from './ProductItem.module.scss'
import classNames from 'classnames/bind';
import { ComboBox } from '~/components/Input';
import { GoTrash } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrderItem, filterChange, increaseQuantityItem, reduceQuantityItem } from '~/redux/actions';
const cx = classNames.bind(styles);
export default function ProductItem({props}) {
    const dispatch = useDispatch();
    let [colors, setColors] = useState([])
    let [sizes, setSizes] = useState([])

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
        const list = props.colors;
        if(list){
            setSizes(createListSizeCBB(e.name))
            if(!createListSizeCBB(e.name).map((item) => item.name).includes(props.selectSize)){
                console.log("màu này không có size bạn đang chọn")
                dispatch(filterChange({
                    id: props.productId,
                    type: 'selectSize',
                    value: sizes[0].name,
                }))
            }
            dispatch(filterChange({
                id: props.productId,
                type: 'selectColor',
                value: e.name,
            }))
        }
    }

    function getQuantity(){
        const list = props.colors;
        if(list){
            const color = list.find((i) => i.colorName === props.selectColor)
            if(color){
                return color.size[props.selectSize].quantity
            }
        }
        else
            return 0;
    }

    function increaseQuantity(){
        if(props.pBuy === getQuantity()){
            console.log("Đã đủ số lượng tối đa")
            return;
        }
                
        dispatch(increaseQuantityItem({
            id: props.productId,
            quantity: getQuantity()
        }))
    }

    function decreaseQuantity(){
        if(props.pBuy === 1){
            console.log("xóa sản phẩm")
            dispatch(deleteOrderItem({
                id: props.productId,
            }))
            return;
        }
        
        dispatch(reduceQuantityItem({
            id: props.productId,
        }))
    }

    function onSizeChange(e){
        dispatch(filterChange({
            id: props.productId,
            type: 'selectSize',
            value: e.name,
        }))
    }

    function handleDeleteItem(){
        dispatch(deleteOrderItem({
            id: props.productId,
        }))
    }
    return ( 
        <>
            <hr style={{width: '100%', height: '1px', backgroundColor: '#f1f1f1'}}/>
            <div className={cx('container')}>
                <div>
                    <img className={cx('image')} src={props.productavatar} alt=''/>
                </div>
                <div className={cx('rightContent')}>
                    <div>
                        <div className={cx('outerContent')}>
                            <span className={cx('productName')}>{props.productName}</span>
                            <span className={cx('colorSize')}>{`${props.selectColor} / ${props.selectSize}`}</span>
                        </div>
                        <div className={cx('selector')}>
                            <div style={{width: '120px'}}>
                                <ComboBox listItems={colors} placeHolder={''} selectedItem={props.selectColor} type={'list-gray'} filterValueSelected={onColorchange}/>
                            </div>
                            <div style={{width: '70px'}}>
                                <ComboBox listItems={sizes} placeHolder={''} selectedItem={props.selectSize} type={'list-gray'} filterValueSelected={onSizeChange}/>
                            </div>
                            <div className={cx('outerQuantity')}>
                                <div className={cx('operator')} style={{cursor: 'pointer', userSelect: 'none'}} onClick={decreaseQuantity}><span>-</span></div>
                                <div className={cx('operator')}><span>{props.pBuy}</span></div>
                                <div className={cx('operator')} style={{cursor: 'pointer', userSelect: 'none'}} onClick={increaseQuantity}><span>+</span></div>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginLeft: '10px'}}>
                                <div style={{fontWeight: '600'}}>{new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(props.exportPrice * (1 - props.discountPerc))}</div>
                                <del style={{fontWeight: '400', fontSize: '14px', color: '#ccc'}}>{new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(props.exportPrice)}</del>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5px', cursor: 'pointer', alignSelf: 'flex-start'}} onClick={handleDeleteItem}>
                        <GoTrash />
                        <div>Xóa</div>
                    </div>
                </div>
            </div>
        </>
    );
}