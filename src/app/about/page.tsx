import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - My App',
  description: 'Learn more about us on this page.',
  openGraph: {
    title: 'About Us - My App',
    description: 'This is the Open Graph description for the About page.',
    locale: 'en_US',
    type: 'website'
  }
}


export default function About() {
  return (
    <div className='w-full'>
      <h1>About Page</h1>
      <p>This is the about page content.</p>
    </div>
  )
}
