const dom = ((params) => {
    return document.querySelector(params);
})

function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg;
    }
    return (total / theArgs.length).toFixed(2);
}

dom("#btnKhoi1").addEventListener("click", () => {
    let a = +dom("#inpToan").value,
        b = +dom("#inpLy").value,
        c = +dom("#inpHoa").value;
    dom("#tbKhoi1").innerHTML = sum(a, b, c)
})

dom("#btnKhoi2").addEventListener("click", () => {
    let a = +dom("#inpVan").value,
        b = +dom("#inpSu").value,
        c = +dom("#inpDia").value,
        d = +dom("#inpEnglish").value;
    dom("#tbKhoi2").innerHTML = sum(a, b, c, d)
})
