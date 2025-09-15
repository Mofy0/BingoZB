	<script >
	import { parse } from "svelte/compiler";
    import jsondata from '../../src/json/bingocards.json';

        console.log(jsondata);
        let count = $state(0);        
        console.log();
        function increment() {
            count += 1;
            alert(count);
        }
    </script>
    
    <link rel="stylesheet" href="./src/style.css">
    <div id="BingoDiv" class="w-128 h-128 border-5 border-indigo-600 grid grid-cols-3 text-center ">
        <button id="BingoBT" class="shadow-md hover:bg-sky-100" on:click={increment}>Dobra cos tu bedzie</button>
		<button id="BingoBT" class="shadow-md hover:bg-sky-100">Dobra cos tu bedzie</button>
		<button id="BingoBT" class="shadow-md hover:bg-sky-100">Dobra cos tu bedzie</button>
		<button id="BingoBT" class="shadow-md hover:bg-sky-100">Dobra cos tu bedzie</button>
		<button id="BingoBT" class="shadow-md hover:bg-sky-100">Dobra cos tu bedzie</button>
		<button id="BingoBT" class="shadow-md hover:bg-sky-100">Dobra cos tu bedzie</button>
		<button id="BingoBT" class="shadow-md hover:bg-sky-100">Dobra cos tu bedzie</button>
		<button id="BingoBT" class="shadow-md hover:bg-sky-100">Dobra cos tu bedzie</button>
		<button id="BingoBT" class="shadow-md hover:bg-sky-100">Dobra cos tu bedzie</button>
    </div>