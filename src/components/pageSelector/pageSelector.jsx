import React from 'react';
import Style from './pageSelector.module.scss';
import UiDropdown from '../dropdown/dropdown';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const UiPageSelector = ({
    pageOptions,
    page,
    setPage
}) => {
    return (
        <div className={Style.pageSelector}>
            <button 
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
            >
                <FaArrowLeft />
            </button>
            <UiDropdown 
                options={pageOptions}
                value={page}
                onChange={setPage}
            />
            <button 
                onClick={() => setPage(page + 1)}
                disabled={page === pageOptions[pageOptions.length - 1]}
            >
                <FaArrowRight />
            </button>
        </div>
    );
};

export default UiPageSelector;