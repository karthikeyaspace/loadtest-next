'use client'

import { useEffect, useState } from 'react';

export default function Heavy() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setData(Array.from({ length: 10000 }, (_, i) => ({ id: i, value: `Item ${i}` })));
        };
        fetchData();
    }, []);

    return (
        <div className='mt-20'>

            <h2>Heavy Component</h2>
            <ul className='flex flex-wrap gap-10'>
                {data.map((item) => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    );
}