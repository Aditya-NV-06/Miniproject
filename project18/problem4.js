var t=4;
const arr=[3,4,5,6];

for(var i=0;i<4;i++)
{
    if(arr[i]%3==0)
    {
        console.log("Divisible by 3")
        if(arr[i]%2==0)
        {
            console.log("Even is ",arr[i])
        }
        else{
            console.log("Odd is ",arr[i])
        }
    }
    else{
        console.log("Not Divisible by 3")
        if(arr[i]%2==0)
        {
            console.log("Even is ",arr[i])
        }
        else
        {    console.log("Odd is ",arr[i])
        }
    }
}