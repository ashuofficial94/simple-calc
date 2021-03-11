const sqrt_input = document.querySelector("#sqrt-number")! as HTMLInputElement;
const sqrt_result = document.querySelector("#sqrt-result")! as HTMLInputElement;
const fact_input = document.querySelector("#fact-number")! as HTMLInputElement;
const fact_result = document.querySelector("#fact-result")! as HTMLInputElement;
const log_input = document.querySelector("#log-number")! as HTMLInputElement;
const log_result = document.querySelector("#log-result")! as HTMLInputElement;
const base_input = document.querySelector("#base-number")! as HTMLInputElement;
const exp_input = document.querySelector("#exp-number")! as HTMLInputElement;
const exp_result = document.querySelector("#exp-result")! as HTMLInputElement;

function sqrt() {
    if (sqrt_input.value.length === 0) sqrt_result.value = "";
    const num = parseFloat(sqrt_input.value);
    sqrt_result.value = Math.sqrt(num).toString();
}

function fact() {
    let fact = 1;
    if (fact_input.value.length === 0) fact_input.value = "";
    const num = parseFloat(fact_input.value);
    for (let i = 2; i <= num; i++) fact *= i;
    fact_result.value = fact.toString();
}

function log() {
    if (log_input.value.length === 0) log_result.value = "";
    const num = parseFloat(log_input.value);
    log_result.value = Math.log(num).toString();
}

function exp() {
    if (base_input.value.length === 0 || exp_input.value.length === 0) exp_result.value = "";
    const x = parseFloat(base_input.value);
    const y = parseFloat(exp_input.value);
    exp_result.value = Math.pow(x, y).toString();
}
