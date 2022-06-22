<script>
    import Calculator from "./Calculator.svelte";
</script>

<div class="flex flex-col font-epicfont justify-center text-center pt-4">
    <div class="text-5xl"><h1>Readings Generator</h1></div>
    <div class="text-2xl"><h1>Be smart, not hardworking.</h1></div>
    <br><br>
    <Calculator/>
    <br><br>
    <div class="text-3xl lg:pl-40 lg:pr-40 lg:text-left">
        What the heck is this?
    </div>
    <div class="text-xl lg:pl-40 lg:pr-40 lg:text-left">
        It's something that extrapolates results.
        Input your desired focal length and number of readings required, press the big red button, and instantly get a set of randomized readings that give a concordant reading that's very close to your desired focal length.
        If you dislike your generated readings, press the button again to generate a new set of randomly generated readings.
        If you messed up this experiment this may come of use to you.
        <br>
        <div class="text-s">Source Code: <a href="https://github.com/BoogieMonster1O1/physicsbad" target="_blank" class="text-blue-600">Github</a></div>
    </div>
    <br>
    <div class="text-xs">
        Copyright © Shrish Deshpande. MIT Licensed.
    </div>
</div>
