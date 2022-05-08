import React from 'react'
import { BadgeCheckIcon } from '@heroicons/react/solid'

export default function SkillBadge({ skill }) {
    const style = {
        width: `${skill.proficiency}%`,
    }

    return (
        <div key={skill.name} className="p-1 sm:w-1/2 w-full">
            <div className="bg-gray-900 rounded flex flex-wrap p-2 full-row items-center">
                <div className="flex pb-2">
                    <BadgeCheckIcon className="text-sky-700 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-stone-50">
                        {skill.name}
                    </span>
                </div>
                <div className="border-b-2 border-gray-700 bg-gray-800 w-full h-1.5 rounded">
                    <div className="bg-sky-400 h-full" style={style}></div>
                </div>
            </div>
        </div>
    );
}


