function make_shirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'i love typescript'; }
    console.log("you have order a ".concat(size, ",shirt that says ").concat(text));
}
make_shirt();
make_shirt('medium');
make_shirt("small", "i need a big shirt to wear");
