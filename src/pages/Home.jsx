import React from 'react'
import { Nav } from '../components/Home/navbar/Nav'
import { Services } from '../components/Home/services/Services'
import { About } from '../components/Home/About'
import { MembershipFees } from '../components/Home/MembershipFees/MembershipFees'
import { Why } from '../components/Home/Why/Why'
import { Count } from '../components/Home/Count/Count'
import { Partners } from '../components/Home/Partners/Partners'
import { Subscribe } from '../components/Home/Subscribe/Subscribe'
import { Footer } from '../components/Home/Footer/Footer'
import { BackToTop } from '../components/Global/BackToTop'

export const Home = () => {
  return (
    <div>
      < Nav />
      < Services />
      < About />
      < MembershipFees />
      < Why />
      < Count />
      < Partners />
      < Subscribe />
      < Footer />
      < BackToTop />
    </div>
  )
}
