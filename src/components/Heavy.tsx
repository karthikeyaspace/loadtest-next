'use client'

export default function Heavy({ data }: { data: any[] }) {
    return (
        <div className='mt-20'>

            <h2>Heavy Component - Without suspense fallback and server side rendered </h2>
            <ul className='flex flex-wrap gap-10'>
                {data.map((item: any) => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    );
}