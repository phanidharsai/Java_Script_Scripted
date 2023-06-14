// given an array print all possible subsets of the array in an array
// input: [1,2,3] ====> output: [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]

function subsets(array) {
  let res = [];
  let temp = [];
  function recursiveSubsets(array, i) {
    console.log(i);
    if (i === array.length) {
      console.log(`in base condition ${i} `, temp);
      return res.push([...temp]);
    }

    temp.push(array[i]);
    console.log(`including call ${i}`, temp);
    recursiveSubsets(array, i + 1);
    temp.pop();
    console.log(`excluding call ${i}`, temp);
    recursiveSubsets(array, i + 1);
  }
  recursiveSubsets(array, 0);
  return res;
}

console.log(subsets([1, 2, 3]));
