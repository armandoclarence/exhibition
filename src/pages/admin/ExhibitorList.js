import React from 'react'
import Exhibitor from './Exhibitor.js';

const ExhibitorList = () =>{
    const exhibitors = [
        {
            "firstname": "Alexander",
            "lastname": "Graham",
            "email": "alexanderg292@gmail.com",
            "mobile": "081528378712",
            "status": "Approved",
            "user_type_id": 2
        },
        {
            "firstname": "Nikki",
            "lastname": "Prince",
            "email": "nikkip62@gmail.com",
            "mobile": "081523278795",
            "status": "Approved",
            "user_type_id": 2
        },
        {
            "firstname": "John",
            "lastname": "Graham",
            "email": "johng22@gmail.com",
            "mobile": "08152838391",
            "status": "Approved",
            "user_type_id": 2
        },
    ]
    
    return (
        <div className='container m-auto my-8'>
            <div className='flex shadow border-b'>
                <table className='min-w-full text-center'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='font-medium text-grey-500 uppercase tracking-wider py-3 px-6'>
                                FirstName
                            </th>
                            <th className='font-medium text-grey-500 uppercase tracking-wider py-3 px-6'>
                                LastName</th>
                            <th className='font-medium text-grey-500 uppercase tracking-wider py-3 px-6'>
                                Email</th>
                            <th className='font-medium text-grey-500 uppercase tracking-wider py-3 px-6'>
                                Phone</th>
                            <th className='font-medium text-grey-500 uppercase tracking-wider py-3 px-6'>
                                Status</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        { exhibitors.map((exhibitor) => (
                            <Exhibitor exhibitor ={exhibitor} key={exhibitor.mobile}/>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default ExhibitorList 

