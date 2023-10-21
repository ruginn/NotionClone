'use client'

import { useScrollTop } from "@/hooks/use-scroll-top"
import { cn } from '@/lib/utils'
import Logo from "./Logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton} from '@clerk/clerk-react'
import { Button } from "@/components/ui/button";

function Navbar() {
  const { isAuthenticated, isLoading} = useConvexAuth()
  const scrolled = useScrollTop();

    return (
    <div className={cn(
        "z-50 bg-background dark:bg-[#1f1f1f] fixed top-0  flex items-center w-full p-6", 
        scrolled && 'border-b shadow-sm8'
    )}>
        <Logo />
        <div className="md:ml-auto md:justify-end justify-center w-full flex items-center gap-x-2">
            {isLoading && (
              <p>Loading...</p>
            )}
            {!isAuthenticated && !isLoading && (
              <>
                <SignInButton mode='modal'>
                  <Button variant='ghost' size='sm'>
                    Login
                  </Button>
                </SignInButton>
                <SignInButton mode='modal'>
                  <Button size='sm'>
                    Get Hotion Free
                  </Button>
                </SignInButton>
              </>
            )}
            <ModeToggle />
        </div>
    </div>
  )
}

export default Navbar