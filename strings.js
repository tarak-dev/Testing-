// // // // // let firstName = "Tarak ";
// // // // //  let lastName ="dev";
// // // // //   console.log(firstName +" "+ lastName);



// // // // // console.log(`My name is  ${firstName}`);



// // // //  let str="Tarak Dev";
// // // // // console.log(str.length);
// // // // // console.log(str.slice(2,5));

// // // // //console.log(str.substring(2,4));

// // // // console.log(str.replace("Dev", "boss"));

// // // // let str2= "Boss OP";
// // // // console.log(str2.toUpperCase());

// // // let str = "Tarak ";
// // // console.log(str.charAt(0));
// // // console.log(str.charCodeAt(3));


// // let str= "Tarak dev";
// // for (let i= 0; i< str.length ; i++)
// // {
// //     console.log(str.charCodeAt(i));
// // }

// function count_letters(str , character ){

// var count =0;
// for(var position= 0; position < str.length ; position++)
// {
//     if(str.charAt(position)) == character
//     {
//         count += 1;
//     }
// }
//     return count;
    
// }
// console.log(count_letters('hjdshsdbccbbdcbbcbbc' , 'b'));

// let str = "Tarak Dev";
// let ans = "";
// for(let i = str.length -1 ; i >= 0 ; i--)
// {
//     ans += str[i];
// }
// console.log(ans);


// let arr1 =[1,8];
// let arr2 =[2,3,4,5,7];

// let middleIndex =Math.floor(arr1.length/2);
// arr1.splice(middleIndex,0,...arr2);
// console.log(arr1);

// function countTrue(array){
//         let count = 0;
//         for(let i=0; i<array.length; i++){
//             if(array[i]==true){
//                 count++;
//             }
//         }
//         return count;
//     }
//     let array = [true,false,false,true,true,false];
//     let count =0;
//     console.log(countTrue(array));

// function multipleDigit(num , length){
//     let arr =[];
//      for(let i=1; i <= length; i++)  
// {      
//     arr.push(num*i);
// }
// return arr;
// }
// console.log(multipleDigit(5,10));
    
// function missing(a,b,n,m)
//     {
//         for (let i = 0; i < n; i++)
//         {
            
//             let j=0;   
//             for (j = 0; j < m; j++)
            
//                 if (a[i] == b[j])
//                     break;
            
   
//             if (j == m)
//                 console.log(a[i]);
//         }
//     }
     
    
//     let a=[1,4,7,8,9,10];
//     let b=[1,7,8,10];
//     let n = a.length;
//     let m = b.length;
//     missing(a, b, n, m);

let obj ={
    
        obj1: {
           " obj1.1" : {}
        }

        
    
    obj2: {
        "obj2.1" : {} ,

        
        "obj2.2": {}
    }
}
console.log(object.keys[obj]);