import { ChevronUpIcon } from "@heroicons/react/20/solid";

interface UpvoteCountProps  {
    /**
   * Button contents
   */
    upvotes: number;
    /**
   * Optional click handler
   */
    onClick?: () => void;
};

const UpvoteCount: React.FC<UpvoteCountProps> = ({ upvotes, onClick }) => {
    return (
        <button className="flex flex-col justify-center px-3 py-2 font-bold border-none rounded-xl bg-ghost-white hover:bg-lavendar-blue text-port-gore"  onClick={onClick}>
            <ChevronUpIcon className="stroke-1 stroke-royal-blue"/>
            {upvotes}
        </button>
    )
}
export default UpvoteCount;
