'use client'
import React from 'react'
import Link from 'next/link'
import classes from './index.module.scss'
import Image from 'next/image'
import MobileNav from './MobileNav'

import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'


const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()
  return (
    <nav
      className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.wrap}>
        <Link href="/">
          <Image width={170} height={50} src="./logo-black.svg" alt="Logo" />
        </Link>
        <HeaderNav header={header} />
        {/* <MobileNav header={header} /> */}
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
