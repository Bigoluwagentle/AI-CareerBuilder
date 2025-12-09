import Link from "next/link";
import Navbar from "../navbar/page";

export default function Dashboard(){
    return(
        <div>
            <main className="flex flex-col md:flex-row">
                <Navbar/>
                <section className="w-full md:w-[80%] min-h-screen">
                    <article className="mt-20 md:mt-0 md:ml-10 md:0 px-3 md:pl-10 md:pr-10">
                        <h1 className="font-bold text-3xl my-5">Dashboard Overview</h1>
                        <aside className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1 min-h-20 bg-[#FAFAFBFF] rounded-sm border-1 border-solid border-gray-200 p-2">
                                <nav className="flex justify-between">
                                    <h4 className="font-bold">Resume Score</h4>
                                    <i className="fa-solid fa-star"></i>
                                </nav>
                                <h1 className="font-bold text-3xl my-2 text-[#3DA8F5FF]">0%</h1>
                                <p className="text-sm mt-1 text-[#565D6DFF]">Target: 100%</p>
                            </div>
                            <div className="flex-1 min-h-20 bg-[#FAFAFBFF] rounded-sm border-1 border-solid border-gray-200 p-2">
                                <nav className="flex justify-between">
                                    <h4 className="font-bold">Last Activity</h4>
                                    <i className="fa-solid fa-alarm-clock"></i>
                                </nav>
                                <h1 className="font-bold text-3xl my-2">0 days ago</h1>
                                <p className="text-sm mt-1 text-[#565D6DFF]">Nothing Yet'</p>
                            </div>
                            <div className="flex-1 min-h-20 bg-[#FAFAFBFF] rounded-sm border-1 border-solid border-gray-200 p-2">
                                <nav className="flex justify-between">
                                    <h4 className="font-bold">Portfolio Views</h4>
                                    <i className="fa-regular fa-eye"></i>
                                </nav>
                                <h1 className="font-bold text-3xl my-2 text-[#3DA8F5FF]">0</h1>
                                <p className="text-sm mt-1 text-[#565D6DFF]">Last 0 days</p>
                            </div>
                        </aside>
                        <h1 className="font-bold mt-10">Quick Actions</h1>
                        <nav className="mt-4 flex flex-col md:flex-row gap-8">
                            <Link href="/resume-builder"><button className="bg-[#3DA8F5FF] px-3 py-2 text-white rounded-sm cursor-pointer">
                                <i className="fa-solid fa-file-pdf mx-2"></i>
                                New Resume
                            </button></Link>

                            <Link href="/portfolio-builder"><button className="border-1 border-solid border-[#3DA8F5FF] px-3 py-2 text-black rounded-sm cursor-pointer">
                                <i className="fa-regular fa-id-card mx-2"></i>
                                New Portfolio
                            </button></Link>
                        </nav>

                        <h1 className="font-bold mt-10">Recent Work</h1>
                        <div>

                        </div>

                        
                    </article>
                    
                    <footer className="bg-[#FAFAFBFF] py-6 text-center text-sm mt-20 text-gray-400">
                        &copy; 2025 AI CareerBuilder. All rights reserved.
                    </footer>
                </section>
            </main>
        </div>
    )
}