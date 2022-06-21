import React from 'react'
import { useSpring, animated } from 'react-spring'

const Component1 = () => {
	const props = useSpring({
		to: {opacity: 1, marginTop: 0}, 
		from: {opacity: 0, marginTop: -500},
		delay: 500})
  return (
	<animated.div style = {props}>
		<div style={c1Style}>
			<h1>Component 1</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorem distinctio iste blanditiis, nulla nesciunt sequi rem perferendis! Enim ut eius nam at optio numquam ea, cupiditate expedita voluptate alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, commodi laudantium odit hic excepturi ea fugit mollitia earum, officia et, vel voluptate accusamus repudiandae perferendis. Ad reprehenderit ex vel sequi.</p>	
		</div>
	</animated.div>
  )
}

const c1Style = {
	background: 'steelblue',
	color: 'white',
	padding: '1.5rem'
}

export default Component1

