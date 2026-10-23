// LESSON STAGE 2: Add employee API functions here.
// API base: http://localhost:3001
// GET /employees, GET /employees/:id, POST /employees,
// PUT /employees/:id, DELETE /employees/:id

export type Employee = {
  id: string
  name: string
  role: string
  department: string
}

export async function fetchEmployees() : Promise<Employee[]>{
  const res = await fetch('http://localhost:3001/employees')
  if (!res.ok) throw new Error(`Request failed: $res.status`)
  return res.json()

}
