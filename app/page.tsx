"use client";
import Image from "next/image";
import { useState } from "react";
import Logo from "@/public/logo.png";
import Link from "next/link";
import Assit from "@/public/assist.png";
import Ease from "@/public/ease.png";
import Generator from "@/public/generator.png";
import Smart from "@/public/smart.png";
import Photo from "@/public/photo.png";
import Sarah from "@/public/sarah.png"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className="flex flex-col md:flex-row md:items-end md:justify-between px-5 pb-3 border-b-2 border-solid border-gray-100">
      
      <div className="flex items-end justify-between w-full md:w-auto">
        <Image src={Logo} alt="logo" width={250} height={250} />
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <nav className={`flex-col md:flex-row md:flex gap-8 mt-3 md:mt-0 ${isOpen ? "flex" : "hidden"} md:flex`}>
        <Link href="#" className="hover:text-[#3DA8F5FF]">Features</Link>
        <Link href="#" className="hover:text-[#3DA8F5FF]">Pricing</Link>
        <Link href="#" className="hover:text-[#3DA8F5FF]">Testimonial</Link>
      </nav>

      <div className={`flex-col md:flex-row md:flex items-start md:items-center gap-3 md:gap-5 mt-3 md:mt-0 ${isOpen ? "flex" : "hidden"} md:flex`}>
        <Link href="/login">
          <button className="min-w-20 h-10 cursor-pointer rounded-sm bg-gray-100">Login</button>
        </Link>
        <Link href="/">
          <button className="min-w-20 px-3 h-10 cursor-pointer rounded-sm bg-[#3DA8F5FF] text-white">Get Started</button>
        </Link>
      </div>
    </header>

      <section className="flex flex-col items-center text-center mt-15 leading-15">
        <h1 className="text-[3rem] md:text-[4rem] font-bold text-4xl w-[100%] md:w-200">Build Your Resume & Portfolio With AI — Faster.</h1>
        <p className="mt-10 mb-6 w-full md:w-150 leading-7 text-[16px] text-[#565D6DFF]">Leverage the power of AI to craft stunning resumes and portfolios that stand out. Get personalized content, smart templates, and real-time feedback to land your dream job.</p>
        <nav className="flex items-center gap-2 md:gap-5 mt-4">
          <Link href="/register"><button className="px-10 md:px-4 md:min-w-60 cursor-pointer rounded-sm bg-[#3DA8F5FF] text-white">Get Started</button></Link>
          <Link href="/login"><button className="px-13 md:px-4 md:min-w-60 cursor-pointer bg-gray-100 rounded-sm text-black">Try Free</button></Link>
        </nav>
      </section>

      <main className="w-full bg-[#FAFAFBFF] min-h-50 mt-30 pb-5">
        <h2 className="py-8 text-center font-bold text-3xl">Supercharge Your Career Journey</h2>
        <section className="flex flex-col md:flex-row px-5 gap-15 md-5 mb-30">
          <article className="flex flex-col items-center flex-1 px-2 py-3 text-center bg-white min-h-50">
            <Image src={Assit} alt="assist"/>
            <h4 className="font-bold mt-3 mb-3">AI Resume Assistant</h4>
            <p className="text-[#565D6DFF]">Generate compelling bullet points and professional summaries tailored to your target roles with intelligent AI suggestions.</p>
          </article>

          <article className="flex flex-col items-center text-center flex-1 p-3 bg-white rounded-sm min-h-50">
            <Image src={Generator} alt="generator" />
            <h4 className="font-bold mt-3 mb-3">Dynamic Portfolio Generator</h4>
            <p className="text-[#565D6DFF]">Showcase your projects and achievements in beautiful, interactive portfolios, automatically generated and optimized for impact.</p>
          </article>

          <article className="flex flex-col items-center text-center rounded-sm flex-1 p-3 bg-white min-h-50">
            <Image src={Smart} alt="assist"/>
            <h4 className="font-bold mt-3 mb-3">Smart Templates & Designs</h4>
            <p className="text-[#565D6DFF]">Choose from a curated selection of modern, ATS-friendly templates for resumes and stunning layouts for portfolios.</p>
          </article>

          <article className="flex flex-col items-center text-center rounded-sm flex-1 p-3 bg-white min-h-50">
            <Image src={Ease} alt="assist"/>
            <h4 className="font-bold mt-3 mb-3">Export & Share with Ease</h4>
            <p className="text-[#565D6DFF]">Download your professional documents as polished PDFs or share your portfolio online with a unique, secure link.</p>
          </article>
        </section>
      </main>


      <section className="w-full min-h-40 flex flex-col items-center text-center mt-30 px-8">
        <h1 className="font-bold text-3xl mb-3">See Your Professional Future Unfold</h1>
        <p className="w-full md:w-170 text-[#565D6DFF] mb-5">Our intuitive interface combined with powerful AI makes career building simple, efficient, and enjoyable. Visualize your progress and customize every detail.</p>
        <Image src={Photo} alt="photo" className="w-[100%] h-150 object-cover rounded-sm"/>
      </section>

      <aside className="bg-[#FAFAFBFF] py-10 mt-30">
        <h1 className="text-center font-bold text-3xl mb-10">Trusted by Job Seekers and Professionals Worldwide</h1>
        <section className="flex flex-col md:flex-row gap-10 px-3">

          <nav className="bg-white flex-1 min-h-20 p-3 rounded-sm border-1 border-solid border-gray-100">
            <p className="text-[#565D6DFF] mb-10 italic">"AI CareerBuilder transformed my job search. The AI suggestions were spot-on, and I landed interviews for my dream roles within weeks. Highly recommend!"</p>
            <div className="flex items-center">
              <Image src={Sarah} alt="sarah" />
              <nav className="flex-1">
                <h4 className="font-bold text-[15px]">Sarah J.</h4>
                <p className="text-sm text-[#565D6DFF]">Marketing Specialist</p>
              </nav>
            </div>
          </nav>

          <nav className="bg-white flex-1 min-h-20 p-3 rounded-sm border-1 border-solid border-gray-100">
            <p className="text-[#565D6DFF] mb-10 italic">"Creating my portfolio used to be a daunting task. With AI CareerBuilder, it was an absolute breeze. The templates are gorgeous, and the AI descriptions saved me hours."</p>
            <div className="flex items-center">
              <Image src={Sarah} alt="sarah" />
              <nav className="flex-1">
                <h4 className="font-bold text-[15px]">Michael T.</h4>
                <p className="text-sm text-[#565D6DFF]">Software Engineer</p>
              </nav>
            </div>
          </nav>
          <nav className="bg-white flex-1 min-h-20 p-3 rounded-sm border-1 border-solid border-gray-100">
            <p className="text-[#565D6DFF] mb-10 italic">"AI CareerBuilder transformed my job search. The AI suggestions were spot-on, and I landed interviews for my dream roles within weeks. Highly recommend!"</p>
            <div className="flex items-center">
              <Image src={Sarah} alt="sarah" />
              <nav className="flex-1">
                <h4 className="font-bold text-[15px]">SEmily R.</h4>
                <p className="text-sm text-[#565D6DFF]">Project Manager</p>
              </nav>
            </div>
          </nav>
        </section>
      </aside>

      <summary className="mt-30">
        <h1 className="text-center font-bold text-3xl">Simple, Transparent Pricing</h1>
        <p className="mt-3 text-center text-[#565D6DFF]">Choose a plan that fits your career ambitions. No hidden fees, cancel anytime.</p>
      </summary>

      <summary className="flex flex-col md:flex-row gap-10 px-8 mt-10">
        <div className="flex flex-col items-center text-center flex-1 min-h-50 border-1 border-solid border-gray-110 rounded-sm">
          <h4 className="pt-2 font-bold mt-2">Basic</h4>
          <h1 className="font-bold text-4xl text-[#3DA8F5FF]">$0</h1>
          <p className="mt-1 text-sm text-[#565D6DFF] mb-10">Free forever</p>
          <nav className="w-[80%] text-start">
            <p className="text-sm mb-1 text-[#565D6DFF]">1 Resume Template</p>
            <p className="text-sm mb-1 text-[#565D6DFF]">Basic AI Assistance</p>
            <p className="text-sm mb-1 text-[#565D6DFF]">PDF Export</p>
            <p className="text-sm mb-1 text-[#565D6DFF]">Limited Storage</p>
            <p className="text-sm mb-1 text-white">nnnn</p>
            <Link href="/login">
              <button className="mt-10 mb-3 bg-[#3DA8F5FF] w-full h-10 rounded-sm text-white cursor-pointer">Start for Free</button>
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-center text-center flex-1 min-h-50 border-2 border-solid border-[#3DA8F5FF] rounded-sm">
          <h4 className="pt-2 font-bold mt-2">Pro</h4>
          <h1 className="font-bold text-4xl text-[#3DA8F5FF]">$9.99</h1>
          <p className="mt-1 text-sm text-[#565D6DFF] mb-10">Per month</p>
          <nav className="w-[80%] text-start">
            <p className="text-sm mb-1 text-[#565D6DFF]">Unlimited Resume Templates</p>
            <p className="text-sm mb-1 text-[#565D6DFF]">Advanced AI Assistance</p>
            <p className="text-sm mb-1 text-[#565D6DFF]">Full Portfolio Builder</p>
            <p className="text-sm mb-1 text-[#565D6DFF]">Priority Support</p>
            <p className="text-sm mb-1 text-[#565D6DFF]">Custom Themes</p>
            <Link href="/login">
              <button className="mt-10 mb-3 bg-[#3DA8F5FF] w-full h-10 rounded-sm text-white cursor-pointer">Get Pro Now</button>
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-center text-center flex-1 min-h-50 border-1 border-solid border-gray-110 rounded-sm">
          <h4 className="pt-2 font-bold mt-2">Enterprise</h4>
          <h1 className="font-bold text-4xl text-[#3DA8F5FF]">Contact Us</h1>
          <p className="mt-1 text-sm text-[#565D6DFF] mb-10">Custom pricing</p>
          <nav className="w-[80%] text-start">
            <p className="text-sm mb-1 text-[#565D6DFF]">All Pro Features</p>
            <p className="text-sm mb-1 text-[#565D6DFF]">Team Collaboration</p>
            <p className="text-sm mb-1 text-[#565D6DFF]">Dedicated Account Manager</p>
            <p className="text-sm mb-1 text-[#565D6DFF]">Advanced Analytics</p>
            <p className="text-sm mb-1 text-[#565D6DFF]">API Access</p>
            <Link href="/login">
              <button className="mt-10 mb-3 bg-[#3DA8F5FF] w-full h-10 rounded-sm text-white cursor-pointer">Request a Demo</button>
            </Link>
          </nav>
        </div>
      </summary>

      <footer className="mt-30 w-full min-h-70 bg-[#FAFAFBFF]">
        <section className="flex flex-col md:flex-row justify-center md:items-center pt-8 gap-10 px-5">
          <div className="md:w-[25%]">
            <Image src={Logo} alt="logo" width={250} height={250} />
            <p className="text-[#565D6DFF] mt-5">Build your professional presence with AI CareerBuilder.</p>
          </div>
          <div className="w-[25%]">
            <h4 className="font-bold mb-3">Product</h4>
            <p className="text-[#565D6DFF] cursor-pointer mb-1 text-sm">Resume Builder</p>
            <p className="text-[#565D6DFF] cursor-pointer mb-1 text-sm">Portfolio Builder</p>
            <p className="text-[#565D6DFF] cursor-pointer mb-1 text-sm">Templates</p>
          </div>
          <div className="w-[25%]">
            <h4 className="font-bold mb-3">Company</h4>
            <p className="text-[#565D6DFF] cursor-pointer mb-1 text-sm">About Us</p>
            <p className="text-[#565D6DFF] cursor-pointer mb-1 text-sm">Contact</p>
            <p className="text-[#565D6DFF] cursor-pointer mb-1 text-sm">Careers</p>
          </div>
          <div className="w-[25%]">
            <h4 className="font-bold mb-3">Resources</h4>
            <p className="text-[#565D6DFF] cursor-pointer mb-1 text-sm">Blog</p>
            <p className="text-[#565D6DFF] cursor-pointer mb-1 text-sm">Support</p>
            <p className="text-[#565D6DFF] cursor-pointer mb-1 text-sm">Privacy Policy</p>
          </div>
        </section>
        <p className="text-center mt-10 py-10 text-sm text-[#565D6DFF] border-t-1 border-solid border-gray-300">© 2025 AI CareerBuilder. All rights reserved.</p>
      </footer>
    </div>
  );
}