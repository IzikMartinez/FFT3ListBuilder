import type { PageLoad} from "./$types";
import type {Vehicle} from "../types";

export const load = (async ({params, fetch}) => {
    const response = await fetch("src/data/Soviets.json")
    const data: Vehicle[] = await response.json()
    return {
        units: { data }
    }
}) satisfies PageLoad