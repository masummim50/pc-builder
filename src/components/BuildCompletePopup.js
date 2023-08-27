import React from 'react';
import { useDispatch } from 'react-redux';
import { reset } from '../redux/features/pcbuilder/pcbuilderSlice';

const BuildCompletePopup = ({showPopup, setShowPopup}) => {
    const dispatch = useDispatch()
    const handleClose = ()=> {
        dispatch(reset());
        setShowPopup(false);
    }
    return (
        <div className={`bg-green-100 p-6 ${showPopup ? "block": "hidden"} h-full w-full top-0 left-0 fixed opacity-90`}>
           
            <div className="flex h-full justify-center items-center flex-col gap-5">
                <h2 className='font-bold text-[25px]'>Build Success</h2>
            <button onClick={()=>handleClose()} className='bg-red-700 text-white px-8 py-2 rounded-lg hover:bg-red-900'>close</button>

            </div>

        </div>
    );
};

export default BuildCompletePopup;