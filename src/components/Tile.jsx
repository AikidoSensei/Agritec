import React from 'react'

const Tile = (prop) => {
  return (
		<div className='h-full bg-black w-full rounded-xl flex flex-col justify-between p-4'>
			<h1 className='text-lg md:text-2xl xl:text-5xl self-start'>{prop.number}</h1>
			<div className='self-end'>
				<h2 className='text-sm md:text-lg xl:text-2xl'>{prop.title}</h2>
				<p className='text-[6pt] md:text-xs'>
					{prop.text}
				</p>
			</div>
		</div>
	)
}

export default Tile
