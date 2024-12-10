import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const Discover = (props) => {
  return (
		<AnimatePresence>
			<motion.div
				key='discover'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 2 }}
				className='w-full flex flex-col items-center '
			>
				<h1 className='text-[#6b6b6b] lg:text-xl text-center font-sans font-thin '>
					{props.text}
				</h1>
				<motion.div
					className=' bg-[#a6a6a6] h-[1px] w-[60%] mt-6 border-[#a6a6a6]'
					key='stroke'
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 1, type: 'spring' }}
				/>
			</motion.div>
		</AnimatePresence>
	)
}

export default Discover
