// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
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
  const governmentTaxes = baseOfTriangle * hourlyWage * 0.18

  // output
  document.getElementById("salary").innerHTML =
    "Your payment will be: " + " $" + yourWage
  document.getElementById("salary").innerHTML =
    "The government will take: " + " $" + governmentTaxes
}
