function ListNode(val,next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let sum = [];
    sum[0] = 0; let i= 0;
    while(l1 || l2) {
        if(l1&&l2) {
            sum[i] = l1.val + l2.val;
            l1=l1.next;
            l2=l2.next;
        } else if (l1) {
            sum[i] = l1.val;
             l1=l1.next;
        } else if(l2) {
            sum[i] = l2.val;
            l2=l2.next;
        }
        i++;  
    }
    for(let i = 0 ;i <sum.length;i++) {
        if(sum[i]> 9) {
            if(i+1 == sum.length) {
                sum[i+1] = 1;
            } else sum[i+1]++;
            sum[i] = sum[i]-10;
        }
        
    }
    let l3Node,aux;
    for(let i = sum.length-1;i>=0;i--) {
        if(!l3Node) {
            l3Node = new ListNode(sum[i]);
        } else {
            aux = new ListNode(sum[i]);
            aux.next = l3Node;
            l3Node = aux;
        }
    }
    return l3Node;
};
l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
l2 = new ListNode(2);
l2.next = new ListNode(2);
l2.next.next = new ListNode(2);
console.log(addTwoNumbers(l1,l2));