import React from 'react'
import UseFetch from './UseFetch';

const FetchYogaData = () => {
    const [data]=UseFetch("https://api.npoint.io/4459a9a10e43812e1152");
    return (
        <>
            <ul className='list_data_main'>
                <h1 className='usefetch_heading'>Use Fetch Custom Hook Yoga</h1>
                {data && data.map((e)=>( // e parameter contains the value of each array index for every iteration
                    <>
                        <li className='list_data'>
                            <h3>{e.name}</h3>
                            <p><strong>Name: </strong>{e.name}</p>
                            <p><strong>Benefits: </strong>{e.benefits}</p>
                            <p><strong>Time: </strong>{e.time}</p>
                        </li>
                    </>
                ))}
            </ul>
        </>
    )
}
export default FetchYogaData