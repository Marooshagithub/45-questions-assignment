function createCar(manufacturer, model, optional) {
    return {
        menufacturer: menufacturer,
        model: model,
        optional: optional
    };
}
var mycar = createCar("toyota", "corolla", { color: "silver", year: "2024" });
console.log(mycar);
