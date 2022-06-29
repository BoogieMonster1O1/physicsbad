import { writable } from "svelte/store";
import type { Writable } from "svelte/store";


export const currentTab: Writable<string> = writable("");
