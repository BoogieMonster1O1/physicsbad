<script lang="ts">
    import {generateReadings, Reading} from "./calc";
    import {chadRound} from "../mathutil";

    let numberOfReadings = null;
    let desiredFocalLength = null;
    let readings: Reading[] = null;
    let averageFocus = 0;

    function generate() {
        if (numberOfReadings == null || desiredFocalLength == null) {
            alert("Please enter appropriate values!");
            return;
        }
        readings = generateReadings(desiredFocalLength, numberOfReadings);
        averageFocus = chadRound((readings.map(reading => reading.focalLength).reduce((a, b) => a + b)) / readings.length, 2);
    }
</script>

<div class="flex flex-col justify-center">
    <h1 class="lg:text-2xl">Focal Length using Displacement method</h1>
    <div class="flex flex-col justify-center">
        <div><input bind:value={desiredFocalLength} class="text-2xl border-2 m-4 w-[80%]" type="number" min="0" id="desiredFocalLength" name="desiredFocalLength" placeholder="Desired Focal Length (cm)"></div>
        <div class="text-xl"><input bind:value={numberOfReadings} class="w-[80%] text-2xl border-2 m-2" type="number" min="1" max="7" id="numberOfReadings" name="numberOfReadings" placeholder="Number of Readings"></div>
        <div class="m-4 text-2xl"><button on:click="{generate}" type="button" class="bg-red-500 px-5 text-white rounded">Generate</button></div>
    </div>
    <br><br>
    {#if readings != null}
        <div class="flex justify-center">
            <table class="border border-gray-400 lg:text-xl">
                <tr class="bg-blue-100 border border-gray-400">
                    <td class="px-7">d1</td>
                    <td class="px-7">d2</td>
                    <td class="px-7">d</td>
                    <td class="px-7">x</td>
                    <td class="px-7">f</td>
                </tr>
                {#each readings as reading}
                    <tr class="border border-gray-300">
                        <td>{reading.firstPos}</td>
                        <td>{reading.secondPos}</td>
                        <td>{reading.distance}</td>
                        <td>{reading.objectImageDistance}</td>
                        <td>{reading.focalLength}</td>
                    </tr>
                {/each}
            </table>
        </div>
        <br>
        <div>
            <div class="justify-center">
                <ul>
                    <li>d1 - First lens position</li>
                    <li>d2 - Second lens position</li>
                    <li>d - Distance between lens positions</li>
                    <li>x - Distance between object and image</li>
                    <li>f - Focal length</li>
                </ul>
            </div>
        </div>
        <div><h1>All values are in centimeters unless otherwise stated.</h1></div>
        <div><h1>Average Focus: {averageFocus}</h1></div>
    {/if}
    <br><br>
</div>
