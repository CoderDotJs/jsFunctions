// for(let i = 0 ; i < 3; i++){
//      document.querySelectorAll('.btn')[i].addEventListener('click', function(){
//         var text = this.innerHTML;
//         document.querySelector('h1').innerHTML = text + 'is clicked';
//     });
// }
// var a = [2,7,4,5,6,4,4]
// function smallestSecond(arr){
//     var num = new Set(arr);
//     var numSort = Array.from(num).sort();
//     // function sortNum(a,b){
//     //         return a-b;
//     //     }
// console.log(numSort[1])
// }
// smallestSecond(a);
// var num = [44,2,33,0,1]
// var largest = num[0];
// for(let i = 0; i < num.length; i++){
//     if(largest > num[i]){
//         largest = num[i]
//     }
// }
// console.log(largest)

// const fibo = [0, 1];
// for(let i = 2; i <= 10; i++){
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo)

// function fibo(n){
//     if(n == 0){
//         return 0;
//     }
//     if(n == 1){
//         return 1;
//     }
//     return fibo(n - 1) + fibo(n - 2); 
// }
// const fi = fibo(5);
// console.log(fi);


//paperRequirment

// function paperRequirment(book1, book2, book3){
//   let totalPaper1 = book1 * 100;
//   let totalPaper3 = book3 * 300;
//   let totalPaper2 = book2 * 200;
//   return 'First book: ' + totalPaper1 + ' Second book: ' + totalPaper2 + ' Third book: ' + totalPaper3
// }
// var a = paperRequirment(50, 300, 500);

// console.log(paperRequirment(50,300,500))


//number detector

// function detector(nums){
//     let neg = [];
//     let pos = [];
//     for(let i = 0; i <= nums.length; i++){
//       if(nums[i] <= 0){
//         neg.push(nums[i])
//       }
//       else if(nums[i] > 0){
//         pos.push(nums[i])
//       }
//     }
//     return 'Positive Numbers: ' + pos + ' Negative Numbers: ' + neg;
//   }
  
//   let rar = [3,3434,54,54,2,3,45,45,4,-4,-33,-22,-343,-3434,-66,34,454,-32,34];
//   console.log(detector(rar))


// largest friends name in an array


// var friends = ['akash', 'rony', 'shourov', 'azizul', 'asif'];
// var largest = friends[0]
// for(let i = 0; i < friends.length; i++){
//     let friend = friends[i];
//   if(largest.length < friend.length){
//     largest = friends[i];
//   }
// }
// console.log(largest);


//stoping an array when a negetive number is spoted in an array


// function ran(array){
//     let arr = [];
//     for(const arra of array){
//         if(arra < 0){
//             arr.push('loop stoped')
//             break;
//         }
//         else{
//             arr.push(arra);
//         }
//     }
//     return arr;
// }

// let arr = [3,4,54,3,2,3,4,-2,33,4,];
// console.log(ran(arr));


//armstrong function

// function toBinary(text){
//     let binary = '';
//     for(let i = 0; i < text.length; i++){
//         binary += text.charCodeAt(i).toString(2) + ' ';
//     }
//     return binary;
// }
// console.log(toBinary('Akash'))



//inUniform function which takes an array and retrurns true if all the element of the array is same else false

// function isUniform(arr){
//     let firstElement = arr[0];
//     var isTrue;
//     for(let i = 0;  i < arr.length; i++){
//         if(arr[0] === arr[i]){
//             firstElement = arr[i];
//             isTrue = true;
//         }
//         else{
//             isTrue = false;
//         }
//     }
//     return isTrue;
// }
// console.log(isUniform(['a', 'a', 'b']))


//sumArray is an function that returns the totals of an number array

// function sumArray(arr){
//     let total = 0;
//     for(let i = 0; i < arr.length; i++ ){
//         total += arr[i];
//     }
//     return total;
// }
// console.log(sumArray([1,2,3,4]));