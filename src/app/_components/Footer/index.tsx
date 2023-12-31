import React from 'react'
import Link from 'next/link'

import { Footer } from '../../../payload/payload-types'
import { fetchFooter } from '../../_api/fetchGlobals'
import { ThemeSelector } from '../../_providers/Theme/ThemeSelector'
import FooterComponent from './FooterComponent'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    console.log(error)
  }

  const navItems = footer?.navItems || []

  return (
    <>
    {/* <ThemeSelector /> */}
      <FooterComponent footer={footer} />
    </>
  )
}
