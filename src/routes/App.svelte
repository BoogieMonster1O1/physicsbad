<script>
    import {TabView, TabList, TabPanel, Tab} from "./lib/tabs.ts";
    import {faMagnifyingGlass, faPencilRuler, faBolt, faMagnifyingGlassLocation} from "@fortawesome/free-solid-svg-icons/index.es";
    import OpticsUV from "./opticsuv/OpticsUV.svelte";
    import MeterBridge from "./meterbridge/MeterBridge.svelte";
    import OpticsDisplacement from "./opticsdistance/OpticsDisplacement.svelte";
    import Resistance from "./resistance/Resistance.svelte";
</script>

<svelte:head>
    <title>{`potatoes`}</title>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</svelte:head>

<main>
    <div class="flex flex-col font-epicfont justify-center text-center pt-4">
        <header class="fixed top-0 flex justify-center flex-col text-center w-full border-b border-gray-400 bg-white">
            <div class="text-5xl"><h1>Readings Generator</h1></div>
            <div class="text-2xl"><h1>Be smart, not hardworking.</h1></div>
        </header>
        <br><br>
        <br><br><br>
        <br><br>
        <TabView>
            <TabList>
                <Tab name="Optics UV" icon={faMagnifyingGlass} />
                <Tab name="Meter Bridge" icon={faPencilRuler} />
                <Tab name="Resistance/Length" icon={faBolt} />
                <Tab name="Optics Distance" icon={faMagnifyingGlassLocation} />
            </TabList>

            <TabPanel>
                <OpticsUV/>
            </TabPanel>

            <TabPanel>
                <MeterBridge/>
            </TabPanel>

            <TabPanel>
                <Resistance/> <!--TODO-->
            </TabPanel>

            <TabPanel>
                <OpticsDisplacement/>
            </TabPanel>

            <div class="text-3xl lg:pl-40 lg:pr-40 lg:text-left">
                What the heck is this?
            </div>
            <div class="text-xl lg:pl-40 lg:pr-40 lg:text-left">
                It creates the things that create results.
                Input whatever is necessary and number of readings required, press the big red button, and instantly get a set of randomized readings that give a concordant reading that's very close to your desired whatever.
                If you dislike your generated readings, press the button again to generate a new set of randomly generated readings.
                If you messed up this experiment this may come of use to you.
                <br>
                <div class="text-s">Source Code: <a href="https://github.com/BoogieMonster1O1/physicsbad" target="_blank" class="text-blue-600">Github</a></div>
            </div>
            <div class="text-xs">
                Copyright © Shrish Deshpande. MIT Licensed.
            </div>
            <br><br>
            <br><br>
        </TabView>
    </div>
</main>
