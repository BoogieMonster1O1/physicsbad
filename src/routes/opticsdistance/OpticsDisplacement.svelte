<script>
    let numberOfReadings = null;
    let desiredFocalLength = null;

    function generate() {
        if (numberOfReadings == null || desiredFocalLength == null) {
            alert("Please enter appropriate values!");
            return;
        }
        // TODO
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
    <!--TODO-->
    <br><br>
</div>
