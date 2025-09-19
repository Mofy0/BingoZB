	<script >
	import { parse } from "svelte/compiler";
    import jsondata from '../../src/json/bingocards.json';

        console.log(jsondata);
        function increment(e) {
            if(e.target.classList.contains("bg-green-400")) {
                e.target.classList.remove("bg-green-400");
            } else {
                e.target.classList.add("bg-green-400");
            }
        }
        </script>
    
    <div id="BingoDiv" class="w-128 h-128 border-5 border-indigo-600 grid grid-cols-3 text-center text-wrap: wrap-anywhere">
        <button id="BingoBT" class="shadow-md hover:bg-sky-100" on:click={increment}>{jsondata.cards.easy[0].text}</button>
		<button id="BingoBT" class="shadow-md hover:bg-sky-100" on:click={increment}>Dobra cos tu bedzie</button>
		<button id="BingoBT" class="shadow-md hover:bg-sky-100" on:click={increment}>Dobra cos tu bedzie</button>
		<button id="BingoBT" class="shadow-md hover:bg-sky-100" on:click={increment}>Dobra cos tu bedzie</button>
		<button id="BingoBT" class="shadow-md hover:bg-sky-100" on:click={increment}>Dobra cos tu bedzie</button>
		<button id="BingoBT" class="shadow-md hover:bg-sky-100" on:click={increment}>Dobra cos tu bedzie</button>
		<button id="BingoBT" class="shadow-md hover:bg-sky-100" on:click={increment}>Dobra cos tu bedzie</button>
		<button id="BingoBT" class="shadow-md hover:bg-sky-100" on:click={increment} >Dobra cos tu bedzie</button>
		<button id="BingoBT" class="shadow-md hover:bg-sky-100" on:click={increment}>Dobra cos tu bedzie</button>
    </div>