import {writable} from "svelte/store";
import type {UnitQuality} from "../types";

export const scaleCoefficient = writable(2)
export const systemToggle = writable("Imperial")

export const unitQuality = writable<UnitQuality>({
    "experience": "average",
    "quality": 5,
    "hit_mod": 0,
    "rof_mod": 0,
    "point_mod": 1
})
/*
poor 7 hit -3 rof -2
marginal 7 hit-2 rof-1
fair 6 hit-1 rof-0
average 5
good 6
excellent 6
superb 8
 */