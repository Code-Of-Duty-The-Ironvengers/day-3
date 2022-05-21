const arr = [1, 2, 3];

function customIndexOf(array, value) {
  let indexOfElementWeAreLookingFor = -1;
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      indexOfElementWeAreLookingFor = i;
    }
  }

  return indexOfElementWeAreLookingFor;
}

test("returns the -1 if element is not in array", function () {
  const result = -1;
  const array = [1, 3, 1000, 1002];

  const afterCallingFunction = customIndexOf(array, 2000);

  expect(afterCallingFunction).toBe(result);

  // customIndexOf([1, 3, 1000, 1002], 2000)
});

test("should return correct index if value is in array", function () {
  const result = 2;
  const array = [0, 50, 1];

  const afterCallingFunction = customIndexOf(array, 1);

  expect(afterCallingFunction).toBe(result);
});
