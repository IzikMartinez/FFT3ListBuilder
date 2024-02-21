<script lang="ts">
    import Range from "../../fragments/Range.svelte";
    import {scaleCoefficient} from "$lib/store";
    import ColumnHeading from "../../fragments/statlines/ColumnHeading.svelte";
    import SubColumnHeading from "../../fragments/statlines/SubColumnHeading.svelte";
    import StatText from "../../fragments/StatText.svelte";

    export let mslRange: string
    export let mslROF: number
    export let mslPen: string
    export let weapon: string

    let mslRangeStart = 0
    let mslRangeEnd = 0
    const splitRange = ()=> {
        let [start, end] = mslRange.split('-')
        if(!start) [start, end] = ["0","0"]
        const outStart = Number(start) * $scaleCoefficient
        const outEnd = Number(end) * $scaleCoefficient
        return [outStart, outEnd]
    }

    const generationStats = (gen: string) => {
        let hit = ""
        let moveShoot = ""
        switch (Number(gen)) {
            case 1:
                hit = "5+"
                moveShoot = "No"
                break;
            case 2:
                hit = "3+"
                moveShoot = "Yes"
                break;
            default:
                hit = "2+"
                moveShoot = "Yes"
                break;
        }
        return [hit, moveShoot]
    }

    function matchPenetration() {
        const regex = /^(\d+\w?)(h?)(\d?)/
        const match = mslPen.match(regex)
        if(!match) {
            throw Error(`No match found for missile penetration${mslPen}`)
        }
        const [, penetration, heat, generation] = match
        const [hit, moveShoot] = generationStats(generation)
        return [penetration, heat, hit, moveShoot]
    }


    let hit = ""
    let moveShoot = ""
    let heat = ""
    let penetration = ""
    $:{
        [mslRangeStart, mslRangeEnd] = splitRange()
    }
    $: {
        [penetration, heat, hit, moveShoot] = matchPenetration()
    }
</script>

<div class="flex flex-col mx-1 text-center">
    <ColumnHeading text={weapon} widthBig={true}/>
    <div class="flex">
        <div class="flex flex-col">
            <SubColumnHeading text="Range"/>
            <div class="flex mt-1 text-left w-26">
                <div class="flex flex-1 w-1/3 py-1 bg-slate-800 rounded-l-md text-white font-600 items-center justify-center text-center">
                    <Range range_in={mslRangeStart} /> -
                    <Range range_in={mslRangeEnd} />
                </div>
            </div>
        </div>
        <div class="flex w-full">
            <div class="w-1/5">
                <SubColumnHeading text="ROF"/>
                <StatText text={String(mslROF)}/>
            </div>
            <div>
                <SubColumnHeading text="PEN"/>
                <StatText text={String(penetration)}/>
            </div>
            <div class="w-1/5">
                <SubColumnHeading text="HIT"/>
                <StatText text={String(hit)}/>
            </div>
            <div class="w-1/5">
                <SubColumnHeading text="M&S"/>
                <StatText text={String(moveShoot)}/>
            </div>
        </div>
    </div>
</div>
