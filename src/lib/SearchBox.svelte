<script>
    import symbols from "$lib/stockSymbols.json"

    let search;
    let searchText = "";

    $: matching = Object.keys(symbols).map(symbol => {
        if (symbol.includes(searchText.toUpperCase())) {
            return symbol
        }
    }).filter(symbol => {
        if (typeof symbol != 'undefined') {
            return symbol
        }
    })

    $: shownData = matching.map(symbol => {
        return [symbol, `${symbol}: ${symbols[symbol]}`]
    })
</script>

<button class="btn btn-ghost btn-circle" on:click={() => {search.showModal()}}>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
    </svg>
</button>

<dialog id="searchDialog" class="modal modal-top max-w-2xl place-items-center m-auto mb-48 " bind:this={search}>
    <div class="modal-box rounded-2xl">
        <h3 class="font-bold text-lg">Search for stock symbols</h3>
        <p>Search for any stock symbol you want! (A stock symbol is usually 2-6 letters, like AAPL)</p>

        <div class="modal-action w-full">
            <label class="input input-bordered flex items-center w-full">
                <input type="text" class="grow" placeholder="Search" bind:value={searchText}/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                     class="w-4 h-4 opacity-70">
                    <path fill-rule="evenodd"
                          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                          clip-rule="evenodd"/>
                </svg>
            </label>
            <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
            </form>
        </div>
        <br>
        <ul class="menu bg-base-200 rounded-box overflow-scroll max-h-72 w-full">
            {#each shownData as symbol}
                <li class=""><a href={`/stock/${symbol[0]}`}>{symbol[1]}</a></li>
            {/each}
        </ul>
    </div>
</dialog>