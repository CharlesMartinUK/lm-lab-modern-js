// Instructions can be found in rest_parameters.md

export function add(...p) {
  // Add a loop here
  let r = 0;

  for (const i of p) {
    r += i;
  }

  return r;
}

add(1, 2, 3, 4, 5);

//module.exports = add;