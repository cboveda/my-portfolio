import React from 'react'
import { BadgeCheckIcon } from '@heroicons/react/solid'

export default function ({ skill }) {
    return (
        <div key={skill.name} className="p-1 sm:w-1/2 w-full">
            <div className="bg-gray-900 rounded flex p-2 full items-center">
                <BadgeCheckIcon className="text-sky-600 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-stone-50">
                    {skill.name}
                </span>
            </div>
        </div>
    );
}


