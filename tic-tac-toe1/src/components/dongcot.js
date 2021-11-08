function dongcot(square){
    const lines = [
        [0, 1, 2], // hang 1 
        [3, 4, 5], // hang 2
        [6, 7, 8] // hang 3
        
    ];

    for(let i = 1 ; i< 4 ; i++){
        const [a ,b ,c ] = lines[i-1];
        if(square === a  || square === b  || square === c){
            if(square%3 === 0 )
                return 'go to # ' + i + '#1';
            if( (square+3 === 5 ) || (square+3 ===8 ) || (square === 8 ) ){
                return 'go to # ' + i + '#3';
            }else{
                return 'go to # ' + i + '#2';
            }
        }
    }
}

export default dongcot;