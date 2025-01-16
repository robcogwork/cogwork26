'use client'
import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [formData, setFormData] = useState<{
    name: string
    email: string
    message: string
  } | null>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Log form data to console
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Message:', message)

    // Set the form data to display it in the div
    setFormData({ name, email, message })

    // Clear the form fields after submission
    setName('')
    setEmail('')
    setMessage('')
    setSubmitted(true)
  }

  return (
    <div className="text-aubergine-500 flex flex-col gap-16">
      <div>
        <h2 className="text-4xl">Kontakta oss</h2>
        <p className="mt-5">
          {`
          Vill du veta mer om våra tjänster eller har övriga frågor? Skicka iväg ett meddelande så svarar vi så snart vi kan!
        `}
        </p>
      </div>
      <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <label htmlFor="name">Namn</label>
          <input
            className="bg-apricot-500 pr-28 border-b-2 focus:outline-none placeholder:text-aubergine-500 text-lg"
            type="text"
            id="name"
            value={name}
            placeholder="Anna Andersson"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="email">Email</label>
          <input
            className="bg-apricot-500 pr-28 border-b-2 focus:outline-none placeholder:text-aubergine-500 text-lg"
            type="email"
            id="email"
            value={email}
            placeholder="din@adress.se"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className=" flex flex-col gap-3">
          <label htmlFor="message">Meddelande</label>
          <textarea
            className="bg-apricot-500 pr-28 border-b-2 focus:outline-none placeholder:text-aubergine-500 text-lg"
            id="message"
            value={message}
            style={{ height: '100px', resize: 'none' }}
            placeholder="Skriv ditt meddelande"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="">
          <button className="" type="submit" disabled={submitted}>
            {submitted ? 'Skickat' : '↳ Skicka'}
          </button>
        </div>
      </form>

      {formData && (
        <div className="mt-10 bg-lightgray-100 p-5 border rounded">
          <h3>Submitted Form Data:</h3>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Message:</strong> {formData.message}
          </p>
        </div>
      )}
    </div>
  )
}
