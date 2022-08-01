/*===============================================================*\
*                                                                 * 
*                          JS SCOPES                              *
*                                                                 * 
\*================================================================*/

let globalVariable = `Shakira`;



function logVariable() {
    let globalVariable =`Metallica`;
    
    console.log(globalVariable);

    function changeVariable() {
        let globalVariable = `RHCP`;
        console.log(globalVariable);
    }
    changeVariable();
}

console.log(globalVariable);

logVariable();