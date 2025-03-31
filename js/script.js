// Copyright (c) 2020 . Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: mar 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates Salary.
 */
function calculateSalary() {
  // input
  const hoursWorked = parseFloat(document.getElementById("hours-worked").value)
  const hourlyWage = parseFloat(document.getElementById("hourly-wage").value)
  // process (corrected formula)
  const yourWage = hoursWorked * hourlyWage * (100 - 0.18)
  const governmentTaxes = hoursWorked * hourlyWage * 0.18

  // output
  document.getElementById("salary").innerHTML =
    "Your payment will be: " + " $" + `${yourWage.toFixed(2)}`
  document.getElementById("tax").innerHTML =
    "The government will take: " + " $" + `${governmentTaxes.toFixed(2)}`
}
