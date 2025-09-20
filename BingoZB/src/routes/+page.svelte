	
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
        function randomizeCards() {
            let buttons = document.querySelectorAll("#BingoBT");
            let easyCount = parseInt(document.getElementById("easyCount").value);
            let mediumCount = parseInt(document.getElementById("mediumCount").value);
            let hardCount = parseInt(document.getElementById("hardCount").value);

            if(easyCount + mediumCount + hardCount !== 9) {
                alert("The total number of cards must be 9.");
                return;
            }
            buttons.forEach((button) => {
                button.classList.remove("bg-green-400");
            });
            let selectedCards = [];
            let easyCards = jsondata.cards.easy.slice();
            let mediumCards = jsondata.cards.medium.slice();
            let hardCards = jsondata.cards.hard.slice();
            for (let i = 0; i < 4; i++) {
                let randomIndex = Math.floor(Math.random() * easyCards.length);
                selectedCards.push(easyCards[randomIndex]);
                easyCards.splice(randomIndex, 1);
            }
            for (let i = 0; i < 3; i++) {
                let randomIndex = Math.floor(Math.random() * mediumCards.length);
                selectedCards.push(mediumCards[randomIndex]);
                mediumCards.splice(randomIndex, 1);
            }
            for (let i = 0; i < 2; i++) {
                let randomIndex = Math.floor(Math.random() * hardCards.length);
                selectedCards.push(hardCards[randomIndex]);
                hardCards.splice(randomIndex, 1);
            }
            selectedCards.sort(() => Math.random() - 0.5);
            buttons.forEach((button, index) => {
                button.textContent = selectedCards[index].text;
            });
        }
        </script>
        <div id="RandomizeCards">
            <input type="number" name="easyCount" id="easyCount" min="0" max="9" value="0">
            <input type="number" name="mediumCount" id="mediumCount" min="0" max="9" value="0">
            <input type="number" name="hardCount" id="hardCount" min="0" max="9" value="0">
            <button id="RandomizeButton" class="" on:click={randomizeCards}>Randomize Cards</button>
        </div>
    <div class="flex justify-center items-center h-screen appearance-none ">
    <div id="BingoDiv" class="p-2 space-x-2 space-y-2 w-128 h-128 border-5 border-indigo-600 grid grid-cols-3 text-center text-wrap: wrap-anywhere">
        <button id="BingoBT" class="shadow-lg hover:bg-stone-200" on:click={increment}>{jsondata.cards.easy[0].text}</button>
		<button id="BingoBT" class="shadow-lg hover:bg-stone-200" on:click={increment}>{jsondata.cards.easy[1].text}</button>
		<button id="BingoBT" class="shadow-lg hover:bg-stone-200" on:click={increment}>{jsondata.cards.hard[0].text}</button>
		<button id="BingoBT" class="shadow-lg hover:bg-stone-200" on:click={increment}>Dobra cos tu bedzie</button>
		<button id="BingoBT" class="shadow-lg hover:bg-stone-200" on:click={increment}>Dobra cos tu bedzie</button>
		<button id="BingoBT" class="shadow-lg hover:bg-stone-200" on:click={increment}>Dobra cos tu bedzie</button>
		<button id="BingoBT" class="shadow-lg hover:bg-stone-200" on:click={increment}>Dobra cos tu bedzie</button>
		<button id="BingoBT" class="shadow-lg hover:bg-stone-200" on:click={increment}>Dobra cos tu bedzie</button>
        <button id="BingoBT" class="shadow-lg hover:bg-stone-200" on:click={increment}>Dobra cos tu bedzie</button>
        <button id="BingoBT" class="visibility: hidden" on:click={increment}>Dobra cos tu bedzie</button>
    </div>
    </div>