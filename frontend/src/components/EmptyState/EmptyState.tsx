import * as React from 'react';
import Image from 'next/image';
import EmptyStatePic from '../../../public/assets/suggestions/illustration-empty.svg'

// TODO: Add Plus icon to button
import PlusIcon from '../../../public/assets/shared/icon-plus.svg';

const EmptyState = (): JSX.Element => {
    return (
        <div className='container mx-auto mt-8 sm:mt-6 w-5/6 bg-white rounded-lg px-4 py-12'>
            <div>
            <Image src={EmptyStatePic} alt="man with magnifying glass" className='mx-auto' />
            <h2 className='text-indigo font-bold'>There&apos;s is no feedback yet.</h2>
            <p className='text-gray-dark'>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
            <a href="/feedback/edit" className='bg-purple px-4 py-2 font-bold rounded-md mx-auto'>Add Feedback</a>
            </div>
        </div>
    )
}
export default EmptyState;
