import { useQuery } from "@tanstack/react-query"
import { fetchEmployees } from "./api"


// //Import useQuery from @tanstack/react-query and fetchEmployees from ./api.
// 2. Inside the App component, call useQuery with an options object containing queryKey: ['employees'] and queryFn: fetchEmployees. Destructure data, isPending, and isError from the result.
// 3. Before the main JSX, return early with "Loading…" while isPending is true and an error message when isError is true. Otherwise, map over data to list each employee's name.

export default function App() {

  const { data, isPending, isError } = useQuery({
  queryKey: ['employees'],
  queryFn: fetchEmployees,
  staleTime: 30_000
})
if (isPending) return <p>Loading…</p>

if (isError) return <p>Could not load employees</p>

  return (
    <main>
      <h1>Employee Manager</h1>
      <ul>
        {data.map((employee) => (
          <li key={employee.id} > {employee.name}</li>
        ))}
      </ul>
    
    </main>
  )
}
