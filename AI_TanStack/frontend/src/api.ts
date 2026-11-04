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

export async function fetchEmployees() : Promise<Employee[]>
{
  const res = await fetch('http://localhost:3001/employees')
  if (!res.ok) throw new Error(`Request failed: ${res.status}`)
  return res.json()

}


export async function fetchEmployee(id: string): Promise<Employee>
{
  const emp = await fetch(`http://localhost:3001/employees/${id}`)
  if (!emp.ok) throw new Error(`Request failed: ${emp.status}`)
  return emp.json()
}

export async function createEmployee(employee: Omit<Employee, 'id'>): Promise<Employee> {
  const res = await fetch('http://localhost:3001/employees', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(employee),
  })
  if (!res.ok) throw new Error(`Request failed: ${res.status}`)
  return res.json()
}

export async function deleteEmployee(id: string): Promise<void> {
  const res = await fetch(`http://localhost:3001/employees/${id}`, {
    method: 'DELETE',
  })
  if (!res.ok) throw new Error(`Request failed: ${res.status}`)
}

export async function updateEmployee(employee: Employee): Promise<Employee> {
  const res = await fetch(`http://localhost:3001/employees/${employee.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(employee),
  })
  if (!res.ok) throw new Error(`Request failed: ${res.status}`)
  return res.json()
}
