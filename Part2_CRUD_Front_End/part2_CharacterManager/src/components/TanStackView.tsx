import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../api/characterApi";
import CharacterList from "./CharacterList";

function TanStackView()
{
    const {data, isPending, isError, error} = useQuery({
        queryKey: ['characters'],
        queryFn: getCharacters,
        staleTime: 30_000     // 30 seconds
    })

    if(isPending) return <p>Loading Characters</p>
    if(isError) return <p>{error.message}</p>

    return(
        <section>
            <h2>TanStack Query</h2>
            <CharacterList characters={data}/>
        </section>
    )
}

export default TanStackView