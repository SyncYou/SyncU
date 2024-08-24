import React from 'react'

export function Skeleton() {
    return <>
        <main className='flex h-screen bg-fbg overflow-hidden pb-[0px] mb-[0px] items-start justify-center animate-pulse'>
            <section className='| border-r-stackHover border-r-[1px] flex items-start flex-col  pr-[38px] pl-[56px] gap-[60px] h-screen'>
                <p className="skel h-[16px] w-[170px] mt-[55px]"></p>
                <div className='skelDiv *:w-[139px]'>
                    <p></p><p></p><p></p><p></p><p></p>
                </div>
                <div className='skelDiv  *:w-[139px] '>
                    <p className='importante'></p><p></p><p></p>
                </div>
                <div className='skelDiv *:w-[139px] '>
                    <p className='importante'></p><p></p><p></p>
                </div>
            </section>
            <section className=' flex items-start flex-col pr-[38px]  pl-[56px] gap-[43px]'>
                <p className="skel h-[10px] w-[310px] mt-[40px]"></p>
                <p className="skel h-[72px] w-[702px] "></p>
                <div className='flex gap-[20rem]'>
                    <p className='skelDiv flex-row *:w-[90px] '>
                        <span></span><span></span>
                    </p>
                    <p className='centerSkel '></p>
                </div>
                <div className='flex flex-col gap-[40px] *:flex *:gap-[26px] *:flex-col *:p-[16px] *:border *:border-stackHover *:rounded-xl '>
                    <div className=' *:skelDiv *:flex-row'>
                        <p><span className='w-[90px]'></span><span className='w-[160px]'></span></p>
                        <p className='centerSkel h-[27px] w-[580px]'></p>
                        <p className='skelDiv flex-row *:w-[70px] '>
                            <span></span><span></span><span></span><span></span><span></span>
                        </p>
                    </div>
                    <div className=' *:skelDiv *:flex-row'>
                        <p><span className='w-[90px]'></span><span className='w-[160px]'></span></p>
                        <p className='centerSkel h-[27px] w-[580px]'></p>
                        <p className='skelDiv flex-row *:w-[70px] '>
                            <span></span><span></span><span></span><span></span><span></span>
                        </p>
                    </div>
                    <div className=' *:skelDiv *:flex-row'>
                        <p><span className='w-[90px]'></span><span className='w-[160px]'></span></p>
                        <p className='centerSkel h-[27px] w-[580px]'></p>
                        <p className='skelDiv flex-row *:w-[70px] '>
                            <span></span><span></span><span></span><span></span><span></span>
                        </p>
                    </div>
                </div>
            </section>
            <p className='skelDiv flex-row *:w-[70px] pr-[38px] mt-[40px]'>
                <span></span><span></span> <span></span>
            </p>
        </main>
    </>
}
