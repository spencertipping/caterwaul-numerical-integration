// Numerically-integrated error function | Spencer Tipping
// Licensed under the terms of the MIT source code license

// Introduction.
// This is a potentially useful example of using the numerical integrator. You can pass in a number of steps to use; by default it uses 100.

caterwaul.js_all()(function () {
  caterwaul.numerical_error_function(x, steps) = 2.0 / Math.sqrt(Math.PI) * (caterwaul.numerically_integrate(given.x in Math.exp(-x * x), 0, x, x / (steps || 100)) || 0)})();

// Generated by SDoc 
