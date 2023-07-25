'use client'
import {AiFillCopy, AiFillEdit, AiOutlineClose, AiOutlineQrcode} from 'react-icons/ai'
import {GrRefresh} from 'react-icons/gr'
import { useState } from 'react'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Buttons />
        </main>
    )
}

const Header = () => {
    return (
        <div className="px-2 py-4 pb-12 flex flex-col items-center gap-10 md:py-12 bg-stone-800 text-white md:px-0">
            <div className="font-bold">
                <h1 className="text-4xl text-center">Anon Mail</h1>
            </div>
            <div className="p-8 space-y-8 border border-gray-500 border-dashed">
                <h2 className="text-2xl font-bold text-center">Your Temporary Email Address</h2>
                <div className="flex flex-col gap-4 md:flex-row">

                    <div className="py-4 md:p-1 flex-grow flex items-center justify-between gap-8 pl-4 bg-gray-600 rounded-full">
                        <p className="text-lg font-semibold">test@email.com</p>
                        <button className="hidden md:flex justify-center items-center w-12 h-12 text-4xl bg-gray-500 rounded-full">
                            <AiOutlineQrcode className="text-2xl"/>
                        </button>
                    </div>

                    <button className="hidden md:flex justify-center items-center w-12 h-12 bg-emerald-400 rounded-full hover:bg-gray-400">
                        <AiFillCopy className="text-2xl"/>
                    </button>

                    <div className="flex justify-around gap-10 md:hidden">
                        <button className="flex-grow flex justify-around items-center py-2 px-2 bg-gray-500 rounded-full text-xl">
                            <AiOutlineQrcode className="text-2xl"/>
                            QR Code
                        </button>
                        <button className="flex-grow flex justify-around items-center py-2 px-2 bg-emerald-400 rounded-full text-xl hover:bg-gray-400">
                            <AiFillCopy className=" text-2xl"/>
                            Copy
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:max-w-[440px] text-center text-white/40">
                <p>
                    Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Anon Mail provides temporary, secure, anonymous, free, disposable email address.
                </p>
            </div>
        </div>
    )
}

const buttonArr = [
    {name: "Copy", tooltip: "Copy to clipboard", icon: <AiFillCopy/>},
    {name: "Refresh", tooltip: "Refresh messages", icon: <GrRefresh/>},
    {name: "Change", tooltip: "Change email", icon: <AiFillEdit/>},
    {name: "Delete", tooltip: "Delete this email", icon: <AiOutlineClose/>}
]

const Buttons  = () => {
    return (
        <div className="flex justify-center py-4 bg-white shadow md:py-8">
            <div className="grid grid-cols-2 md:flex md:justify-center md:items-center gap-4 md:px-12">
                {buttonArr.map(d => { 
                    const [showTooltip, setShowTooltip] = useState(false)
                    return (
                        <button  
                            className="relative w-40 flex items-center justify-center gap-4 bg-gray-200 rounded-full py-4 px-8 shadow-[1px_2px_4px_1px_rgba(0,0,0,0.2)] hover:bg-emerald-400 transition-colors duration-300"
                            onMouseEnter={() => setShowTooltip(true)}
                            onMouseLeave={() => setShowTooltip(false)}
                        >
                            <span className="text-xl">{d.icon}</span> {d.name}
                            {showTooltip && 
                                <div className="absolute z-50 w-36 -bottom-8 rounded py-1 px-2 bg-black">
                                    <p className="text-white text-sm">{d.tooltip}</p>
                                </div>
                            }
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
