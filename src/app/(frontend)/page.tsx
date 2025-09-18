// 'use client'
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";



export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <Testimonials />
    </div>
  );
}
