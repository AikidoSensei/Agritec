import React, { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import '../../src/index.css'

import { Autoplay, Parallax, Pagination, Navigation } from 'swiper/modules'

export default function Slide() {
	return (
		<>
			<Swiper
				style={{
					'--swiper-navigation-color': '#fff',
					'--swiper-pagination-color': '#fff',
					'--swiper-navigation-size': '20px',
				}}
				speed={600}
				parallax={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Parallax, Pagination, Navigation]}
				className='mySwiper '
				autoplay
			>
				<div
					slot='container-start'
					className='parallax-bg'
					style={{
						'background-image': 'url(/images/background.jpg)',
					}}
					data-swiper-parallax='-23%'
				></div>
				<SwiperSlide className=' bg-red-500'>
					<div
						className='title text-xl md:text-3xl font-light w-full'
						data-swiper-parallax='-300'
					>
						Our Mission
					</div>

					<div
						className='text text-[8pt] md:text-sm w-full'
						data-swiper-parallax='-100'
					>
						<p>
							To bridge the gap between agriculture and technology, delivering
							impactful solutions that empower stakeholders and promote
							sustainability.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='title text-xl md:text-3xl font-light w-full'
						data-swiper-parallax='-300'
					>
						Our Vision
					</div>

					<div
						className='text text-[8pt] md:text-sm '
						data-swiper-parallax='-100'
					>
						<p>
							A world where technology enables food security, fosters economic
							empowerment, and nurtures the environment—one farm at a time.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='title text-md md:text-3xl font-light w-full'
						data-swiper-parallax='-300'
					>
					</div>

					<div
						className='text text-[5pt] md:text-sm '
						data-swiper-parallax='-100'
					>
						<p>
							From smallholder farmers to large-scale agribusinesses, we are
							making a difference. By providing cutting-edge tools, data-driven
							insights, and accessible technology, we help our partners overcome
							challenges, improve yields, and unlock new opportunities for
							growth. Together, we’re building a future where agriculture works
							for everyone.
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	)
}
