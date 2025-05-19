import React from 'react';

const Exercise1 = ({employee})=>{
    const { name ,age ,department} = employee
    
    return(
        <section>
            <h2>Bài 1 : Chi tiết nhân viên </h2>
            <h1>{name}</h1>
            <p>Tuổi : {age}</p>
            <p>Phòng ban: {department}</p>
        </section>
    );
};

export default Exercise1;