"use client"

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
    return (
        <div className="space-y-4 py-4 h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href='/dashboard' className="flex items-center pl-3 mb-4">
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                            fill
                            src="/logo.png"
                            alt='logo'
                        />
                    </div>
                    <h1 className="text-2xl font-bold">
                        Genius
                    </h1>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar