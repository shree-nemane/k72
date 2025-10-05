import React from 'react'
import Footer from '../components/footer/Footer'

const Blog = () => {
    return (
        <div className='mt-[15vw] w-screen h-full'>
            <div className='flex flex-col items-center justify-center px-12 '>
                <h1 className='font-[font2] text-xl self-start'>Blog</h1>

                <div className='flex flex-col w-full justify-center items-center py-20'>
                    <div className='flex w-full justify-end gap-2 border-b border-black pb-4 mb-4'>
                        <div className='flex justify-center items-center text-lg font-[font2]'>
                            Categories:
                        </div>
                        <div className='flex justify-center items-center font-[font2] gap-1'>
                            <div className='text-white text-lg px-2 bg-black'>ALL</div>
                            <div className='text-black text-lg px-2 bg-[#ededed]'>Tech & Ai</div>
                            <div className='text-black text-lg px-2 bg-[#ededed]'>Account</div>
                        </div>
                    </div>

                    <div className='flex justify-center items-start max-w-full gap-6'>
                        <div className='flex flex-col justify-center items-start gap-2'>
                            <div className='w-[47vw] h-[30vw]'>
                                <img className='w-full h-full rounded-4xl object-cover' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                            </div>
                            <div className='flex flex-col justify-start gap-2'>
                                <h3 className='font-[font1] text-xl'>May 9 2025</h3>
                                <h2 className='uppercase font-[font2] text-4xl w-[34vw]'>Conseil & relation client: un duo qui ne se briefe pas, qui se construit</h2>
                                <div className='text-black font-[font2] px-2 text-lg bg-[#ededed] self-start'>Account</div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-start gap-2'>
                            <div className='w-[47vw] h-[30vw]'>
                                <img className='w-full h-full rounded-4xl ' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-1280x960.png" alt="" />
                            </div>
                            <div className='flex flex-col justify-start gap-2'>
                                <h3 className='font-[font1] text-xl'>May 9 2025</h3>
                                <h2 className='uppercase font-[font2] text-4xl w-[32vw]'>Pub prédictive: L’IA révolutionne le ciblage</h2>
                                <div className='text-black font-[font2] px-2 text-lg bg-[#ededed] self-start'>Tech & AI</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Blog