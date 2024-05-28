function twoSum(nums, target) {
    for (let num1 = 0; num1 < nums.length; num1++) {
        for (let num2 = num1 + 1; num2 < nums.length; num2++) {
            if (nums[num1] + nums[num2] == target) {
                return [num1, num2];
            }
        }
    }
    return [];
}



console.log(twoSum([2,7,11,15],9))

/*  Autre façon pour tester et afficher le résultat:

nums = [2,7,11,15]
target = 9

nums = [3,2,4]
target = 6

console.log(twoSum(nums,target))
*/