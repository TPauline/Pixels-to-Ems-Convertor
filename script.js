const wrapper = document.getElementById('wrapper');
const topArea = document.getElementById('mainArea');
const defaultInput = document.getElementById('default');
const convertPX = document.getElementById('convertPX');
const convertEM = document.getElementById('convertEM');
const calResult = document.getElementById('result');
console.log(navigator)

const fontSize = Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0])
let defaultSize = null

console.log(fontSize)
console.log(window);
console.log(document);
console.log(window.innerWidth);
console.log(wrapper.style.width);
console.log(wrapper.style);

function setUp() {

    wrapper.style.width = window.innerWidth;
    wrapper.style.height = window.innerHeight;
    document.body.clientWidth = window.innerWidth;
    document.body.clientHeight = window.innerHeight;
    console.log("new body dimensions: (", document.body.clientHeight, ",", document.body.clientWidth, ")");
    wrapper.style.height = document.body.clientHeight;
    wrapper.style.width = document.body.clientWidth;
}
setUp();

function enableDisable(node) {
    if (node.disabled) {
        node.disabled = false;
    } else {
        node.disabled = true;
    }
}
enableDisable(convertPX)
enableDisable(convertEM)



function piexl_To_em(R, P) {
    /*Where,
        R = Required PX Size
        P = Parent PX Size
    */
    // const EM = R / P;
    if(!isNaN(P)){
    const EM = R / P;
    console.log(`converted to em is ${EM}em`)
    return EM}
}


function em_To_piexl(EM, P) {
    if(!isNaN(P)){
    const R = EM * P;
    console.log(`converted to em is ${R}px`)
    return EM
    }
}

piexl_To_em(16, fontSize)
em_To_piexl(16, fontSize)

/**Event Listeningers */
window.addEventListener("resize", () => {
    setUp()
})

// defaultInput.addEventListener("change", () => {
//     console.log("enter default");

//     convertPX.disabled = false
//     convertEM.disabled = true
// });

// convertPX.addEventListener("click", () => {
//     console.log("enter px");

//     convertPX.disabled = false
//     convertEM.disabled = true
// });

// convertEM.addEventListener("click", () => {
//     console.log("enter em");

//     convertPX.disabled = true
//     convertEM.disabled = false
// });


// document.addEventListener('click',  (e) => {
//     console.log(e.target)
//     target =e.target;
//     if( e.target.id == "convertPX" ){
//         // convertPX.disabled = true
//         enableDisable(e.target);
//     }
// });

// document.addEventListener('mouseup',  (e) => {
//     let target = e.target
//     if( target == convertPX || target == convertEM){
//         enableDisable(target)
//         enableDisable(target)
//     }
// });

document.addEventListener('click', (e) => {
    let target = e.target;
    if (target == convertPX) {
        convertPX.disabled = false;
        convertEM.disabled = true;
    } else if (target == convertEM) {
        convertPX.disabled = true;
        convertEM.disabled = false;
    }
});

document.addEventListener('input', (e) => {
    let target = e.target;
    console.log("**", target, target.value)
    if (target == defaultInput) {
        if (!isNaN(target.value)) {
            defaultSize = target.value
            if (!isNaN(convertPX.textContent)) {
                let px = em_To_piexl(target.value, defaultSize)
                calResult.textContent = `Result: ${px}em`;
            } else if (!isNaN(convertEM.textContent)) {
                let em = piexl_To_em(target.value, defaultSize)
                calResult.textContent = `Result: ${em}em`;
            }else{
                calResult.textContent = `Result: `;
            }
        }
    } else if (target == convertPX) {
        convertEM.value = ""
        if (!isNaN(target.value) && !isNaN(defaultInput.value) && !isNaN(defaultSize)) {
            let em = piexl_To_em(target.value, defaultSize)
            calResult.textContent = `Result: ${em}em`;
        } else {
            calResult.textContent = `Result: 0px`;
        }
    } else if (target == convertEM) {
        convertPX.value = ""
        if (!isNaN(target.value) && !isNaN(defaultInput.value) && !isNaN(defaultSize)) {
            let px = em_To_piexl(target.value, defaultSize)
            calResult.textContent = `Result: ${px}em`;
        } else {
            calResult.textContent = `Result: 0em`;
        }

    }
});