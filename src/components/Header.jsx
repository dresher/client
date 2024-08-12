import { Link } from 'react-router-dom'
export default function Header() {
	return (
		<div className='bg-slate-200'>
			<div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
				<Link to='/' className='font-bold'>
					Mern-Tailwind
				</Link>
				<ul className='flex gap-4 items-center'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/profile'>Profile</Link>
					</li>
					<li>
						<Link to='/register'>Register</Link>
					</li>
					<li>
						<Link to='/login'>Login</Link>
					</li>
					<li>
						<Link
							to='https://github.com/adrian-kowalski/mern-tailwind'
							target='_blank'
							rel='noopener noreferrer'>
							GitHub
						</Link>
					</li>
					<li>
						<button className='bg-white text-slate-900 hover:bg-slate-700 px-4 py-2 rounded'>
							Sign Up
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}
