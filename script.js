function getTriangleArea(a, h) {
	if((a <= 0) || (h <= 0)) {
		return("Nieprawidłowe dane")
	}
	return (a * h) / 2
}

console.log(getTriangleArea(10,6))

var triangle1Area = getTriangleArea(10, 15)
var triangle1Area = getTriangleArea(17, 12)
var triangle1Area = getTriangleArea(-666, 15)