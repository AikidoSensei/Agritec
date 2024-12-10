import React from 'react'
import Slide from './Slider'
import Tile from './Tile'
import { AnimatePresence, motion } from 'framer-motion'
import { listVariant, boxVariant } from './variants'
const Grid = () => {
  return (
		<div className='h-full w-full py-6 sm:py-8 lg:py-12'>
			<div className='mx-auto max-w-screen-2xl w-full h-full'>
				<div className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4 xl:gap-4 '>
					<a className='group relative flex h-48 items-end overflow-hidden rounded-lg md:h-80'>
						<div className='pointer-events-none absolute inset-0 flex justify-between gap-2 md:gap-3 xl:gap-4'>
							<motion.div
								key='smallgrid'
								variants={boxVariant}
								// viewport={{ once: true }}
								initial='hidden'
								whileInView='visible'
								className='flex flex-col w-1/3 gap-2 md:gap-3 xl:gap-4'
							>
								<motion.div
									variants={listVariant}
									className='bg-green-400 h-1/2 rounded-xl flex justify-center items-center  pointer-events-auto'
								>
									<svg
										fill='#ffffff'
										className='w-12  md:w-14 xl:w-20 hover:scale-110 duration-200 cursor-pointer'
										version='1.1'
										id='Capa_1'
										xmlns='http://www.w3.org/2000/svg'
										xmlns:xlink='http://www.w3.org/1999/xlink'
										viewBox='0 0 297 297'
										xml:space='preserve'
									>
										<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
										<g
											id='SVGRepo_tracerCarrier'
											stroke-linecap='round'
											stroke-linejoin='round'
										></g>
										<g id='SVGRepo_iconCarrier'>
											<path d='M47.156,188.376c0,2.861,1.109,14.855,9.212,29.09c6.86,12.052,19.88,26.147,43.843,29.262v40.243 c0,5.538,4.49,10.029,10.029,10.029c5.538,0,10.028-4.491,10.028-10.029v-49.644c0-5.538-4.49-10.029-10.028-10.029 c-16.487,0-28.643-6.465-36.128-19.216c-5.521-9.402-6.922-17.345-6.922-20.844c0-21.168,0-82.294,0-82.294 c0-1.782,0-6.519,8.237-6.519c8.235,0,8.235,4.736,8.235,6.519v34.548c0,2.736,1.117,5.354,3.095,7.246 c1.977,1.891,4.639,2.905,7.374,2.773c0.024-0.011,5.862,0.022,13.244,4.191c11.333,6.402,20.478,19.249,26.445,37.151 c1.752,5.255,7.432,8.097,12.686,6.344c5.255-1.752,8.095-7.432,6.343-12.686c-12.976-38.932-35.79-50.37-49.128-53.701V38.037 c0-2.17,0-5.803,8.236-5.803c8.235,0,8.235,3.633,8.235,5.803v54.73c0,5.539,4.491,10.029,10.029,10.029s10.028-4.49,10.028-10.029 V25.86c0-2.17,0-5.803,8.236-5.803c8.235,0,8.235,3.633,8.235,5.803v66.907c0,5.539,4.491,10.029,10.029,10.029 s10.029-4.49,10.029-10.029v-54.73c0-2.17,0-5.803,8.235-5.803c8.236,0,8.236,3.633,8.236,5.803v71.278 c0,5.538,4.491,10.029,10.029,10.029c5.539,0,10.029-4.491,10.029-10.029V71.849c0-1.782,0-6.519,8.236-6.519 c8.236,0,8.244,4.736,8.244,6.519v116.402c0.011,0.177,0.717,18.087-9.919,29.341c-6.086,6.441-15.135,9.706-26.894,9.706 c-5.539,0-10.029,4.491-10.029,10.029v49.644c0,5.538,4.49,10.029,10.029,10.029c5.538,0,10.028-4.491,10.028-10.029v-40.253 c12.868-1.712,23.415-6.855,31.443-15.35c15.825-16.745,15.516-40.586,15.391-43.899V71.849c0-15.647-11.636-26.577-28.294-26.577 c-2.912,0-5.667,0.342-8.236,0.977v-8.211c0-15.469-11.371-25.86-28.295-25.86c-3.986,0-7.66,0.583-10.954,1.667 C169.732,5.253,160.514,0,148.487,0c-12.028,0-21.245,5.253-25.575,13.844c-3.294-1.084-6.968-1.667-10.954-1.667 c-16.924,0-28.295,10.392-28.295,25.86v41.307c-2.569-0.635-5.324-0.976-8.235-0.976c-16.66,0-28.295,10.93-28.295,26.577 C47.132,104.944,47.156,166.737,47.156,188.376z'></path>
										</g>
									</svg>
								</motion.div>
								<motion.div
									variants={listVariant}
									className='bg-red-500 h-1/2 rounded-xl flex justify-center items-center pointer-events-auto'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='none'
										stroke='#ffffff'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
										className='w-12  md:w-14 xl:w-20 hover:scale-110 duration-200 cursor-pointer'
									>
										<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
										<g
											id='SVGRepo_tracerCarrier'
											stroke-linecap='round'
											stroke-linejoin='round'
										></g>
										<g id='SVGRepo_iconCarrier'>
											<path d='M19 22H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2z'></path>
											<line x1='16' y1='2' x2='16' y2='4'></line>
											<line x1='8' y1='2' x2='8' y2='4'></line>
											<circle cx='12' cy='11' r='3'></circle>
											<path d='M17 18.5c-1.4-1-3.1-1.5-5-1.5s-3.6.6-5 1.5'></path>
										</g>
									</svg>
								</motion.div>
							</motion.div>
							<motion.div
								initial={{ y: '-50px' }}
								whileInView={{ y: 0 }}
								// viewport={{ once: true }}
								transition={{ duration: 1, type: 'spring' }}
								className='h-full bg-black w-2/3 rounded-xl flex flex-col justify-between p-4'
							>
								<h1 className='text-lg md:text-2xl xl:text-5xl self-start '>
									100
								</h1>
								<div className='self-end'>
									<h2 className='text-sm md:text-lg xl:text-2xl'>Dedication</h2>
									<p className='text-[6pt] md:text-xs'>
										We promote eco-friendly practices that protect the
										environment and future generations.
									</p>
								</div>
							</motion.div>
						</div>
					</a>

					<motion.a
						key={'sliderx'}
						initial={{ x: 200 }}
						whileInView={{ x: 0 }}
						// viewport={{ once: true }}
						transition={{ duration: 1, type: 'spring' }}
						className='group relative flex h-48 items-end overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80 '
					>
						<Slide />
					</motion.a>

					<motion.a
						key={'innovate'}
						initial={{ x: -200 }}
						whileInView={{ x: 0 }}
						// viewport={{ once: true }}
						transition={{ duration: 1, type: 'spring' }}
						className='group relative flex h-48 items-end overflow-hidden rounded-lg  shadow-lg md:col-span-2 md:h-80'
					>
						<img
							src='https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000'
							loading='lazy'
							alt='Photo by Martin Sanchez'
							className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
						/>

						<div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'>
							<Tile
								number='23'
								title='Innovative Solutions'
								text='We use technology to simplify and scale farming operations'
							/>
						</div>
					</motion.a>

					<motion.a
						key={'centric'}
						initial={{ y: 200 }}
						whileInView={{ y: 0 }}
						// viewport={{ once: true }}
						transition={{ duration: 1, type: 'spring' }}
						className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80'
					>
						<img
							src='/textures/DSC01103.jpg'
							loading='lazy'
							alt='Photo by Lorenzo Herrera'
							className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
						/>

						<div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'>
							<Tile
								number='12'
								title='Farmer-Centric Approach'
								text='Our solutions are built to address real problems faced by farmers and agribusinesses.'
							/>
						</div>
					</motion.a>
				</div>
			</div>
		</div>
	)
}

export default Grid
