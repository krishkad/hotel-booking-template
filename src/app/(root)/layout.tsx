import React, { ReactNode } from 'react';

const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-full'>
            <main className="w-full">{children}</main>
        </div>
    );
};

export default AppLayout;