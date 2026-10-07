// Part 6: shown for any URL that doesn't match another route
//
// TODO:
// 1. In App.tsx, add a "catch-all" route whose path is "*" and whose element is <NotFound />
// 2. Here: show a friendly message plus a <Link> back home
// 3. Optional: use the `useLocation()` hook to show which path wasn't found
function NotFound() {
  return (
    <main>
      <h1>Page not found</h1>
      {/* TODO */}
    </main>
  )
}

export default NotFound
