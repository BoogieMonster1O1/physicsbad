<script lang="ts">
    // import {generateReadings} from "./calc.ts"
    import {chadRound} from "../mathutil.ts";

    let numberOfReadings: number = null;
    let desiredResistance: number = null;
    let wireLength: number = null;

    function generate() {
        if (numberOfReadings == null || desiredResistance == null || wireLength == null) {
            alert("Please enter appropriate values!");
            return;
        }
        // readings = generateReadings(numberOfReadings, desiredFocalLength);
        // averageFocus = chadRound((readings.map(reading => reading.focalLength).reduce((a, b) => a + b)) / readings.length, 2);
    }
</script>

<div class="flex flex-col justify-center">
    <h1 class="lg:text-2xl">Resistance Per Unit Length</h1>
    <div class="flex flex-col justify-center">
        <div><input bind:value={desiredResistance} class="text-2xl border-2 m-4 w-[80%]" type="number" min="0" id="desiredResistance" name="desiredResistance" placeholder="Desired Resistance"></div>
        <div><input bind:value={wireLength} class="text-2xl border-2 m-4 w-[80%]" type="number" min="0" id="wireLength" name="wireLength" placeholder="Wire Length / Jockey Position"></div>
        <div class="text-xl"><input bind:value={numberOfReadings} class="w-[80%] text-2xl border-2 m-2" type="number" min="1" max="7" id="numberOfReadings" name="numberOfReadings" placeholder="Number of Readings"></div>
        <div class="m-4 text-2xl"><button on:click="{generate}" type="button" class="bg-red-500 px-5 text-white rounded">Generate</button></div>
    </div>
    <br><br>
</div>
