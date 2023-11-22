import styles from './AddVoucher.module.scss';
import { HiOutlineInformationCircle } from 'react-icons/hi'
import classNames from 'classnames/bind';
import { CustomeButton } from '~/components';
import { MdAdd } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { dfImgVoucher } from '~/assets/images';
import { useState } from 'react';
const cx = classNames.bind(styles);
function AddVoucher() {
    const [isPc, setIsPc] = useState(false)
    const [file, setFile] = useState(null)
    const [img, setImage] = useState(null)

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm({ mode: 'onChange' });
    const onSubmit = (data) => {
        console.log(data)
    }
    const onChangeCheckBox = () => {
        setIsPc(prev => !prev)
    }
    const onImageChange = (e) => {
        const file = e.target.files[0];
        setFile(file)
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // Cập nhật state với đường link mới của ảnh
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
    return (
        <div className={cx('wrapper')} style={{ animation: 'dropTop .3s linear' }}>
            <div style={{ fontWeight: 500, fontSize: '20px', marginBottom: '20px', backgroundColor: 'black', color: 'white', padding: '8px', width: '20%', borderRadius: '4px' }}>Thêm Voucher mới</div>
            <div style={{ display: 'flex', alignItems: 'end' }}>
                <div style={{ paddingLeft: '4rem', marginBottom: '8px' }}>
                    <img src={img ?? dfImgVoucher} alt='avtVoucher' style={{ width: '300px', height: '200px' }} />
                </div>
                <input type='file' id='fileImg' hidden title='Choose Image' accept='image/*'  onChange={onImageChange} />
                <label htmlFor='fileImg' style={{ border: '1px dashed #ccc', marginBottom: '8px', borderRadius: '10px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'end', padding: '4px', marginLeft: '12px', cursor: 'pointer', justifySelf: 'end' }}>Choose Image</label>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '2rem 4rem 2.5rem 4rem', width: '100%' }}>
                <div className={cx('row-input')} >
                    <div style={{ width: '45%', display: 'flex', flexDirection: 'column' }}>
                        <div className={cx('input-field-left')} >
                            <label htmlFor='voucherCode' className={cx('label-input')}>Mã giảm giá <HiOutlineInformationCircle fontSize={'18px'} /> </label>
                            <input name='voucherCode' aria-invalid={errors.voucherCode ? "true" : "false"} style={errors.voucherCode ? { borderBottom: '1px solid red' } : {}} {...register('voucherCode', { required: 'Mã giảm giá chưa được nhập!' })} id='voucherCode' type='text' placeholder='WOMENDAY21T' className={cx('input')} />
                        </div>
                        {errors.voucherCode && <div className={cx('error')}>{errors.voucherCode.message}</div>}
                    </div>
                    <div style={{ width: '45%', display: 'flex', flexDirection: 'column' }}>
                        <div className={cx('input-field-right')} >
                            <label htmlFor='quanlity' className={cx('label-input')}>Số lượng <HiOutlineInformationCircle fontSize={'18px'} /> </label>
                            <input name='quanlity' aria-invalid={errors.quanlity ? "true" : "false"} style={errors.quanlity ? { borderBottom: '1px solid red' } : {}} {...register('quanlity', { required: 'Số lượng chưa được nhập!', valueAsNumber: { value: true, message: 'Số lượng phải là một số' }, min: { value: 0, message: 'Số lượng không được âm' } })} id='quanlity' type='number' placeholder='1000' className={cx('input')} />
                        </div>

                        {errors.quanlity && <div className={cx('error')}>{errors.quanlity.message}</div>}
                    </div>
                </div>
                <div className={cx('row-input')} >
                    <div style={{ width: '45%', display: 'flex', flexDirection: 'column' }}>
                        <div className={cx('input-field-left')}  >
                            <label htmlFor='isPercent' className={cx('label-input')}>Giảm theo % <HiOutlineInformationCircle fontSize={'18px'} /> </label>
                            <input name='isPercent' value={isPc} onChange={onChangeCheckBox} id='isPercent' type='checkbox' style={{ marginLeft: '30px' }} className={cx('input')} />
                        </div>
                    </div>
                </div>
                <div className={cx('row-input')} >
                    <div style={{ width: '45%', display: 'flex', flexDirection: 'column' }}>
                        <div className={cx('input-field-left')} >
                            <label htmlFor='priceDiscount' className={cx('label-input')}>Giá được giảm <HiOutlineInformationCircle fontSize={'18px'} /> </label>
                            <input name='priceDiscount' aria-invalid={errors.priceDiscount ? "true" : "false"} style={errors.priceDiscount ? { borderBottom: '1px solid red' } : {}} {...register('priceDiscount', { required: 'Giá giảm chưa được nhập!', valueAsNumber: { value: true, message: 'Giá giảm phải là một số' }, min: { value: 0, message: 'Giá giảm không được âm' } })} id='priceDiscount' type='number'
                                placeholder={isPc ? '10 (%)' : '50.000 (VND)'} className={cx('input')} />
                        </div>
                        {errors.priceDiscount && <div className={cx('error')}>{errors.priceDiscount.message}</div>}

                    </div>
                    <div style={{ width: '45%', display: 'flex', flexDirection: 'column' }}>

                        <div className={cx('input-field-right')} >
                            <label htmlFor='minPrice' className={cx('label-input')}>Giá trị tối thiểu <HiOutlineInformationCircle fontSize={'18px'} /> </label>
                            <input name='minPrice' aria-invalid={errors.minPrice ? "true" : "false"} style={errors.minPrice ? { borderBottom: '1px solid red' } : {}} {...register('minPrice', { required: 'Giá trị tối thiểu chưa được nhập!', valueAsNumber: { value: true, message: 'Giá trị tối thiểu phải là một số' }, min: { value: 0, message: 'Giá trị tối thiểu không được âm' } })} id='minPrice' type='number' placeholder='350.000 (VND)' className={cx('input')} />
                        </div>
                        {errors.minPrice && <div className={cx('error')}>{errors.minPrice.message}</div>}

                    </div>
                </div>
                <div className={cx('row-input')} >
                    <div style={{ width: '45%', display: 'flex', flexDirection: 'column' }}>

                        <div className={cx('input-field-left')} >
                            <label htmlFor='startDate' className={cx('label-input')}>Ngày bắt đầu <HiOutlineInformationCircle fontSize={'18px'} /> </label>
                            <input name='startDate' aria-invalid={errors.startDate ? "true" : "false"} style={errors.startDate ? { borderBottom: '1px solid red' } : {}} {...register('startDate', { required: 'Ngày bắt đầu chưa được nhập!' })} type='date' className={cx('input')} />
                        </div>
                        {errors.startDate && <div className={cx('error')}>{errors.startDate.message}</div>}
                    </div>
                    <div style={{ width: '45%', display: 'flex', flexDirection: 'column' }}>

                        <div className={cx('input-field-right')} >
                            <label htmlFor='endDate' className={cx('label-input')}>Ngày kết thúc <HiOutlineInformationCircle fontSize={'18px'} /> </label>
                            <input name='endDate' aria-invalid={errors.endDate ? "true" : "false"} style={errors.endDate ? { borderBottom: '1px solid red' } : {}} {...register('endDate', { required: 'Ngày kết thúc chưa được nhập!' })} id='endDate' type='date' className={cx('input')} />
                        </div>
                        {errors.endDate && <div className={cx('error')}>{errors.endDate.message}</div>}
                    </div>
                </div>
                <div  >
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }} >
                        <label htmlFor='description' className={cx('label-input')}>Mô tả <HiOutlineInformationCircle fontSize={'18px'} /> </label>
                        <textarea rows={4} name='description' id='description' type='text' placeholder='Sale ngày phụ nữ việt nam. Áp dụng để giảm tiền trực tiếp cho đơn hàng!' style={{ marginTop: '12px', border: '1px solid #ccc', padding: '8px' }} />
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'right' }}>
                    <CustomeButton type={'Submit'} className={cx('cus-button')} title={'Xác nhận'} icon={<MdAdd fontSize={20} />} isLeft={true} bgHover={'#2f5acf'} textColorHover={'white'} containStyles={{ width: '120px', backgroundColor: 'black', color: 'white', borderRadius: '8px', padding: '20px 10px', marginTop: '16px' }} />
                </div>

            </form>
        </div>
    );
}

export default AddVoucher;