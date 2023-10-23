'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image';

import BulbIcon from '../../../public/assets/suggestions/icon-suggestions.svg'
// TODO: Add number of suggestions
// TODO: Move Arrow icon in select closer
const PageHeader = (): JSX.Element => {
    const pathname = usePathname()
    console.log(pathname);
    switch (pathname) {
        case '/':
            return (<div className='container flex items-center justify-between bg-navy p-3 md:rounded md:rouned-md sm:mx-auto'>
                <div className='flex'>
                    <div className='hidden font-bold mr-4 md:flex'>
                        <Image src={BulbIcon} alt='icon of a bulb' className='mr-2'/>
                        {`Suggestions`}
                    </div>
                    <div className='ml-4'>
                        <label htmlFor="sort-options" className='mr-1'>Sort by:</label>
                        <select name="sort-options" id="sort-options" className='bg-transparent font-semibold'>
                            <option> All</option>
                            <option> Most Upvotes</option>
                            <option> Most Comments</option>
                        </select>
                    </div>
                </div>
                <button className='bg-purple px-4 py-2 font-bold rounded-md'>Add Feedback</button>
            </div>)
    
        case '/roadmap':
            return (<div className='container flex items-center justify-between bg-navy p-3 md:rounded md:rouned-md'>
            <div className='flex'>
                <div className='font-bold'>Roadmap</div>
            </div>
            <button className='bg-purple px-4 py-2 font-bold rounded-md'>Add Feedback</button>
        </div>)
        
        default:
            return(<>everything else</>)
    }
}
export default PageHeader;
