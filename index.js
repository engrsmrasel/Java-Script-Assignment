// Assignment # 1(Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)


let num5=40;
let num6=75;

console.log("Assignment#1 : Max Number : " ,Math.max(num5,num6));

// Assignment # 2(Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take single variable and check using if esle condition))

let number= -20;

if(number>0)
{
    console.log("Assignment#2 : Number is positive")
}

else if(number==0)
{
    console.log("Assignment#2 : Number is zero")
}

else
{
    console.log("Assignment#2 : Number is negative")
}

// Assignment # 3 (Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition))

let num7=100

if(num7 % 10==0)
{
    console.log("Assignment#3 : The Number is divisible by 10")
}

else
{
    console.log("Assignment#3 : The Number is not divisible by 10")
}

// Assignment # 4 (Solve the problem with Javascript  to check whether a number is even or odd. )

let num8=13

if(num8 % 2==0)
{
    console.log("Assignment#4 : The Number is Even")
}

else
{
    console.log("Assignment#4 : The Number is Odd")
}

// Assignment # 5 (Solve the problem with Javascript  to check whether a character is in the alphabet or not.)

let char = "d";

if(char>="a" && char<="z" || char>="A" && char<="Z" )
console.log("Assignment#5 : It's an Alphabet")

else
{
    console.log("Assignment#5 : It's not an Alphabet")
}




// Assignment # 6 (	Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)


let temperature=28;

if(temperature>=30)
{
    console.log("Assignment#6 : It is Hot")
}
else if(temperature<=25)
{
    console.log("Assignment#6 : It is Cold")
}

else
{
    console.log("Assignment#6 : It is Normal")
}



// Assignment # 7(Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)



let num9= 30;
let num10= 40;
let num11= -10;
let largest;

if(num9>=num10 && num9>=num11)
{
    largest=num9;
}


else if(num10>=num9 && num10>=num11)
{
    largest=num10;
}


else
{
    largest=num11;
}

// Display the result
console.log("Assignment#7 : The lagest number is:" , largest);

// Assignment # 8 (Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.)

let numX=12

numX%2==0 ? console.log("Assignment#8 : Even Number") : console.log("Assignment#8 : Odd Number")

// Assignment # 9 (Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.)

let numOne=60;
let numTwo=40;

if(numOne>=30 && numTwo>= 30)
{
    console.log("Assignment#9 : Both numbers are greater than 30")
}

else
{
    console.log("Assignment#9 : Both numbers are not greater than 30")
}

// Assignment # 10 (Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)


let personAge=17;

if(personAge>=13 && personAge<=19 )
{
    console.log("Assignment#10 : Teeneger")
}

else

    {
        console.log("Assignment#10 : Not a Teeneger")
    }