import { useState } from 'react';
import styles from './TextInput.module.scss';
import classNames from 'classnames/bind';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
const cx = classNames.bind(styles);

function TextInput({placeHolder, icon, secure, type, value}) {
    const [hide, setHide] = useState(true);
    return (
        <>
            {
                type === 'type_1' ? (
                    <div className={cx(`${type}_form-field`)}>
                        {icon && <div className={cx(`${type}_form-icon`)}>{icon}</div>}
                        <input type={`${secure && hide ? 'password': 'text'}`} className={cx(`${type}_form-input`)} placeholder='   '/>
                        <label for="name" className={cx(`${type}_form-label`)}>{placeHolder}</label>
                        {
                            secure ? 
                                <div className={cx(`${type}_eye`)} onClick={() => setHide(!hide)}>
                                    {
                                        hide ? <AiOutlineEyeInvisible className={cx(`${type}_iconHide`)}/> : <AiOutlineEye className={cx(`${type}_iconHide`)} />
                                    }
                                </div> 
                            : null
                        }
                    </div>
                ) : 
                type === 'type_2' ? 
                (
                    <div className={cx(`${type}_form-field`)}>
                        <input type={`${secure && hide ? 'password': 'text'}`} className={cx(`${type}_form-input`)} placeholder='   ' defaultValue={value}/>
                        <label for="name" className={cx(`${type}_form-label`)}>{placeHolder}</label>
                        {
                            secure ? 
                                <div className={cx(`${type}_eye`)} onClick={() => setHide(!hide)}>
                                    {
                                        hide ? <AiOutlineEyeInvisible className={cx(`${type}_iconHide`)}/> : <AiOutlineEye className={cx(`${type}_iconHide`)} />
                                    }
                                </div> 
                            : null
                        }
                    </div>  
                ) : null
            }
        </>
    );
}

export default TextInput;