<script async>
    import {onMount} from "svelte";
    import config from "$lib/config.js";

    export let data

    let mounted = false;

    const getStockData = async () => {
        const res = await fetch(`https://api.polygon.io/v1/open-close/${data.symbol.toUpperCase()}/2024-06-07?adjusted=true&apiKey=YzQk9Qzpr5jIGOUhPH3p5YQywSjizNEp`)
        const json = await res.json()
        console.log(json)
        return json
    }
    let stockData = getStockData()
    $: data, stockData = getStockData()

    const getInfoData = async () => {
        const res = await fetch(`${config.api}/stock/${data.symbol}/generalInfo`)
        const json = await res.json()
        return json
    }
    let infoData = getInfoData()
    $: data, infoData = getInfoData()

    onMount(() => {
        mounted = true
    })
</script>

<div class="w-3/4 m-auto mt-5">
    <div>
        <div class="bg-stock-pattern object-cover w-full m-auto h-72 p-5 rounded-3xl"/>
        <div class="flex flex-row mx-5 place-items-center relative -translate-y-16">
            {#await infoData}
                <span class="inline w-24 h-24 p-3 loading loading-spinner text-primary"></span>
            {:then infoData}
                <img src="https://logo.clearbit.com/{infoData.info.website}" alt="{data.symbol}"
                     class="inline w-24 h-24 p-3 rounded-2xl">
            {:catch error}
                <div class="text-red-400 w-24 h-24">{error}</div>
            {/await}
            <div>
                <h1 class="font-bold text-4xl">{data.name}</h1>
                <h3 class="font-semibold text-2xl">{data.symbol}</h3>
            </div>
        </div>
    </div>

    <div class="p-5 m-5 bg-base-300 -translate-y-16">
        <div class="stats shadow flex w-full">
            {#await stockData}
                <div class="stat">
                    <span class="loading loading-spinner text-primary"></span>
                </div>
            {:then {open, close, afterHours}}
                <div class="stat">
                    <div class="stat-title">Opening Price</div>
                    <div class="stat-value">${open.toFixed(2)}</div>
                    <div class="stat-desc">Morning of 7 June</div>
                </div>
                <div class="stat">
                    <div class="stat-title">Closing Price</div>
                    <div class="stat-value {open > close ? 'text-red-400' : 'text-green-400'}">${close.toFixed(2)}</div>
                    <div class="stat-desc">Evening of 7 June</div>
                </div>
                <div class="stat">
                    <div class="stat-title">Aftermarket Price</div>
                    <div class="stat-value">${afterHours.toFixed(2)}</div>
                    <div class="stat-desc">After Hours of 7 June</div>
                </div>
                <div class="stat">
                    <div class="stat-title">Future Capital Gains</div>
                    <div class="stat-value">Positive</div>
                    <div class="stat-desc">In the next few months</div>
                </div>
            {:catch error}
                <div class="stat">
                    <div class="stat-title">Error loading data</div>
                    <div class="stat-desc">{error}</div>
                </div>
            {/await}
        </div>

        <div class="p-5 my-5 bg-base-100 rounded-xl">
            {#await infoData}
                <span class="loading loading-spinner text-primary"></span>
            {:then {graph}}
                <img src="data:image/jpeg;charset=utf-8;base64,{graph}" alt={data.symbol} class="w-full ">
            {:catch error}
                <div class="text-red-400">{error}</div>
            {/await}
        </div>

        <div class="stats shadow flex w-full">
            {#await infoData}
                <div class="stat">
                    <span class="loading loading-spinner text-primary"></span>
                </div>
            {:then {graphData}}
                <div class="stat">
                    <div class="stat-title">Month Start Price</div>
                    <div class="stat-value">${graphData.start.toFixed(2)}</div>
                    <div class="stat-desc">{graphData.startDate.split('T')[0]}</div>
                </div>
                <div class="stat">
                    <div class="stat-title">Month End Price</div>
                    <div class="stat-value {graphData.start > graphData.end ? 'text-red-400' : 'text-green-400'}">
                        ${graphData.end.toFixed(2)}</div>
                    <div class="stat-desc">{graphData.endDate.split('T')[0]}</div>
                </div>
                <div class="stat">
                    <div class="stat-title">Month Mean</div>
                    <div class="stat-value">${graphData.mean.toFixed(2)}</div>
                </div>
                <div class="stat">
                    <div class="stat-title">Month Median</div>
                    <div class="stat-value">${graphData.median.toFixed(2)}</div>
                </div>
                <div class="stat">
                    <div class="stat-title">Month Mode</div>
                    <div class="stat-value">${graphData.mode.toFixed(2)}</div>
                </div>
            {:catch error}
                <div class="stat">
                    <div class="stat-title">Error loading data</div>
                    <div class="stat-desc">{error}</div>
                </div>
            {/await}
        </div>
    </div>


</div>