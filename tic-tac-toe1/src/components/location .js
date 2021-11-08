function location(i){
    const lines = [
        [0, 1, 2], // hang 1 
        [3, 4, 5], // hang 2
        [6, 7, 8] // hang 3
        
    ];

    for(let j = 1 ; j< 4 ; j++){
        const [a ,b ,c ] = lines[j-1];
        if(i === a  || i === b  || i === c){
            if(i%3 === 0 )
                return 'go to #1 ,#' + j ;
            if( (i+3 === 5 ) || (i+3 ===8 ) || (i === 8 ) ){
                return 'go to #3 ,#' + j;
            }else{
                return 'go to #2 ,#' + j;
            }
        }
    }
}

export default location;