// Part 5: list of Pokemon at "/pokemon", each one links to "/pokemon/<name>"
//
// API: https://pokeapi.co/api/v2/pokemon?limit=151
//   returns { results: [{ name: "bulbasaur", url: "..." }, ...] }
//
// TODO:
// 1. Define a small type for one list item ({ name: string; url: string })
// 2. State: the list, a loading flag, and an error message (useState x3)
// 3. useEffect with an empty dependency array -> fetch the list once on mount
//    - check `response.ok` before calling `.json()` (fetch does NOT throw on 404/500)
//    - wrap in try/catch for network failures
// 4. Render: loading message / error message / a <ul> of items
// 5. Each item is a <Link> whose `to` is built from the name, e.g. `/pokemon/${...}`
//    - remember a `key` prop on each <li>

function PokemonList() {
  return (
    <main>
      <h1>Pokemon</h1>
      {/* TODO */}
    </main>
  )
}

export default PokemonList
