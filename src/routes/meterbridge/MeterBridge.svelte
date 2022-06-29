<script>
    import {generateReadings} from "./calc.ts";
    import {chadRound} from "../mathutil.ts";

    let numberOfReadings = null;
    let desiredResistance = null;
    let readings = null;
    let averageResistance = 0;

    function generate() {
        if (numberOfReadings == null || desiredResistance == null) {
            alert("Please enter appropriate values!");
            return;
        }
        if (numberOfReadings > 8) {
            numberOfReadings = 8;
        }
        readings = generateReadings(desiredResistance, numberOfReadings).sort((a, b) => a.resistanceBox > b.resistanceBox ? 1 : -1);
        averageResistance = chadRound((readings.map(reading => reading.unknown).reduce((a, b) => a + b)) / readings.length, 2);
    }
</script>

<div class="flex flex-col justify-center">
    <h1 class="lg:text-2xl">Finding resistance using Meter Bridge</h1>
    <div class="flex flex-col justify-center">
        <div><input bind:value={desiredResistance} class="text-2xl border-2 m-4 w-[80%]" type="number" min="0" id="desiredFocalLength" name="desiredFocalLength" placeholder="Desired Resistance (Ω)"></div>
        <div class="text-xl"><input bind:value={numberOfReadings} class="w-[80%] text-2xl border-2 m-2" type="number" min="1" max="10" id="numberOfReadings" name="numberOfReadings" placeholder="Number of Readings"></div>
        <div class="m-4 text-2xl"><button on:click="{generate}" type="button" class="bg-red-500 px-5 text-white rounded">Generate</button></div>
    </div>
    <br><br>
    {#if readings != null}
        <div class="flex justify-center">
            <table class="border border-gray-400 lg:text-xl">
                <tr class="bg-blue-100 border border-gray-400">
                    <td class="px-7">R</td>
                    <td class="px-7">l</td>
                    <td class="px-7">100-l</td>
                    <td class="px-7">S</td>
                </tr>
                {#each readings as reading}
                    <tr class="border border-gray-300">
                        <td>{reading.resistanceBox}</td>
                        <td>{reading.length}</td>
                        <td>{chadRound(reading.lengthComp, 2)}</td>
                        <td>{reading.unknown}</td>
                    </tr>
                {/each}
            </table>
        </div>
        <br>
        <div>
            <div class="justify-center">
                <ul>
                    <li>R - Resistance Box</li>
                    <li>l - Zero deflection point on scale (cm)</li>
                    <li>S - Unknown Resistance</li>
                </ul>
            </div>
        </div>
        <div><h1>All values are in Ω unless otherwise stated.</h1></div>
        <div><h1>Average Resistance: {averageResistance}</h1></div>
    {/if}
    <br><br>
</div>
