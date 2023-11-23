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
    let [image, setImage] = useState([])

    useEffect(() => {
        setColors(createListColorCBB())
        setSizes(createListSizeCBB(props.color))
        setImage(getImage(props.color));
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
            setImage(getImage(e.name));
            setSizes(createListSizeCBB(e.name))
            if(!createListSizeCBB(e.name).map((item) => item.name).includes(props.size)){
                console.log("màu này không có size bạn đang chọn")
                dispatch(filterChange({
                    id: props.productId,
                    type: 'size',
                    value: sizes[0].name,
                    color: props.color,
                }))
            }
            dispatch(filterChange({
                id: props.productId,
                type: 'color',
                value: e.name,
                color: props.color,
            }))
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

    function increaseQuantity(){
        if(props.quantity === getQuantity()){
            console.log("Đã đủ số lượng tối đa")
            return;
        }
                
        dispatch(increaseQuantityItem({
            id: props.productId,
            color: props.color,
        }))
    }

    function decreaseQuantity(){
        if(props.quantity === 1){
            console.log("xóa sản phẩm")
            dispatch(deleteOrderItem({
                id: props.productId,
                color: props.color,
            }))
            return;
        }
        
        dispatch(reduceQuantityItem({
            id: props.productId,
            color: props.color,
        }))
    }

    function onSizeChange(e){
        dispatch(filterChange({
            id: props.productId,
            type: 'size',
            value: e.name,
            color: props.color,
        }))
    }

    function handleDeleteItem(){
        dispatch(deleteOrderItem({
            id: props.productId,
        }))
    }

    function getImage(currentColor){
        const list = props.colors;
        if(list){
            const color = list.find((i) => i.colorName === currentColor)
            if(color){
                return color.images
            }
        }
        else
            return [{id: -1, name: ''}]
    }
    return ( 
        <>
            <hr style={{width: '100%', height: '1px', backgroundColor: '#f1f1f1'}}/>
            <div className={cx('container')}>
                <div>
                    <img className={cx('image')} src={image} alt=''/>
                </div>
                <div className={cx('rightContent')}>
                    <div>
                        <div className={cx('outerContent')}>
                            <span className={cx('productName')}>{props.productName}</span>
                            <span className={cx('colorSize')}>{`${props.color} / ${props.size}`}</span>
                        </div>
                        <div className={cx('selector')}>
                            <div style={{width: '120px'}}>
                                <ComboBox listItems={colors} placeHolder={''} selectedItem={props.color} type={'list-gray'} filterValueSelected={onColorchange}/>
                            </div>
                            <div style={{width: '70px'}}>
                                <ComboBox listItems={sizes} placeHolder={''} selectedItem={props.size} type={'list-gray'} filterValueSelected={onSizeChange}/>
                            </div>
                            <div className={cx('outerQuantity')}>
                                <div className={cx('operator')} style={{cursor: 'pointer', userSelect: 'none'}} onClick={decreaseQuantity}><span>-</span></div>
                                <div className={cx('operator')}><span>{props.quantity}</span></div>
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