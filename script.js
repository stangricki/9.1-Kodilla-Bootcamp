function getTriangleArea(a, h) {
  if ((a <= 0) || (h <= 0)) {
    return ("Nieprawidłowe dane")
  }
  return (a * h) / 2
}

console.log(getTriangleArea(10, 6))

var triangleAreaFirst = getTriangleArea(10, 15)
var triangleAreaSecond = getTriangleArea(17, 12)
var triangleAreaThird = getTriangleArea(-666, 15)