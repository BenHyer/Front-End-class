import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchEmployees,
  fetchEmployee,
  createEmployee,
  deleteEmployee,
  updateEmployee,
} from "./api";
import { useState } from "react";

// //Import useQuery from @tanstack/react-query and fetchEmployees from ./api.
// 2. Inside the App component, call useQuery with an options object containing queryKey: ['employees'] and queryFn: fetchEmployees. Destructure data, isPending, and isError from the result.
// 3. Before the main JSX, return early with "Loading…" while isPending is true and an error message when isError is true. Otherwise, map over data to list each employee's name.

export default function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");

  const { data, isPending, isError } = useQuery({
    queryKey: ["employees"],
    queryFn: fetchEmployees,
    staleTime: 30_000,
  });

  const { data: selectedEmployee } = useQuery({
    queryKey: ["employees", selectedId],
    queryFn: () => fetchEmployee(selectedId!),
    enabled: selectedId !== null,
  });

  const queryClient = useQueryClient();

  const addEmployee = useMutation({
    mutationFn: createEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });

  const removeEmployee = useMutation({
    mutationFn: deleteEmployee,
    onSuccess: () => {
      setSelectedId(null);
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });

  const editEmployee = useMutation({
    mutationFn: updateEmployee,
    onSuccess: (updated) => {
      queryClient.setQueryData(["employees", updated.id], updated);
      queryClient.invalidateQueries({ queryKey: ["employees"], exact: true });
    },
  });

  function handleAdd(e: React.FormEvent) {
    e.preventDefault(); // stop the page from reloading
    addEmployee.mutate({ name, role, department });
  }

  if (isPending) return <p>Loading…</p>;

  if (isError) return <p>Could not load employees</p>;

  return (
    <main>
      <h1>Employee Manager</h1>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {data
          .filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
          .map((employee) => (
            <li key={employee.id} onClick={() => setSelectedId(employee.id)}>
              {" "}
              {employee.name}
            </li>
          ))}
      </ul>

      {selectedEmployee && (
        <section>
          <h2>{selectedEmployee.name}</h2>
          <p>Role: {selectedEmployee.role}</p>

          <p>Department: {selectedEmployee.department}</p>
          <button onClick={() => removeEmployee.mutate(selectedEmployee.id)}>
            Delete
          </button>
          <button
            onClick={() => {
              setName(selectedEmployee.name);
              setRole(selectedEmployee.role);
              setDepartment(selectedEmployee.department);
            }}
          >
            Edit
          </button>
        </section>
      )}

      <form onSubmit={handleAdd}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role"
        />
        <input
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          placeholder="department"
        />
        <button type="submit">Add</button>
        {selectedEmployee && (
          <button
            type="button"
            onClick={() =>
              editEmployee.mutate({
                id: selectedEmployee.id,
                name,
                role,
                department,
              })
            }
          >
            Save changes
          </button>
        )}
      </form>
    </main>
  );
}
