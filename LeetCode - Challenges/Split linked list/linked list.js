
var deleteDuplicates = function(head) {
    let array = head;
    for(let i = 0 ; i < array.length; i++) {
        if(array[i]==array[i+1]) {
            array.splice(i,1);
        }
    }
    return(array);
};

let array = [1,1,2];