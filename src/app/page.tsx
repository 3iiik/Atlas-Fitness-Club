import Hero from "@/components/Hero"
import Membership from "@/components/Membership"
import Trainers from "@/components/Trainers"
import Schedule from "@/components/Schedule"
import Statistics from "@/components/Statistics"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <>
      <Hero />
      <Membership />
      <Statistics />
      <Trainers />
      <Schedule />
      <Testimonials />
      <Contact />
    </>
  )
}
