import type { PageLoad} from "./$types";
import type {NationData} from "../../types";

export const load = (async ({params, fetch}) => {
    const response = await fetch("src/data/EastGermanTOE.json")
    const data: NationData = await response.json()
    return {
        props: { data }
    }
}) satisfies PageLoad
