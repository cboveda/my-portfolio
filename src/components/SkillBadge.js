import React from 'react'
import { BadgeCheckIcon } from '@heroicons/react/solid'

export default function SkillBadge({ skill}) {
    const style = {
        width: `${skill.proficiency}%`,
    }

    return (
        <div key={skill.name} className="p-1 sm:w-1/2 w-full">
            <div className="bg-background2 rounded flex flex-wrap p-2 full-row items-center">
                <div className="flex pb-2">
                    <BadgeCheckIcon className="text-primary w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-main">
                        {skill.name}
                    </span>
                </div>
                <div className="border-b border-secondary bg-background w-full h-1.5 rounded-sm">
                    <div className="bg-primary opacity-50 h-full rounded-sm" style={style}></div>
                </div>
            </div>
        </div>
    );
}


