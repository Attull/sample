var a=[5,10,15,20,25];
var s = 30;
var beg = 0;
var last = a.length-1;

function binary_search(a,s,beg,last){
    while(beg <= last){
        var mid = (beg+last)/2;
        if(s == a[mid]){
            return mid;
        }
        else if(s > a[mid]){
            beg = mid+1;
        }
        else if(s < a[mid]){
            last = mid-1;
        }
    }
    return -1;
    console.log("hello inside BS")
}

var mid_value = binary_search(a,s,beg,last);
if(mid_value < 0){
    
}else{
console.log(a[mid_value])
}