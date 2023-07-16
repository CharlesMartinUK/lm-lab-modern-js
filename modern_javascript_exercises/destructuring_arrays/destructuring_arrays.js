// Instructions can be found in destructuring_arrays.md

export function sequence(order) {
  /*
  const first = order[0];
  const second = order[1];
  const third = order[2];
	*/
  const [first, second, third] = order;

  //console.log(first)
  return first + ", " + second + ", " + third;
}