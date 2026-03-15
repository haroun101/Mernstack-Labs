// var name = prompt();
// function sayHello(name){
//     console.log(name);
// }
// sayHello(name);

// ################################################

// var a = +prompt();
// var b = +prompt();
// function sum (a , b){
//     return a+b;
// }
// console.log(sum (a , b));   

// ################################################

// var nums = [ 1 , 2 ,3 ,4 ,5];
// for(var i = 0 ; i<nums.length ;i++){
//     console.log(nums[i]);
// } 

// ################################################

// var nums = [5 , 15 , 2 , 10];
// function large(nums){
//     var maxi = -1 ;
//     for(var i = 0 ; i<nums.length ;i++){
//         if(maxi < nums[i]) maxi = nums[i];
//     }
//     return maxi;
// }
// console.log(large(nums));


// ################################################

var nums = [5 , 15 , 2 , 10 , 4 , 2];
function evenCount(nums){
    var cnt = 0;
    for(var i = 0 ; i<nums.length ;i++){
        if((nums[i]%2 == 0)) cnt++;
    }
    return cnt;
}
console.log(evenCount(nums));

// #####################################################

// var nums = [1 , 2 ,3 ,4 ];
// function reversed(nums){
//     var rev = [];
//     for(var i = nums.length-1 ; i>=0 ;i--){
//         rev.push(nums[i]);
//     }
//     return rev;
// }
// console.log(reversed(nums));

// #######################################################

// var nums = [1 , 2 ,3 ,4 , 5];
// function sum (nums){
//     var totalSum = 0;
//     for(var i = 0 ; i<nums.length ;i++){
//         totalSum += nums[i];
//     }
//     return totalSum;
// }
// console.log(sum(nums));

// ########################################################

// var arr = [1 , 2 ,3 ,4 , 5];
// function search(arr , val){
//     for(var i = 0 ; i<arr.length ;i++){
//         if(arr[i] == val) return true;
//     }
//     return false;
// }
// console.log(search(arr , 5));

// ############################################################

// var arr = [1 , 2 ,3 ,4 , 5];
// function average(arr){
//     var sum = 0;
//     for(var i = 0 ;i<arr.length ;i++){
//         sum += arr[i];
//     }
//     return sum/arr.length;
// }
// console.log(average(arr));

// ########################################################
// var arr = [1 , 2 ,3 , 3 , 5  , 5, 2 , 7 , 7 , 7];
// function removeDuplicates(arr){
//     arr.sort();
//     var NoDup = []
//     for(var i = 0 ; i<arr.length ;i++){
//         if(arr[i] != arr[i+1]) NoDup.push(arr[i]);

//     }
//     return NoDup;
// }
// console.log(removeDuplicates(arr));
