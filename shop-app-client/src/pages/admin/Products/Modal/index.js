import classNames from "classnames/bind";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import ProductDetail from "../ProductDetail";
import { IoSquareOutline, IoCheckboxSharp } from "react-icons/io5";

import styles from './ProductRow.module.scss'
const cx = classNames.bind(styles)

function Modal() {
    return (
        <div className={cx('ovelay')}>

            {/* Container */}
            <div>

                {/* Header */}
                <div>
                    Thêm hàng
                </div>
                
                {/* Tabpanel */}
                <div>
                    
                </div>
                <div>
                    {/* Col */}
                    <div>
                        {/* Form group */}
                        <div>
                            <labeL></labeL>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;