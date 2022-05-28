// 1-masala
// let nums = [2, 7, 11, 15],
//   target = 9;
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] + nums[i + 1] == target) {
//     console.log(`[${i},${i + 1}]`);
//   }
// }

// const twoSum = function (nums, target) {
//   let x;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] + nums[i + 1] == target) {
//       x = i;
//     }
//   }
//   let result = `[${x},${x + 1}]`;
//   return result;
// };

// let nums = [3, 2, 4];
// let target = 6;

// console.log(twoSum(nums, target));

// 9-masala

var isPalindrome = function (x) {
  x = x.toString();
  let arr = [];
  for (let i = 0, j = x.length - 1; i < x.length, j >= 0; i++, j--) {
    if (x[i] == x[j]) {
      arr.push(1);
    }
  }
  if (arr.length >= Math.trunc(x.length / 2)) {
    return "true";
  } else return "false";
};

console.log(isPalindrome(122));
