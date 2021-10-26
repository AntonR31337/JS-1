"use strict";





console.log(sum(2,4));
console.log(subtraction(4,1));
console.log(multiplication(2,4));
console.log(separation(2,4));

/**
 * Функция складывает два числа
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Возвращаем результат складывания двух чисел
 */
function sum(num1, num2) {
  return num1 + num2;
}
/**
 * Функция вычитает два числа
 * @param {number} num1
 * @param {number} num2 Причем если num2 больше чем num1, то вычитание
 * производим из большего числа
 * @returns {number} Возвращаем результат вычитания двух чисел
 */
function subtraction(num1, num2) {
  if (num1 > num2) {
    return num1 - num2;
  }
  return num2 - num1;
}
/**
 * Функция умножает два числа
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Возвращаем результат умножения двух чисел
 */
function multiplication(num1, num2) {
  return num1 * num2;
}
/**
 * Функция делит два числа
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Возвращаем результат деления двух чисел
 */
function separation(num1, num2) {
  return num1 / num2;
}