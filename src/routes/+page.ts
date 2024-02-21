import type {TankType} from "../types";

export async function load({fetch}:{fetch:any}) {
    const response = await fetch("src/data/Soviets.json")
    const data:TankType[] = await response.json()
    return {
        units: { data }
    };
}
