
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <main>
      <h1>Page not found</h1>
      <Link to="/">Back home</Link>
    </main>
  )
}

export default NotFound
