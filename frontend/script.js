/*===============================================================*\
*                                                                 * 
*                          JS HOISTING                            *
*                                                                 * 
\*================================================================*/


/* function testFunction() {
    const x= "Rammstein";
    console.log(x);
} */

const up = function() {
    const x= "Rammstein";
    console.log(x);
}

up();