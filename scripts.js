const container = document.getElementById("inner-container");
const button = document.getElementById("resize");
const initModal = document.getElementById("init-modal");

let isExpanded = false;
let loading = false;

const toggleHeight = () => {
    isExpanded ? container.style.height = "20vh": container.style.height = "80vh";
    isExpanded ? button.innerHTML = "Show More": button.innerHTML = "Show Less"
    isExpanded = !isExpanded;
}
const setAnimes = (animeList) => {
    for(let i = 0; i < animeList.length; i++){
        const listItem = document.createElement("div");
        listItem.classList.add("list-item");
        nameContainer = document.createElement("div");
        nameContainer.classList.add("list-detail");
        nameContainer.innerHTML = `Name: ${animeList[i].anime}`;
        characterContainer = document.createElement("div");
        characterContainer.classList.add("list-detail");
        characterContainer.innerHTML = `Character: ${animeList[i].character}`;
        quoteContainer = document.createElement("div");
        quoteContainer.classList.add("list-detail");
        quoteContainer.innerHTML = `Quote: ${animeList[i].quote}`;

        listItem.appendChild(nameContainer);
        listItem.appendChild(characterContainer);
        listItem.appendChild(quoteContainer);
        container.appendChild(listItem)
    }
}

const init = () => {
    if(loading) return
    loading = true
    fetch("https://animechan.vercel.app/api/quotes").then(res => {
        res.json().then(data => {
            setAnimes(data);
            initModal.style.display = "none";
            button.style.display = "block"
            container.style.display = "block"
            container.style.display = "block"
        })
    })
}
