function countChange(card) {
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return(1 + ' Bet');
            break;
        case 7:
        case 8:
        case 9:
            return(0 + ' Hold');
            break;
        case 10:
        case 'J':
        case 'j':
        case 'Q':
        case 'q':
        case 'K':
        case 'k':
        case 'A':
        case 'a':
            return(-1 + ' Hold');
            break;
    }
}

alert(countChange(6));