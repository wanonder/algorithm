var str = [6,2,5,1,3,6,2,8];  //实验数据


/*选择排序*/
function selectSort(arr) {
    var len = arr.length;
    var min;
    var temp;
    for(var i=0; i<len; i++) {
        min = i;
        for(var j=i+1;j<len;j++) {
            if(arr[min]>arr[j]) {  //每次找到最小的一个放在相应的位置···
                min = j;
            }
        }
        if(min!=i) {
            temp = arr[min] ;
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;
}

/*插入排序*/
function  insertSort(arr) {
    for(let i= 1,len= arr.length;i< len; i++) {  //i 作为要插入元素的下标··
        for(let j=0; j<i ; j++) {
            if(arr[j]>arr[i]) {              //从j为0开始，若arr[i]小于arr[j],则将arr[i] 插入到那个元素··并删除arr[i]
                 arr.splice(j,0,arr[i]);    
                   arr.splice(i+1,1);                             
                 break;
            }
        }
    }
    return arr;
}


/*归并排序*/
function mergeSort(arr) {

    var merge = function(left,right) {
        var result = [];                                          //result作为用来放入已排序元素的容器数组 
        var lr=0;
        var ll=0;
        var item;
        while(ll< left.length && lr< right.length ) {  
            item = left[ll]<right[lr]?left[ll++]:right[lr++];   // 两个数组之间进行排序··
            result.push(item);
        }

        while(ll<left.length) {
            result.push(left[ll++]);
        }                                                      //可能会出现一边数组元素还未插完

        while(lr<right.length) {
            result.push(right[lr++]);
        }

        return result;
    }

    
    var length = arr.length;
    if(length === 1) {
        return arr;
    }
    var mid = Math.floor(length/2),
        left = arr.slice(0,mid),
        right = arr.slice(mid,length);



        return merge(mergeSort(left),mergeSort(right));
}



/*快速排序*/


function quickSort(s,  l,  r)  {  
   let i = l;
   let j = r;
   let x = s[l];
   if( l < r ) {
      while(i < j ) {
          while( i < j && s[j]>x) 
                j--;
          if( i < j ) {
              s[i++] = s[j];
          }
            
          while( i < j && s[i] <x ) 
              i++;
          if(i < j) {
              s[j--] = s[i];
          }
          
          
      }
    s[i] = x;
    quickSort(s,l,i-1);
    quickSort(s,i+1,r);
   }
    return s;
}  

console.log(quickSort(str,0,7));