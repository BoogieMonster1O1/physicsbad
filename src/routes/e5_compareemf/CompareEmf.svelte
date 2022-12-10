<script>
    import {generateReadings} from "./calc";
    import {chadRound} from "../mathutil";

    let numberOfReadings = null;
    let e1Voltage = null;
    let e2Voltage = null;
    let readings = null;
    let finalRatio = 0;

    function generate() {
        if (numberOfReadings == null || e1Voltage == null || e2Voltage == null) {
            alert("Please enter appropriate values!");
            return;
        }
        readings = generateReadings(e1Voltage, e2Voltage, numberOfReadings);
        finalRatio = chadRound(readings.map(r => r.ratio).reduce((a, b) => a + b) / readings.length, 2);
    }
</script>

<div class="flex flex-col justify-center">
    <h1 class="lg:text-2xl">Compare EMF of two given cells</h1>
    <h3>EMF of Daniel Cell = 1.1 V, EMF of Leclanche Cell = 1.5 V</h3>
    <div class="flex flex-col justify-center">
        <div><input bind:value={e1Voltage} class="text-2xl border-2 m-4 w-[80%]" type="number" min="0" id="e1Voltage" name="desiredFocalLength" placeholder="EMF of first cell"></div>
        <div><input bind:value={e2Voltage} class="text-2xl border-2 m-4 w-[80%]" type="number" min="0" id="e2Voltage" name="desiredFocalLength" placeholder="EMF of second cell"></div>
        <div class="text-xl"><input bind:value={numberOfReadings} class="w-[80%] text-2xl border-2 m-2" type="number" min="1" max="7" id="numberOfReadings" name="numberOfReadings" placeholder="Number of Readings"></div>
        <div class="m-4 text-2xl"><button on:click="{generate}" type="button" class="bg-red-500 px-5 text-white rounded">Generate</button></div>
    </div>
    <br><br>
    {#if readings != null}
        <div class="flex justify-center">
            <table class="border border-gray-400 lg:text-xl">
                <tr class="bg-blue-100 border border-gray-400">
                    <td class="px-7">l1</td>
                    <td class="px-7">l2</td>
                    <td class="px-7">l1 / l2</td>
                </tr>
                {#each readings as reading}
                    <tr class="border border-gray-300">
                        <td>{reading.l1}</td>
                        <td>{reading.l2}</td>
                        <td>{reading.ratio}</td>
                    </tr>
                {/each}
            </table>
        </div>
        <br>
        <div>
            <div class="justify-center">
                <ul>
                    <li>l1 - First cell balancing length</li>
                    <li>l2 - Second cell balancing length</li>
                </ul>
            </div>
        </div>
        <div><h1>Ratio: {finalRatio}</h1></div>
    {/if}
    <br><br>
</div>
