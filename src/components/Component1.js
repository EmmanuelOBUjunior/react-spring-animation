import { Spring, animated} from 'react-spring'
import React from 'react'

const Component1 = () => {
	
  return (
	<Spring
	from = {{opacity: 0, marginTop: -500}}
	to = {{opacity: 1, marginTop: 0}}
	// config = {{delay: 1000, duration: 1000}}
	>
		{
			props => (
				<animated.dev style={props}>
				<div style={c1Style}>
					<h1>Component 1</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorem distinctio iste blanditiis, nulla nesciunt sequi rem perferendis! Enim ut eius nam at optio numquam ea, cupiditate expedita voluptate alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, commodi laudantium odit hic excepturi ea fugit mollitia earum, officia et, vel voluptate accusamus repudiandae perferendis. Ad reprehenderit ex vel sequi.</p>	
			
					<div style={c1Counter}>
						<h1></h1>
					</div>
				</div>
				</animated.dev>
			)
		}
	
		
	</Spring>
  )
}

const c1Style = {
	background: 'steelblue',
	color: 'white',
	padding: '1.5rem'
}

const c1Counter = {
	background: 'black',
	color: "white",
	width: '100px',
	textAlign: "center",
	borderRadius: '50px',
	margin: "1rem auto"
}

export default Component1

