'use client'
import React, { useLayoutEffect, useRef } from 'react'
import styles from './Hero.module.scss'
import Image from 'next/legacy/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RotatingWords from './RotatingWords/RotatingWords'
import Link from 'next/link'

export default function Hero() {
  const background = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className={styles.backgroundImage} ref={background}>
        {/*  <Image
          src={'/bkg.svg'}
          alt="background image"
          layout="fill"
          priority={true}
        /> */}
      </div>

      <div className={styles.intro}>
        <h1 data-scroll data-scroll-speed="0.7">
          <RotatingWords />
        </h1>
      </div>

      <div className={styles.CTA}>
        <p className={styles.para} data-scroll data-scroll-speed="0.7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
          commodi cum totam! Aperiam blanditiis mollitia repellat exercitationem
          hic? Atque maxime consequatur quo sunt culpa nobis tempore animi
          rerum, esse suscipit!
        </p>
        <Link href="/tjanster">
          <button data-scroll data-scroll-speed="0.7" className={styles.button}>
            <h4>Upptäck</h4>
          </button>
        </Link>
      </div>
    </div>
  )
}
