const wrapper = document.getElementById('wrapper');
const topArea = document.getElementById('topArea');
const middleArea = document.getElementById('middleArea');
const bottomArea = document.getElementById('bottomArea');
const plusDiv = document.getElementById('plusDiv');
const plusLogo = document.getElementById('plusLogo');
// const letters = new Set(["a","b","c"]);

console.log(window);
console.log(document);
console.log(window.innerWidth);
console.log(wrapper.style.width);
console.log(wrapper.style);

topList = [];
tasksList = [];
favoriteTasksList = [];




function setUp() {

    // wrapper.style.width = window.innerWidth;
    // wrapper.style.height = window.innerHeight;
    document.body.clientWidth = window.innerWidth;
    document.body.clientHeight = window.innerHeight;
    console.log("new body dimensions: (", document.body.clientHeight, ",", document.body.clientWidth, ")");
    wrapper.style.height = document.body.clientHeight;
    wrapper.style.width = document.body.clientWidth;
}
setUp();

function piexl_To_em(R, P) {
    /*Where,
        R = Required PX Size
        P = Parent PX Size
    */
    const EM = R / P;
    return EM
}






/**Event Listeningers */
window.addEventListener("resize", () => {
    document.body.clientWidth = window.innerWidth;
    document.body.clientHeight = window.innerHeight;
    console.log("new body dimensions: (", document.body.clientHeight, ",", document.body.clientWidth, ")");
    wrapper.style.width = document.body.clientWidth;
    wrapper.style.height = document.body.clientHeight;

})