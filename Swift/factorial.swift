//Created by $hardul Birje 
//My first Swift code!!!!
//Currently i don't know to take user input hence change the number on line 13 for different output
func factorial(inp:Int)
{
    var fact=1;
    for i in 1...inp
    {
        fact=fact*i;
    }
    print(fact);
}
factorial(inp:6);