"use strict";
var sqrt_input = document.querySelector("#sqrt-number");
var sqrt_result = document.querySelector("#sqrt-result");
var fact_input = document.querySelector("#fact-number");
var fact_result = document.querySelector("#fact-result");
var log_input = document.querySelector("#log-number");
var log_result = document.querySelector("#log-result");
var base_input = document.querySelector("#base-number");
var exp_input = document.querySelector("#exp-number");
var exp_result = document.querySelector("#exp-result");
function sqrt() {
    if (sqrt_input.value.length === 0)
        sqrt_result.value = "";
    var num = parseFloat(sqrt_input.value);
    sqrt_result.value = Math.sqrt(num).toString();
}
function fact() {
    var fact = 1;
    if (fact_input.value.length === 0)
        fact_input.value = "";
    var num = parseFloat(fact_input.value);
    for (var i = 2; i <= num; i++)
        fact *= i;
    fact_result.value = fact.toString();
}
function log() {
    if (log_input.value.length === 0)
        log_result.value = "";
    var num = parseFloat(log_input.value);
    log_result.value = Math.log(num).toString();
}
function exp() {
    if (base_input.value.length === 0 || exp_input.value.length === 0)
        exp_result.value = "";
    var x = parseFloat(base_input.value);
    var y = parseFloat(exp_input.value);
    exp_result.value = Math.pow(x, y).toString();
}
