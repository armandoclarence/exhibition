import React, { useEffect, useState  } from 'react';
import Exhibitor from './Exhibitor.js';
import { fetchBendingExhibitors } from './service/bendingService.js';


const BendingExhibitor = () => {
  
    const [exhibitors, setExhibitors] = useState([]);
    useEffect(() => {
        // fetchBendingExhibitors().then(data => console.log(data))
        fetchBendingExhibitors().then(data => setExhibitors(data.results));
    }, []);

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
                            <Exhibitor exhibitor={exhibitor} key={exhibitor.userId}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BendingExhibitor 