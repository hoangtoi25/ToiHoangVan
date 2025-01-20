/*
SUMMARY

Iterative Sum: 
sum_to_n_a is straightforward and using loop.
It's efficient for small values of n, but as n increases, it takes longer due to the linear time complexity.

Mathematical Formula:
sum_to_n_b is the most efficient solution. 
Leveraging a mathematical formula for a constant-time solution, making it optimal for performance regardless of n.

Recursive Approach
sum_to_n_c showcases a recursive method but is less efficient due to its depth of recursion and overhead with function calls.
It may also hit stack overflow for very large values of n
*/


/* 
Iterative Sum

Complexity:
Time complexity: O(n) - The loop runs n times, adding each integer from 1 to n.
Space complexity: O(1) - Only a fixed amount of space is used for the sum variable.
*/
function sum_to_n_a(n: number): number {  
    let sum = 0;  
    for (let i = 1; i <= n; i++) {  
        sum += i;  
    }  
    return sum;  
}

/*
Mathematical Formula

Complexity:
Time complexity: O(1) - This calculation takes constant time as it involves only arithmetic operations.
Space complexity: O(1) - No extra space is required beyond a few variables.
*/
function sum_to_n_b(n: number): number {  
    return (n * (n + 1)) / 2;  
}

/*
Recursive Approach

Complexity:
Time complexity: O(n) - The recursive function calls itself n times.
Space complexity: O(n) - Each function call consumes stack space, leading to n calls on the stack.
*/
function sum_to_n_c(n: number): number {  
    if (n <= 0) return 0; // Base case  
    return n + sum_to_n_c(n - 1);  
}