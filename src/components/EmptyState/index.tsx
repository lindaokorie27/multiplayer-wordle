import * as React from 'react';
import Image from 'next/image';

import PlusIcon from '../../../public/assets/shared/icon-plus.svg';

const EmptyState = (): JSX.Element => {
    return (
        <div className='container mx-auto mt-8 sm:mt-6 w-5/6 bg-white rounded-lg px-4 py-12'>
            <div>
            <Image src='/assets/suggestions/illustration-empty.svg' alt="man with magnifying glass" width={200} height={200}/>
            <h2 className='text-slate-500 font-bold'>There&apos;s is no feedback yet.</h2>
            <p className='text-slate-500'>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
            <button className='bg-purple px-4 py-2 font-bold rounded-md'>Add Feedback</button>
            </div>
        </div>
    )
}
export default EmptyState;
