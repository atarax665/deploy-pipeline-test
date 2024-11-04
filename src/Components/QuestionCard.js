import { useState } from "react";

const QuestionCard = () => {
    const [upvotes, setUpvotes] = useState(0);


    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <h1 className="text-xl font-bold">Question 1 - Votes: {upvotes}</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec eros eget libero.</p>
            <div className="flex justify-between mt-4">
                <button className="bg-green-500 text-white px-2 py-1 rounded-md" onClick={() => {
                    setUpvotes(upvotes + 1);
                }}
                    >Upvote</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded-md" onClick={() => {
                    if (upvotes > 0)
                    {
                        setUpvotes(upvotes - 1);
                    }
                }}>Downvote</button>
            </div>
        </div>
    );
}

export default QuestionCard;