<script>
    import {generateReadings, chadRound} from "./calc.ts"

    let numberOfReadings = null;
    let desiredFocalLength = null;
    let readings = null;
    let averageFocus = 0;

    function generate() {
        if (numberOfReadings == null || desiredFocalLength == null) {
            alert("Please enter appropriate values!");
            return;
        }
        readings = generateReadings(numberOfReadings, desiredFocalLength);
        averageFocus = chadRound((readings.map(reading => reading.focalLength).reduce((a, b) => a + b)) / readings.length, 2);
    }
</script>

<div class="flex flex-col justify-center">
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
                    <td class="px-7">a</td>
                    <td class="px-7">b</td>
                    <td class="px-7">c</td>
                    <td class="px-7">u</td>
                    <td class="px-7">v</td>
                    <td class="px-7">f</td>
                </tr>
                {#each readings as reading}
                    <tr class="border border-gray-300">
                        <td>{chadRound(reading.aObjectPos, 1)}</td>
                        <td>{chadRound(reading.cImagePos, 1)}</td>
                        <td>{chadRound(reading.bLensPos, 1)}</td>
                        <td>{chadRound(reading.uObjectDistance, 1)}</td>
                        <td>{chadRound(reading.vImageDistance, 1)}</td>
                        <td>{chadRound(reading.focalLength, 2)}</td>
                    </tr>
                {/each}
            </table>
        </div>
        <br>
        <div>
            <div class="justify-center">
                <ul>
                    <li>a - Position of object on scale</li>
                    <li>b - Position of image on scale</li>
                    <li>c - Position of lens on scale</li>
                    <li>u - Distance from lens to object</li>
                    <li>v - Distance from lens to image</li>
                    <li>f - Focal length</li>
                </ul>
            </div>
        </div>
        <div><h1>All values are in centimeters unless otherwise stated.</h1></div>
        <div><h1>Average Focus: {averageFocus}</h1></div>
    {/if}
    <br><br>
</div>
