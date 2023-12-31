import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/solid';
import { IconButton, Tooltip } from '@material-tailwind/react';
import { useNavigate } from 'react-router';

const InstagramTable = () => {
    const [show, setShow] = useState(null);
    const navigate = useNavigate()

    const handleDltPost = () => { };

    const handleEditPost = (id) => {
        navigate(`${id}/edit`)

    };

    // Array of post data
    const instagramData = [
        {
            id: 1,
            instagramLink: 'Instagram@harsh.insta',
            createdAt: '20/03/23',
            category: "Category 1"
        },

        // Add more post objects as needed
    ];

    return (
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
            <table className="w-full whitespace-nowrap">
                <thead>
                    <tr className="h-16 w-full text-sm leading-none text-gray-800">
                        <th className="font-normal text-left pl-4">Instagram Link</th>
                        <th className="font-normal text-left pl-12">Category</th>
                        <th className="font-normal text-left pl-12">Created At</th>
                    </tr>
                </thead>
                <tbody className="w-full">
                    {instagramData.map((cur) => (
                        <tr
                            key={cur.id}
                            className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                        >

                            <td className="pl-4">
                                <p className="text-sm font-medium leading-none text-gray-800">
                                    {cur.instagramLink}
                                </p>
                            </td>
                            <td className="pl-12">
                                <p className="text-sm font-medium leading-none text-gray-800">
                                    {cur.category}
                                </p>
                            </td>
                           
                            <td className="pl-12">
                                <p className="text-sm font-medium leading-none text-gray-800">
                                    {cur.createdAt}
                                </p>
                            </td>
                            
                            <td className="px-7 2xl:px-0">
                                <Tooltip content="Edit Post">
                                    <IconButton
                                        variant="text"
                                        color="blue-gray"
                                        onClick={() => handleEditPost(cur.id)}
                                    >
                                        <PencilIcon className="h-5 w-5" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip content="Delete Post">
                                    <IconButton
                                        variant="text"
                                        color="blue-gray"
                                        onClick={() => handleDltPost(cur.id)}
                                    >
                                        <TrashIcon className="h-5 w-5" />
                                    </IconButton>
                                </Tooltip>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InstagramTable;
