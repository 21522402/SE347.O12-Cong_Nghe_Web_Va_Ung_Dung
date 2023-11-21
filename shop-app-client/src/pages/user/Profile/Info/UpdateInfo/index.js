
import classNames from 'classnames/bind';
import styles from './UpdateInfo.module.scss';
import { ComboBox, TextInput, RadioButton } from '~/components/Input';
import {FaUser} from 'react-icons/fa';
import {BsFillCalendarFill} from 'react-icons/bs';
import {ImPhone} from 'react-icons/im';
import {IoIosBody} from 'react-icons/io';
import {GiWeight} from 'react-icons/gi'
import { useState } from 'react';
const cx = classNames.bind(styles);
function UpdateInfo(){
    const gender = [{id: 0, name: 'Nam'}, {id: 1, name: 'Nữ'}]
    let [currentDate, setCurrentDate] = useState({
        day: 1,
        month: 1,
        year: 1950
    })
    let [days, setDays] = useState(getDateByMonthYear(currentDate.month, currentDate.year))
    let [months, setMonths] = useState(getMonths())
    let [years, setYears] = useState(getYearsToCurrentFrom(currentDate.year))
    function checkLeefYear(y){
        var year = Number(y)
        if (year % 400 === 0) 
            return true; 
        if (year % 4 === 0 && year % 100 !== 0) 
            return true;
        return false; 
    }

    function getDateByMonthYear(m, y){
        var month = Number(m), year = Number(y)
        
        let dates = []
        let count = 0

        if(month === 1  || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12)
            count = 31
        else if(month === 4  || month === 6 || month === 9 || month === 11)
            count = 30
        else if(month === 2)
                if(checkLeefYear(year)) count = 29
                else count = 28

        for(let i = 0 ; i < count; i++)
            dates.push({id: i, name: i + 1})
        return dates
    }

    function getYearsToCurrentFrom(startYear){
        let currentYear = new Date().getFullYear() 
        let years = []
        let i = 0
        while(currentYear >= startYear){
            years.push({id: i, name: currentYear})
            currentYear--;
            i++;
        }
        return years
    }
    
    function getMonths(){
        let months = []
        for(let i = 0; i < 12; i++){
            months.push({id: i, name: i + 1})
        }
        return months;
    }

    function filterDate(){

    }

    function filterMonth(e){
        setDays(getDateByMonthYear(e.name, currentDate.year))
        setCurrentDate({...currentDate, month: e.name})
    }

    function filterYear(e){
        setDays(getDateByMonthYear(currentDate.month, e.name))
        setCurrentDate({...currentDate, year: e.name})
    }

    return (
        <>
           <div className={cx('container')}>
                <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                    <h1 className={cx('account-page__title')}>Thông tin tài khoản</h1>
                </div>
                <TextInput placeHolder="Họ và tên" icon={<FaUser/>}/>
                <div className={cx('date_info')}>
                    <div className={cx('date_item')}>
                        <ComboBox placeHolder="Ngày" type={'table'} icon={<BsFillCalendarFill/>} listItems={days} filterValueSelected={filterDate}/>
                    </div>
                    <div className={cx('date_item')}>
                        <ComboBox placeHolder="Tháng" type={'table'} icon={<BsFillCalendarFill/>} listItems={months} filterValueSelected={filterMonth}/>
                    </div>
                    <div className={cx('date_item')}>
                        <ComboBox placeHolder="Năm" type={'table'} icon={<BsFillCalendarFill/>} listItems={years} filterValueSelected={filterYear}/>
                    </div>
                </div>
                <RadioButton listItems={gender} filterValueChecked={() => {}}/>
                <TextInput placeHolder="Số điện thoại" icon={<ImPhone/>}/>
                <div className={cx('outer-weight-height')}>
                    <div className={cx('body-item')}>
                        <TextInput placeHolder="Chiều cao (cm)" icon={<IoIosBody/>}/>
                    </div>
                    <div className={cx('body-item')}>
                        <TextInput placeHolder="Cân nặng (kg)" icon={<GiWeight/>}/>
                    </div>
                </div>
                <div style={{display: 'flex', width: '100%', justifyContent: 'end'}}>
                    <div className={cx('account-info__btn')}>
                        <span className={cx('account-info__btn-text')}>Cập nhật</span>
                    </div>
                </div>
           </div>
        </>
    )
}
 
export default UpdateInfo;