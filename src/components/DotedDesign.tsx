import React from 'react';

const DotedDesign = () => {
    return (
        <div className='flex gap-4 justify-center my-6'>
            {[1,2,3,4,5,6].map((index:number)=>{
                return(
                    <div key={index} className={`${index===6 ? "inactive-dot" :"active-dot"}`}> </div>
                )
            })}
            
        </div>
    );
};

export default DotedDesign;