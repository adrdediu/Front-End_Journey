function ListNode(val,next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let l3;
    sum = 0; let SumGrtThan10 = 0;
    while(l1 || l2 || SumGrtThan10) {

        if(l1&&l2) {
            sum = l1.val + l2.val + SumGrtThan10;
            l1 = l1.next;
            l2 = l2.next;
        } else if (l1) {
            sum = l1.val + SumGrtThan10;
            l1 = l1.next;
        } else if(l2) {
            sum = l2.val + SumGrtThan10;
            l2 = l2.next;
        } else sum = SumGrtThan10;
       
       
        if(sum >= 10) {
            sum -=10;
            SumGrtThan10 = 1;
        } else {
            SumGrtThan10 = 0;
        }

        if(!l3) {
            l3 = new ListNode(sum);
        } else {
            let aux = l3;
            while(aux.next){
                aux = aux.next;
            }
            aux.next = new ListNode(sum);
        }
    }
    return l3;
}
l1 = new ListNode(2);
l1.next = new ListNode(7);
l1.next.next = new ListNode(3);
l2 = new ListNode(2);
l2.next = new ListNode(7);
l2.next.next = new ListNode(2);
console.log(addTwoNumbers(l1,l2));