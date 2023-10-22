'use client'

import { cn } from "@/lib/utils"
import { ChevronsLeft } from "lucide-react"
import { usePathname } from "next/navigation"
import {useRef, ElementRef, useState} from 'react'
import {useMediaQuery} from 'usehooks-ts'

function Navigation() {
    const pathname = usePathname()
    const isMobile = useMediaQuery("(max-width: 768px)")



    const isResizingRef = useRef(false)
    const sideBarRef = useRef<ElementRef<"aside">>(null)
    const navBarRef = useRef<ElementRef<"div">>(null)
    const [isReseting, setIsReseting] = useState(false)
    const [isCollaped, setIsCollapsed] = useState(isMobile)



    return (
    <>
        <aside ref={sideBarRef} className={cn("group/sidebar h-full bg-secondary overflow-y-auto relative w-60 flex-col z-[99999]",
             isReseting && 'transition-all ease-in-out duration-300', 
             isMobile && 'w-0'
        )}>
            {/* ended here */}
            <div
                role="button"
                className={cn(
                    "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition", 
               

                )}
            >
                <ChevronsLeft className="h-6 w-6"/>
            </div>
            <div>
                <p>Action Items</p>
            </div>
            <div className="mt-4">
                <p>Documents</p>
            </div>
            <div className="opacity-0 group-hover/sidebar:opacity-100 tranition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"/>
        </aside>
    </>
  )
}

export default Navigation