"use client"
import Landing from '@/components/landing'
import Projects from '@/components/projects'
import ScrollNav from '@/components/scrollnav';
import { useState, useEffect } from 'react';

export default function Home() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      console.log(scrollY);
      if (window.scrollY > 0 && window.scrollY < 500) {
        setPosition(0);
      }
      else if (window.scrollY > 500 && window.scrollY < 1000){
        setPosition(1);
      }
      else if (window.scrollY > 1000 && window.scrollY < 1500){
        setPosition(2);
      }
      else if (window.scrollY > 1500 && window.scrollY < 2000){
        setPosition(3);
      }

    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);
  return (
    <div className="">
        <ScrollNav activeNav={position} />
        <Landing/>
        <Projects />
 
    </div>
  )
}
