// layout.tsx
// suspense, fallback

import React, { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='mt-20'>
            <Suspense fallback={<div>Loading...</div>}>
                {children}
            </Suspense>
        </div>
    );
}