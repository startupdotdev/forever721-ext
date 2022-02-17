<script lang="ts">
  import { onMount } from "svelte";
  import browser from "webextension-polyfill";

  const OPENSEA_URL_PATTERN = /https:\/\/opensea.io\/assets\/(\w*)\/(\w*)/;

  // export let var; // check main.ts if we need to pass in anything
  let onOpenSea: boolean = false;

  // browsers.Tabs.Tab
  // url: "https://opensea.io/assets/0xd2f668a8461d6761115daf8aeb3cdf5f40c532c6/3038"
  // title: "Futo #3038 - Karafuru | OpenSea"

  let url: string;
  let title: string;
  let tokenId: string;
  let tokenUri: string;
  let contractAddress: string;

  // document.querySelectorAll(".item--summary img.Image--image")[0].src
  let imgSrc: string;

  async function getCurrentTab(): Promise<browser.Tabs.Tab> {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await browser.tabs.query(queryOptions);
    return tab;
  }

  onMount(async () => {
    let params = await getCurrentTab();
    url = params.url;
    title = params.title;

    [, contractAddress, tokenId] = params?.url.match(OPENSEA_URL_PATTERN);
    onOpenSea = url.indexOf("https://opensea.io/") === 0;
  });
</script>

<main>
  {#if onOpenSea}
    <div>
      <div>Show image</div>
      <div>
        {url}
      </div>
    </div>
    <div>
      <div>Title</div>
      <div>
        {title}
      </div>
    </div>
    <div>
      <div>Link to contract</div>
      <div>
        {url}
      </div>
    </div>
    <div>
      <div>TokenId</div>
      <div>
        {tokenId}
      </div>
    </div>
    <div>
      <div>Token URI</div>
      <div>
        {tokenUri}
      </div>
    </div>
    <div>
      <div>Contract Address</div>
      <div>
        {contractAddress}
      </div>
    </div>
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
