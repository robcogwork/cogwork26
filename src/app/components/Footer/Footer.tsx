'use client'
import { useState, FormEvent, useEffect } from 'react'
import { format } from 'date-fns'
import Image from 'next/legacy/image'
import Link from 'next/link'

export default function Footer() {
  const [email, setEmail] = useState<string>('')
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [localTime, setLocalTime] = useState<string>('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    console.log('Form Data:', { email })
    setEmail('')
    setSubmitted(true)
  }

  useEffect(() => {
    // Function to update the local time
    const updateLocalTime = () => {
      const localTimeString = format(new Date(), 'HH:mm', {
        timeZone: 'Europe/Stockholm',
      } as any)
      setLocalTime(localTimeString)
    }
    // Update the local time initially
    updateLocalTime()

    // Update the local time every minute
    const intervalId = setInterval(updateLocalTime, 60000)

    // Clear the interval on component unmount
    return () => clearInterval(intervalId)
  }, [])

  return (
    <footer className="bg-orange-400 text-slate-200 p-9">
      <div className="pb-40">
        <Image src="/logo.png" alt="Logomark" width={62} height={62} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="flex flex-col justify-between gap-16">
          <div>
            <h3 className="mb-2">About consulting</h3>
            {/* <p>Taking FMCG to the next level</p> */}
          </div>
          <div>
            <ul>
              <li>Lokal tid Sverige {localTime}</li>
              <li>© 2026 Cogwork AB. All Rights Reserved.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="mb-2">Tjänster</h3>
          <ul>
            <li>Bokningssystem</li>
            <li>Medlemsregister</li>
            <li>Helhetslösningar</li>
            <li>Aktiviteter</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2">Socials</h3>
          <ul>
            <li className="hover:underline">
              <Link href={'/#'} target="_blank" rel="noopener noreferrer">
                Instagram
              </Link>
            </li>
            <li className="hover:underline">
              <Link href={'/#'} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2">Bli kontaktad</h3>
          <ul>
            <li className="mb-14">Ska vi kontakta dig?</li>
          </ul>
          <div>
            <form
              className="space-y-6 flex items-center"
              onSubmit={handleSubmit}
            >
              <div>
                <div className="mt-6">
                  <input
                    className="pr-16 md:pr-52 lg:pr-14 border-b-2 focus:outline-none placeholder:text-salmon-500 bg-aubergine-500"
                    type="email"
                    id="email"
                    value={email}
                    placeholder="din@adress.se"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <button
                  className="border-b-2 bg-aubergine-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-salmon-500"
                  type="submit"
                  disabled={submitted}
                >
                  {submitted ? 'Skickat' : 'Skicka'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
