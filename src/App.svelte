<script lang="ts">
  import { onMount } from "svelte";
  import browser from "webextension-polyfill";

  // export let var; // check main.ts if we need to pass in anything
  let onOpenSea: boolean = false;
  let boop: string;

  async function getCurrentTab(): Promise<browser.Tabs.Tab> {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await browser.tabs.query(queryOptions);
    return tab;
  }

  onMount(async () => {
    // get current URL
    let tab = await getCurrentTab();
    console.log(tab);
    boop = tab.url || "served";
  });
</script>

<main>
  boop: {boop}
  {#if onOpenSea}
    <div>Show image</div>
    <div>Link to contract</div>
    <div>TokenId</div>
    <div>Token URI</div>
    <div>Grade</div>
  {:else}
    Forever721 Only supports OpenSea! Read more here: Forever721.xyz
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>
