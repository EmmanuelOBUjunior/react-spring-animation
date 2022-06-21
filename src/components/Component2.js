import React from 'react'
import { useSpring, animated } from 'react-spring'

const Component2 = () => {
	const props = useSpring({
		to: {opacity: 1}, 
		from: {opacity: 0},
		delay: 2000, 
		duration: 2000
	})
  return (
	<animated.div style = {props}>
		<div style={c1Style}>
			<h1>Component 2</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorem distinctio iste blanditiis, nulla nesciunt sequi rem perferendis! Enim ut eius nam at optio numquam ea, cupiditate expedita voluptate alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, commodi laudantium odit hic excepturi ea fugit mollitia earum, officia et, vel voluptate accusamus repudiandae perferendis. Ad reprehenderit ex vel sequi.</p>	
		</div>
	</animated.div>
  )
}

const c1Style = {
	background: 'slateblue',
	color: 'white',
	padding: '1.5rem'
}

export default Component2

