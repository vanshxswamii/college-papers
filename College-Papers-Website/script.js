const searchInput = document.getElementById("searchInput");
const branchFilter = document.getElementById("branchFilter");
const yearFilter = document.getElementById("yearFilter");
const papers = document.querySelectorAll(".paper-card");

function filterPapers() {
const searchValue = searchInput.value.toLowerCase();
const branchValue = branchFilter.value;
const yearValue = yearFilter.value;

papers.forEach(paper => {
const text = paper.innerText.toLowerCase();
const branch = paper.dataset.branch;
const year = paper.dataset.year;

const matchesSearch = text.includes(searchValue);
const matchesBranch = !branchValue || branch === branchValue;
const matchesYear = !yearValue || year === yearValue;

if(matchesSearch && matchesBranch && matchesYear){
paper.style.display = "block";
}else{
paper.style.display = "none";
}

});
}

searchInput.addEventListener("keyup", filterPapers);
branchFilter.addEventListener("change", filterPapers);
yearFilter.addEventListener("change", filterPapers);