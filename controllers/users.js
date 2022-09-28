const express = require('express'); //Exportar express

function sumar(req, res, next) {
    const n1 =parseInt(req.params.n1);
    const n2 =parseInt(req.params.n2);
    const resultado = n1 + n2;
    res.send(`Resultado => ${resultado}`);
}

function multiplicar(req, res, next) {
    const n1 = parseInt(req.body.n1);
    const n2 = parseInt(req.body.n2);
    const resultado = n1 * n2;
    res.send(`Resultado => ${resultado}`);
}

function dividir(req, res, next) {
    const n1 = parseInt(req.body.n1);
    const n2 = parseInt(req.body.n2);
    const resultado = n1 / n2;
    res.send(`Resultado => ${resultado}`);
}

function potencia(req, res, next) {
    const n1 = parseInt(req.body.n1);
    const n2 = parseInt(req.body.n2);
    const resultado = Math.pow(n1,n2);
    res.send(`Resultado => ${resultado}`);
}

function restar(req, res, next) {
    const n1 =parseInt(req.params.n1);
    const n2 =parseInt(req.params.n2);
    const resultado = n1 - n2;
    res.send(`Resultado => ${resultado}`);
}

module.exports = {sumar, multiplicar, dividir, potencia, restar};
