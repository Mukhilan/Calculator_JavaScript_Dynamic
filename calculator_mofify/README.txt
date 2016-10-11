				Basic Calculator

	Functions used in Calculator

1) Numberclick() function is called by clicking numbers.
   Numbers will shown on the text box

2)setoperator() function is called by clicking operators.
  operator  will not shown on the (text box)	

3)clearnumber() function is used to refresh the value in the text field  

4)set value() function is used for display the result and current entered value in <div calculatorhead>.

5)If operator== '=' then calculate() function is called from set operator() function and then the corressponding function ("sum(),subtract(),multiply(),divide()")  are called.

5) created new instance of calculator and passed the div id ('containerid') from the html code to the javascript code.constructor function is initiated 
    during creating instance and intialise all the values for doing operations.

SAMPLE INPUT  and OUTPUT :

1)
	click : 9   (9 will shown on the div class calculatorhead text box) 
	click : *   ( * will not shown on the text box)
	click: 8    ( 8 will shown on the text box)
	click: +    (result=72 will shown on the text box)
	click: 8    (8 will shown on the text box )
	click: =    (72(current result) + 8=80 will shown on the text box)
		
2)
	click : 96  (96 will shown on the text box)
	click : /   (/ will  not shown on the text box)
	click : 5   (5 will shown on the text box)
	click : =   (result=19.2 will shown on the text box)

3)
	click : 98  (98 will shown on the text box)
	click : -   (- will  not shown on the text box )
	click : 67  (67 will  shown on the text box)
	click : +   (result=31 will shown on text box)
	click : 56  (56 will shown on the text box)
	click : =   (result =87 will shown on the text box)
	click : c   (refreshes the text box)

		
