"use client";
import { SignedIn } from '@clerk/nextjs'
import { Sparkles } from 'lucide-react'
import React from 'react'
import Link from '../markdown/link'

const ProLink = () => {
  return (
    <SignedIn>
            <Link
  href="/pricing"
  className="flex items-center gap-2 px-4 py-1.5 mr-1 rounded-lg border 
    border-amber-500/60 hover:border-amber-800/80 
    bg-gradient-to-r from-amber-500/20 to-orange-500/10 
    hover:from-amber-500/20 hover:to-orange-500/20 
    dark:from-amber-400/10 dark:to-orange-400/10 
    dark:hover:from-amber-400/20 dark:hover:to-orange-400/20
    transition-all duration-300"
>
  <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-600" />
  <span className="text-sm font-medium text-amber-500 dark:text-amber-300 hover:text-amber-400">
    Pro
  </span>
</Link>

      </SignedIn>
  )
}

export default ProLink
