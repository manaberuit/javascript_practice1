'use strict';

{
    // let tmp_list = [];
    //     for(let i = 1; i <= 10; i++){
    //         tmp_list.push(i);
    //     }
    // return tmp_list;
    let i;
    for (i = 1; i <= 99; i++){
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(`FizzBuzz ${i}`);
        } else if (i % 3 == 0) {
            console.log(`Fizz ${i}` );
        } else if (i % 5 == 0 ){
            console.log(`Buzz ${i}`);
        }
    }

}
