// Grundumsatz bei Männern (Kalorien je Tag)
// 664,7 + (13,7 * Körpergewicht in kg) + (5 * Körpergröße in cm) – (6,8 * Alter in Jahren) = Grundumsatz
// Grundumsatz bei Frauen (Kalorien je Tag)
// 655,1 + (9,6 * Körpergewicht in kg) + (1,8 * Körpergröße in cm) – (4,7 * Alter in Jahren) = Grundumsatz

// ! Das Ergebnis wird in Kilokalorien ausgegeben.

// 1kcal = 4,184kj


let inputSize = document.getElementById("inputSize");
let inputAge = document.getElementById("inputAge");
let inputWeight = document.getElementById("inputWeight");
let male = document.getElementById("male");
let female = document.getElementById("female");
let activity = document.getElementById("act");
let output_kcal_base = document.getElementById("kcal_base");
let output_kj_base = document.getElementById("kj_base");
let output_kcal_total = document.getElementById("kcal_total");
let output_kj_total = document.getElementById("kj_total");
let kcal_base, kcal_total, kj_base, kj_total;


console.log(inputSize, inputAge, inputWeight, male, female, activity, kcal_base, kj_base, kcal_total, kj_total);

let calc = () => {
    console.log("test");
    if (male.checked) {
        console.log("male true");
        kcal_base = 664.7 + (13.7 * Number(inputWeight.value) + (5 * Number(inputSize.value)) - (6.8 * Number(inputAge.value)));
        console.log(kcal_base);

    }
    else {
        console.log("female true");
        kcal_base = 655.1 + (9.6 * Number(inputWeight.value) + (1.8 * Number(inputSize.value)) - (4.7 * Number(inputAge.value)));
        console.log(kcal_base);
    }
    console.log(act.value);

    switch (act.value) {
        case ".95":
            console.log("Schlafen");
            kcal_total = kcal_base * .95;
            break;
        case "1.2":
            console.log("Sitzen oder Liegen");
            kcal_total = kcal_base * 1.2;
            break;
        case "1.5":
            console.log("Sitzende Tätigkeit");
            kcal_total = kcal_base * 1.5;
            break;
        case "1.7":
            console.log("Gehende/Stehende Tätigkeit");
            kcal_total = kcal_base * 1.7;
            break;
        case "1.9":
            console.log("Gehende/Stehende Tätigkeit");
            kcal_total = kcal_base * 1.9;
            break;
        default:
            console.log("Körperlich anstrengnede Tätigkeit");
            kcal_total = kcal_base * 2.2;
            ;

    }
    output_kcal_base.innerHTML = `${kcal_base.toFixed(2)}`;
    output_kcal_total.innerHTML = `${kcal_total.toFixed(2)}`;
    output_kj_base.innerHTML = `${(kcal_base * 4.184).toFixed(2)}`;
    output_kj_total.innerHTML = `${(kcal_total * 4.184).toFixed(2)}`;

}


