let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];

const rounded = () => {
    array.forEach(element => {

        console.log(Math.round(element))
    });
}

rounded()
