import { useEffect, useState } from 'react';
import styles from './ProductItem.module.scss'
import classNames from 'classnames/bind';
import { ComboBox } from '~/components/Input';
const cx = classNames.bind(styles);
function ProductItem({props}) {
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
            qBuy: 0,
            selectSize: '',
            selectColor: '',
        })
    }, [props])

    function createListColorCBB(list){
        // if(list){
        //     const sizes = item.colors?.find((item) => item.colorName === e.name)
        //     if(sizes){
        //         return 
        //     }
        // }
        // else
            return [{id: -1, name: ''}]
    }

    function createListSizeCBB(){
        if(item.colors)
            return item.colors.map((item, index) => {
                return {id: index, name: item.colorName}
            })
        else
            return [{id: -1, name: ''}]
    }

    function onColorchange(e){
        console.log(e, "concec")
        const selectItem = item.colors?.find((item) => item.colorName === e.name)
        if(selectItem){
            setItem({...item, 'images': selectItem.images, 'selectColor': selectItem.selectColor})
        }
    }
    return ( 
        <>
            <hr style={{width: '100%', height: '1px', backgroundColor: '#f1f1f1'}}/>
            <div className={cx('container')}>
                <div>
                    <img className={cx('image')} src={item.productavatar} alt=''/>
                </div>
                <div className={cx('rightContent')}>
                    <div>
                        <div className={cx('outerContent')}>
                            <span className={cx('productName')}>{item.productName}</span>
                            <span className={cx('colorSize')}>{`${item.selectColor} / ${item.selectSize}`}</span>
                        </div>
                        <div className={cx('selector')}>
                            <div style={{width: '100px'}}>
                                <ComboBox listItems={colors} placeHolder={''} selectedItem={item.selectColor} type={'list'} filterValueSelected={onColorchange}/>
                            </div>
                            <div style={{width: '100px'}}>
                                <ComboBox listItems={createListSizeCBB()} placeHolder={''} selectedItem={item.selectColor} type={'list'} filterValueSelected={onColorchange}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductItem;