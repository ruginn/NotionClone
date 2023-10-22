"use client"

import { Spinner } from "@/components/Spinner"
import {SignInButton} from '@clerk/clerk-react'
import { Button } from "@/components/ui/button"
import { useConvexAuth } from "convex/react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"


function Heading() {
  const {isLoading, isAuthenticated} = useConvexAuth()

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline">Hotion</span></h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">Hotion is a connected work space <br/> where work happens</h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size='lg'/>
        </div>
      )}
      {isAuthenticated && !isLoading && 
      <Button asChild>
        <Link href='/documents'>
          Enter Hotion
          <ArrowRight className="h-4 w-4 ml-2"/>
        </Link>
      </Button>}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode='modal'>
          <Button>Get Hotion Free 
          <ArrowRight className="h-4 w-4 ml-2"/>
          </Button>
        </SignInButton>
      )}
    </div>
  )
}

export default Heading