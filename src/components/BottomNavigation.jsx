import { BookmarkIcon, HeartIcon, HomeIcon, PlusIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { NavLink } from 'react-router-dom'

const BottomNavigation = () => {
    return (
        <div className="flex justify-evenly items-center h-[96px] fixed bottom-0 w-full bg-[#D9D9D9]">
            <NavLink to="/recipes">
                <HomeIcon className="size-[24px]" />
            </NavLink>
            <NavLink to="/categories">
                <BookmarkIcon className="size-[24px]" />
            </NavLink>
            <NavLink to="/favorites">
                <HeartIcon className="size-[24px]" />
            </NavLink>
            <NavLink to="/recipes/new">
                <PlusIcon className="size-[24px]" />
            </NavLink>
        </div>
    )
}

export default BottomNavigation