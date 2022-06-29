
<script>
    import { getContext } from 'svelte';
    import { TABS } from './TabView.svelte';
    import Fa from 'svelte-fa/src/fa.svelte'
    export let icon
    export let name
    const tab = {};
    const { registerTab, selectTab, selectedTab } = getContext(TABS);
    registerTab(tab);
</script>

<style>
    .selected {
        color: rgb(1 132 240)
    }
</style>

<div class:selected="{$selectedTab === tab}" class="flex basis-1/2 border-none justify-center items-center" on:click="{() => selectTab(tab)}">
    <div class="flex flex-col text-2xl">
        <Fa icon={icon}/>
        <div class="text-xl">{name}</div>
    </div>
</div>
