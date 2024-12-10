import { atom, useAtom } from 'jotai'
import { useEffect, useState, useMemo } from 'react'
import Lottie from 'lottie-react'
import gif1 from './gif1.json'
import gif2 from './gif2.json'
import Discover from './Discover/Discover'
import { motion, AnimatePresence } from 'framer-motion'
import Slide from './Slider'
import Grid from './Grid'
import { textBoxVariant, listBoxVariant } from './variants'
const pictures = [
	'DSC00680',
	'DSC00933',
	'DSC00966',
	'DSC00983',
	'DSC01011',
	'DSC01040',
	'DSC01064',
	'DSC01071',
	'DSC01103',
	'DSC01145',
	'DSC01420',
	'DSC01461',
	'DSC01489',
	'DSC02031',
	'DSC02064',
	'DSC02069',
]
const discover = [
	'Unlock the power of technology to optimize farming, enhance crop yields, and reduce environmental impact.',
	'Smart Solutions for Modern Farms: Harness technology to boost yields and improve efficiency effortlessly.',
	"From Seed to Harvest, We've Got You Covered: Tools and insights designed to support every step of the farming journey.",
	'Grow More, Waste Less: Sustainable solutions to maximize output while minimizing resources.',
	'Data-Driven Decisions for Better Harvests: Turn information into action with real-time insights and analytics.',
	'Bringing Tech to the Fields: Connecting farmers to tools that make agriculture smarter and simpler.',
	'Solutions for Today, Growth for Tomorrow: Future-proof your farm with innovative and scalable technologies.',
	'Stronger Farms, Stronger Communities: Building prosperity through innovation, one farm at a time.',
	'Innovation Rooted in Agriculture: Bridging technology and tradition to grow a better future for all.',
]
export const pageAtom = atom(0)
export const pages = [
	{
		front: 'book-cover',
		back: pictures[0],
	},
]
for (let i = 1; i < pictures.length - 1; i += 2) {
	pages.push({
		front: pictures[i % pictures.length],
		back: pictures[(i + 1) % pictures.length],
	})
}

pages.push({
	front: pictures[pictures.length - 1],
	back: 'book-back',
})

export const UI = () => {
	const [page, setPage] = useAtom(pageAtom)
	const [scrollPast300, setScrollPast300] = useState(true)

	const handleScroll = () => {
		if (window.scrollY > 50) {
			setScrollPast300(false)
		} else {
			setScrollPast300(true)
		}
	}
	useEffect(() => {
		// Attach the event listener
		window.addEventListener('scroll', handleScroll)

		// Cleanup the event listener
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		const audio = new Audio('/audios/page-flip-01a.mp3')
		audio.play()
	}, [page])
	const year = useMemo(() => new Date().getFullYear(), [])

	const [brand, setShowbrand] = useState(true)
	return (
		<>
			<main className=' overflow-hidden px-8 md:px-10 z-10 pointer-events-none fixed  inset-0  flex justify-between flex-col '>
				<div className=' mt-10 flex justify-between h-8 items-center'></div>
				<div className=' w-full overflow-auto pointer-events-auto flex justify-center'>
					<AnimatePresence>
						{scrollPast300 && (
							<motion.div
								key='pagination'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className=' overflow-auto flex items-center justify-between gap-1 md:gap-2 xl:gap-4 w-[80%] md:w-max max-w-full p-10 '
							>
								{[...pages].map((_, index) => (
									<button
										key={index}
										className={`border-transparent hover:scale-110 origin-center transition-all duration-700  px-2 py-1 rounded-full shadow-md ${
											index === page ? 'px-[40px]' : ''
										} ${
											index === 0 ? 'bg-[#ddb42b]' : ''
										} text-lg uppercase shrink-0 border ${
											index === page
												? 'bg-black text-black'
												: 'bg-black/30 text-white'
										}`}
										onClick={() => setPage(index)}
									>
										{/* {index === 0 ? 'Cover' : `Page ${index}`} */}
									</button>
								))}
								<button
									className={`border-transparent hover:border-white transition-all duration-300  px-2 py-1 rounded-full text-lg uppercase shrink-0 border shadow-md ${
										page === pages.length
											? 'bg-white scale-150 px-6 text-black'
											: 'bg-black/50 text-white'
									}`}
									onClick={() => setPage(pages.length)}
								></button>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</main>
			<div className='absolute  w-full h-[calc(100vh*2)] md:h-[calc(100vh*2.2)] xl:h-[calc(100vh*2.3)] overflow-x-hidden overflow-y-hidden select-none  flex flex-col '>
				{/* ########HERO SECTION TEXT ######## */}
				<div
					id='discover'
					className='bg-white relative h-[100vh] w-full bg-green flex justify-center px-[50px] '
				>
					{/* center arrow */}
					<AnimatePresence>
						{page === 0 && (
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								exit={{ scale: 0 }}
								transition={{ duration: 0.5 }}
								className='font-sans font-extralight absolute inset-0 w-28 h-28 mx-auto my-auto translate-y-[20px] z-50 rounded-full flex justify-center items-center bg-black/10 backdrop-blur-[4px] text-[48pt] md:text-[72pt]'
							>
								+
							</motion.div>
						)}
					</AnimatePresence>
					<div className='font-sans font-extralight absolute top-[10%] w-[95%] text-[48pt] md:text-[72pt] md:[line-height:85px] [line-height:60px] '>
						<h1 className='text-[#ddb42b]  '>END+TO+END</h1>
						<h1 className=''> AGRICULTURE SOLUTIONS </h1>
						<h1 className='md:text-left text-right'> UNMATCHED </h1>
						<h1 className='md:text-left text-right  flex justify center items-center'>
							RESULTS <span className=' translate-y-8 text-[120pt] '>*</span>
						</h1>
						<div className='flex flex-col gap-8 justify-between items-start h-full  text-sm'>
							<div className='flex gap-x-4'>
								<a
									href='#aboutus'
									className='px-8 py-2 text-white bg-black rounded-full hover:scale-110 duration-200 xl:z-50'
									onClick={() => {
										setShowbrand(true)
									}}
								>
									contact
								</a>
								<button className='px-8 py-2 text-black bg-transparent border-[#a6a6a6] border rounded-full'>
									{year}
								</button>
							</div>
							<div className='flex md:justify-end justify-start w-full'>
								<a
									href='#aboutus'
									className='pointer-events-auto z-50 hidden md:flex px-20 py-2 text-black bg-transparent border-[#a6a6a6] border rounded-full justify-center hover:scale-110 duration-200'
									onClick={() => {
										setShowbrand(false)
									}}
								>
									volunteer
								</a>
							</div>
						</div>
					</div>
					<div className='absolute bottom-[100px] w-full flex justify-center px-[50px] '>
						{page === 0 && <Discover text={discover[page]} />}
						{page === 1 && <Discover text={discover[page]} />}
						{page === 2 && <Discover text={discover[page]} />}
						{page === 3 && <Discover text={discover[page]} />}
						{page === 4 && <Discover text={discover[page]} />}
						{page === 5 && <Discover text={discover[page]} />}
						{page === 6 && <Discover text={discover[page]} />}
						{page === 7 && <Discover text={discover[page]} />}
						{page === 8 && <Discover text={discover[page]} />}
						{page === 9 && (
							<motion.a
								href='#aboutus'
								className='hover:cursor-pointer pointer-events-auto z-50'
								key='scroll'
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
							>
								<div className='w-full h-36  flex justify-center items-center gap-x-4 mt-10 z-50 cursor-pointer hover:scale-125 duration-200'>
									<p className='text-sm text-[#a6a6a6] text-light '>
										scroll down
									</p>
									<div className='w-20 h-20 border border-[#a6a6a6] rounded-full flex items-center justify-center text-3xl font-light text-[#a6a6a6] rotate-180'>
										<svg
											fill='#a6a6a6'
											height='20px'
											width='20px'
											version='1.1'
											id='Layer_1'
											xmlns='http://www.w3.org/2000/svg'
											xmlns:xlink='http://www.w3.org/1999/xlink'
											viewBox='0 0 511.801 511.801'
											xml:space='preserve'
											stroke='#a6a6a6'
										>
											<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
											<g
												id='SVGRepo_tracerCarrier'
												stroke-linecap='round'
												stroke-linejoin='round'
											></g>
											<g id='SVGRepo_iconCarrier'>
												<path d='M263.535,248.453c-4.16-4.16-10.88-4.16-15.04,0L3.054,493.787c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 c3.947-4.16,3.947-10.667,0-14.827L263.535,248.453z'></path>
												<path d='M18.201,263.493l237.76-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213c3.947-4.16,3.947-10.667,0-14.827 L263.535,3.12c-4.16-4.16-10.88-4.16-15.04,0L3.054,248.453c-4.053,4.267-3.947,10.987,0.213,15.04 C7.534,267.547,14.041,267.547,18.201,263.493z'></path>
											</g>
										</svg>
									</div>
								</div>
							</motion.a>
						)}
					</div>
				</div>
				<div
					id='aboutus'
					className='relative min-h-[800px] md:min-h-[1000px] h-[100vh] overflow-y-hidden w-full flex  flex-col text-white px-[10px] md:px-[20px] xl:px-[50px] py-[10px]  '
				>
					<AnimatePresence>
						{brand && (
							<motion.div
								key='brand'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className='flex flex-col justify-between gap-2 mt-14 md:mt-2'
							>
								<div className='w-full flex justify-between '>
									{/* ##### HEADER CONTAINER ##### */}
									<div className='w-full'>
										<h1 className='text-3xl md:text-3xl xl:text-5xl w-full font-semibold flex items-end gap-14 xl:gap-28 text-black'>
											<span className='text-xl md:text-xl xl:text-3xl font-medium'>
												01.
											</span>
											<motion.div
												key={'textbox'}
												className='flex'
												variants={textBoxVariant}
												initial='hidden'
												whileInView='visible'
											>
												<motion.span variants={listBoxVariant}>O</motion.span>
												<motion.span variants={listBoxVariant}>U</motion.span>
												<motion.span className='mr-2' variants={listBoxVariant}>
													R{' '}
												</motion.span>
												<motion.span variants={listBoxVariant}>B</motion.span>
												<motion.span variants={listBoxVariant}>R</motion.span>
												<motion.span variants={listBoxVariant}>A</motion.span>
												<motion.span variants={listBoxVariant}>N</motion.span>
												<motion.span variants={listBoxVariant}>D</motion.span>
											</motion.div>
										</h1>
										<h2 className='mt-5 text-2xl xl:text-3xl font-extralight text-black'>
											FIND OUT HOW WE ARE <br /> CHANGING LIVES
										</h2>
									</div>
									{/* ###### CONTACT CONTAINER ###### */}
									<div
										className='w-full flex justify-end xl:justify-between items-start group'
										onClick={() => setShowbrand(false)}
									>
										<h1 className='text-3xl md:text-3xl xl:text-5xl w-max  xl:flex items-end  gap-14 xl:gap-18 text-[#a6a6a6] font-extralight hidden group-hover:scale-125 duration-200 cursor-pointer '>
											<span className='text-xl md:text-xl xl:text-3xl font-medium'>
												02.
											</span>
											CONTACT US
										</h1>
										<div
											className='w-20 h-20 border border-[#a6a6a6] rounded-full flex items-center justify-center text-3xl font-light text-[#a6a6a6] rotate-90 group-hover:scale-125 duration-200 hover:scale-125'
											onClick={() => setShowbrand(false)}
										>
											<svg
												fill='#a6a6a6'
												height='20px'
												width='20px'
												version='1.1'
												id='Layer_1'
												xmlns='http://www.w3.org/2000/svg'
												xmlns:xlink='http://www.w3.org/1999/xlink'
												viewBox='0 0 511.801 511.801'
												xml:space='preserve'
												stroke='#a6a6a6'
											>
												<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
												<g
													id='SVGRepo_tracerCarrier'
													stroke-linecap='round'
													stroke-linejoin='round'
												></g>
												<g id='SVGRepo_iconCarrier'>
													<path d='M263.535,248.453c-4.16-4.16-10.88-4.16-15.04,0L3.054,493.787c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 c3.947-4.16,3.947-10.667,0-14.827L263.535,248.453z'></path>{' '}
													<path d='M18.201,263.493l237.76-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213c3.947-4.16,3.947-10.667,0-14.827 L263.535,3.12c-4.16-4.16-10.88-4.16-15.04,0L3.054,248.453c-4.053,4.267-3.947,10.987,0.213,15.04 C7.534,267.547,14.041,267.547,18.201,263.493z'></path>{' '}
												</g>
											</svg>
										</div>
									</div>
								</div>
								{/* #### BRAND #### */}
								<div className='w-full  h-full flex flex-col rounded-3xl  '>
									{/* GRID */}
									<Grid />
									<div className='w-full h-full flex justify-center text-[#6b6b6b] text-5xl font-sans font-thin cursor-pointer hover:scale-125 duration-200 z-50'>
										<a
											href='#discover'
											className='flex items-center gap-6 w-max'
										>
											<h1>Discover</h1>
											<div className='w-20 h-20 border border-[#a6a6a6] rounded-full flex items-center justify-center text-3xl font-light text-[#a6a6a6]'>
												<svg
													fill='#a6a6a6'
													height='20px'
													width='20px'
													version='1.1'
													id='Layer_1'
													xmlns='http://www.w3.org/2000/svg'
													xmlns:xlink='http://www.w3.org/1999/xlink'
													viewBox='0 0 511.801 511.801'
													xml:space='preserve'
													stroke='#a6a6a6'
												>
													<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
													<g
														id='SVGRepo_tracerCarrier'
														stroke-linecap='round'
														stroke-linejoin='round'
													></g>
													<g id='SVGRepo_iconCarrier'>
														<path d='M263.535,248.453c-4.16-4.16-10.88-4.16-15.04,0L3.054,493.787c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 c3.947-4.16,3.947-10.667,0-14.827L263.535,248.453z'></path>{' '}
														<path d='M18.201,263.493l237.76-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213c3.947-4.16,3.947-10.667,0-14.827 L263.535,3.12c-4.16-4.16-10.88-4.16-15.04,0L3.054,248.453c-4.053,4.267-3.947,10.987,0.213,15.04 C7.534,267.547,14.041,267.547,18.201,263.493z'></path>{' '}
													</g>
												</svg>
											</div>
										</a>
									</div>
									{/* <Slide/> */}
								</div>
							</motion.div>
						)}
					</AnimatePresence>

					{/* ###### SHOW CONTACT ###### */}
					<AnimatePresence>
						{brand || (
							<motion.div
								key='contact'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className='flex flex-col justify-between gap-2 mt-14 md:mt-2'
							>
								<div className='w-full flex justify-between '>
									{/* ##### HEADER CONTAINER ##### */}
									<div className='w-full'>
										<h1 className='text-3xl md:text-3xl xl:text-5xl w-full font-semibold flex items-end gap-14 xl:gap-28 text-black'>
											<span className='text-xl md:text-xl xl:text-3xl font-medium'>
												02.
											</span>
											<motion.div
												key={'textbox'}
												className='flex'
												variants={textBoxVariant}
												initial='hidden'
												whileInView='visible'
											>
												<motion.span variants={listBoxVariant}>C</motion.span>
												<motion.span variants={listBoxVariant}>O</motion.span>
												<motion.span variants={listBoxVariant}>N</motion.span>
												<motion.span variants={listBoxVariant}>T</motion.span>
												<motion.span variants={listBoxVariant}>A</motion.span>
												<motion.span variants={listBoxVariant}>C</motion.span>
												<motion.span variants={listBoxVariant}>T</motion.span>
												<motion.span className='ml-2' variants={listBoxVariant}>
													U
												</motion.span>
												<motion.span variants={listBoxVariant}>S</motion.span>
											</motion.div>
										</h1>
										<h2 className='mt-5 text-2xl xl:text-3xl font-extralight text-black'>
											REACH OUT OR
											<br /> VOLUNTEER
										</h2>
									</div>
									{/* ###### CONTACT CONTAINER ###### */}
									<div
										className='w-full flex justify-end xl:justify-between items-start group'
										onClick={() => setShowbrand(true)}
									>
										<h1 className='text-3xl md:text-3xl xl:text-5xl w-max  xl:flex items-end  gap-14 xl:gap-18 text-[#a6a6a6] font-extralight hidden group-hover:scale-125 duration-200 cursor-pointer '>
											<span className='text-xl md:text-xl xl:text-3xl font-medium'>
												01.
											</span>
											OUR BRAND
										</h1>
										<div
											className='w-20 h-20 border border-[#a6a6a6] rounded-full flex items-center justify-center text-3xl font-light text-[#a6a6a6] -rotate-90 group-hover:scale-125 duration-200 hover:scale-125'
											onClick={() => setShowbrand(true)}
										>
											<svg
												fill='#a6a6a6'
												height='20px'
												width='20px'
												version='1.1'
												id='Layer_1'
												xmlns='http://www.w3.org/2000/svg'
												xmlns:xlink='http://www.w3.org/1999/xlink'
												viewBox='0 0 511.801 511.801'
												xml:space='preserve'
												stroke='#a6a6a6'
											>
												<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
												<g
													id='SVGRepo_tracerCarrier'
													stroke-linecap='round'
													stroke-linejoin='round'
												></g>
												<g id='SVGRepo_iconCarrier'>
													<path d='M263.535,248.453c-4.16-4.16-10.88-4.16-15.04,0L3.054,493.787c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 c3.947-4.16,3.947-10.667,0-14.827L263.535,248.453z'></path>{' '}
													<path d='M18.201,263.493l237.76-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213c3.947-4.16,3.947-10.667,0-14.827 L263.535,3.12c-4.16-4.16-10.88-4.16-15.04,0L3.054,248.453c-4.053,4.267-3.947,10.987,0.213,15.04 C7.534,267.547,14.041,267.547,18.201,263.493z'></path>{' '}
												</g>
											</svg>
										</div>
									</div>
								</div>
								{/* #### BRAND #### */}
								<div className='w-full  h-full flex flex-col rounded-3xl  '>
									{/* VOLUNTEER */}
									<motion.div
										key='volunteer'
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										className='w-full mt-[80px] h-[800px] bg-black rounded-3xl flex flex-col justify-start items-center p-10'
									>
										<Lottie
											animationData={gif1}
											loop={true}
											className=' w-20'
										/>
										<h1 className='font-sans text-2xl md:text-3xl'>
											Send us an email
										</h1>
										<motion.form
											className='flex flex-col items-center gap-4'
											key='form'
											variants={textBoxVariant}
											initial='hidden'
											animate='visible'
										>
											<motion.input
												type='text'
												placeholder='enter your email e.g  user@gmail.com'
												className='bg-gray-800 px-2 h-10 rounded-xl'
												variants={listBoxVariant}
											/>
											<motion.select
												name='option'
												id=''
												className='appearance-none bg-green-400 px-2 h-10 rounded-xl w-full'
												variants={listBoxVariant}
											>
												<option value='volunteer'> Volunteer</option>
												<option value='reachout'> Reach out</option>
											</motion.select>
											<motion.textarea
												name='message'
												id='message'
												maxLength={300}
												className='bg-gray-800 rounded-xl max-h-200px px-4 h-24 resize-none'
												placeholder='send us a message'
												variants={listBoxVariant}
											></motion.textarea>
											<motion.button
												className='pointer-events-auto bg-green-400 rounded-xl h-10 w-20 hover:scale-125 duration-200'
												variants={listBoxVariant}
											>
												Send
											</motion.button>
										</motion.form>
									</motion.div>
									<div className='w-full h-full flex justify-center text-[#6b6b6b] text-5xl font-sans font-thin cursor-pointer hover:scale-125 duration-200 '>
										<a
											href='#discover'
											className='flex items-center gap-6 w-max z-50'
										>
											<h1>Discover</h1>
											<div className='w-20 h-20 border border-[#a6a6a6] rounded-full flex items-center justify-center text-3xl font-light text-[#a6a6a6]'>
												<svg
													fill='#a6a6a6'
													height='20px'
													width='20px'
													version='1.1'
													id='Layer_1'
													xmlns='http://www.w3.org/2000/svg'
													xmlns:xlink='http://www.w3.org/1999/xlink'
													viewBox='0 0 511.801 511.801'
													xml:space='preserve'
													stroke='#a6a6a6'
												>
													<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
													<g
														id='SVGRepo_tracerCarrier'
														stroke-linecap='round'
														stroke-linejoin='round'
													></g>
													<g id='SVGRepo_iconCarrier'>
														<path d='M263.535,248.453c-4.16-4.16-10.88-4.16-15.04,0L3.054,493.787c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 c3.947-4.16,3.947-10.667,0-14.827L263.535,248.453z'></path>{' '}
														<path d='M18.201,263.493l237.76-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213c3.947-4.16,3.947-10.667,0-14.827 L263.535,3.12c-4.16-4.16-10.88-4.16-15.04,0L3.054,248.453c-4.053,4.267-3.947,10.987,0.213,15.04 C7.534,267.547,14.041,267.547,18.201,263.493z'></path>{' '}
													</g>
												</svg>
											</div>
										</a>
									</div>
									{/* <Slide/> */}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
				<footer className='px-8 w-full flex justify-end'>
					<p className='text-2xl font-sans font-thin'>{year}</p>
				</footer>
			</div>
		</>
	)
}

// ;<Lottie
// 	animationData={gif2}
// 	loop={true}
// 	className='absolute -bottom-10 right-[0px] w-36 rotate-90 [transform:rotateY(180deg)] [rotate:-90deg]'
// />
