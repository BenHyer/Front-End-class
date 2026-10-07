// Part 2: Navigation
// A reusable nav bar that appears on every page: Home | Pokemon | About
//
// TODO:
// 1. Import `Link` (or `NavLink`) from 'react-router-dom'
//    - Do NOT use plain <a href="..."> tags: those make the browser reload the page
//    - `NavLink` is like `Link` but knows when its route is active (handy for styling)
// 2. Render one link per page, using the `to` prop for the path ("/", "/pokemon", "/about")
// 3. Render <NavBar /> once in App.tsx, OUTSIDE your <Routes>, so it stays on every page

import { Link } from 'react-router-dom'


function NavBar() {
  return <nav>
    <Link to="/">Home</Link> |{' '} <Link to="/pokemon">Pokemon</Link> |{' '}<Link to="/about">About</Link>
    </nav>
}

export default NavBar
