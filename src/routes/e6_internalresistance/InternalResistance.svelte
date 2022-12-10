<script>
    import {generateReadings} from "./calc";
    import {chadRound} from "../mathutil";

    let numberOfReadings = null;
    let internalResistance = null;
    let readings = null;
    let finalInternalResistance = 0;

    function generate() {
        if (numberOfReadings == null || internalResistance == null) {
            alert("Please enter appropriate values!");
            return;
        }
        readings = generateReadings(internalResistance, numberOfReadings);
        finalInternalResistance = chadRound(readings.map(r => r.internalResistance).reduce((a, b) => a + b) / readings.length, 2);
    }
</script>

<div class="flex flex-col justify-center">
    <h1 class="lg:text-2xl">Finding Internal Resistance of a given cell</h1>
    <h3>EMF of Daniel Cell = 2 ohm, Resistance of Leclanche Cell = 5 to 10 ohm</h3>
    <div class="flex flex-col justify-center">
        <div><input bind:value={internalResistance} class="text-2xl border-2 m-4 w-[80%]" type="number" min="0" id="internalResistance" name="internalResistance" placeholder="Internal Resistance of cell"></div>
        <div class="text-xl"><input bind:value={numberOfReadings} class="w-[80%] text-2xl border-2 m-2" type="number" min="1" max="7" id="numberOfReadings" name="numberOfReadings" placeholder="Number of Readings"></div>
        <div class="m-4 text-2xl"><button on:click="{generate}" type="button" class="bg-red-500 px-5 text-white rounded">Generate</button></div>
    </div>
    <br><br>
    {#if readings != null}
        <div class="flex justify-center">
            <table class="border border-gray-400 lg:text-xl">
                <tr class="bg-blue-100 border border-gray-400">
                    <td class="px-7">Null point (key open)</td>
                    <td class="px-7">Null point (key closed)</td>
                    <td class="px-7">Resistance Box</td>
                    <td class="px-7">Internal Resistance</td>
                </tr>
                {#each readings as reading}
                    <tr class="border border-gray-300">
                        <td>{reading.lengthK1}</td>
                        <td>{reading.lengthK2}</td>
                        <td>{reading.resistanceBox}</td>
                        <td>{reading.internalResistance}</td>
                    </tr>
                {/each}
            </table>
        </div>
        <br>
        <div><h1>Internal Resistance: {finalInternalResistance}</h1></div>
    {/if}
    <br><br>
</div>
