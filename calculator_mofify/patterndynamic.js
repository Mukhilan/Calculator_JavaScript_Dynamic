var calc = null;
window.onload = function () 
{
           calc = new Calculator('containerid');
};
        
var Calculator = function (tb) {

    this.currNumberCtl = document.getElementById(tb);
    this.currNumberCtl.innerHTML='';
    this.operator = null;
    this.operatorSet = false;
    this.equalsPressed = false;
    this.lastNumber = null;
    var canvas ;
	
    var div = document.createElement("div");
    
    for (i=9;i>=0;i--)                                                   // for loop for creating number buttons 1-9 
	{
            
            canvas = document.createElement("input");
    		canvas.type="button";
    		canvas.className="Button";
    		canvas.style.color="green";
	    	canvas.onclick = function() { calc.numberClick(this.value) };
    		canvas.value=i;
    		
		if(i%3==0 && i!=9) 
     		{
     		document.body.appendChild(document.createElement("br"));
     		document.body.appendChild(document.createElement("br"));
     		
     		document.body.appendChild(canvas); 
     		}
            else
            document.body.appendChild(canvas); 
 	}  
 	
 	var canvas = document.createElement("input");                           // for creating . button                   
    canvas.type="button";
    canvas.className="Button";
    canvas.style.color="blue";
    canvas.onclick = function() { calc.numberClick('.');};
    canvas.value=".";
    document.body.appendChild(canvas);
    
    var canvas = document.createElement("input");                         // for creating clear button
    canvas.type="button";
    canvas.className="Button ";
    canvas.style.color="red";
    canvas.onclick = function() { calc.clearNumbers();};
    canvas.value="C";
    document.body.appendChild(canvas);
    
    var oper = ["+", "/", "*" ,"-" , "="];
    
    for (i=0;i<5;i++)                                                   // for loop for creating operator buttons
	{
		if(i==4)
		{
		canvas = document.createElement("input");
    		canvas.type="button";
    		canvas.className="Button";
    		canvas.style.color="blue";
		canvas.style.width="95px";
		
	    	canvas.onclick = function() { calc.setOperator(this.value) };
    		canvas.value=oper[i];
		}
		else
 	   {
            canvas = document.createElement("input");
    		canvas.type="button";
    		canvas.className="Button";
    		canvas.style.color="blue";
		
		
	    	canvas.onclick = function() { calc.setOperator(this.value) };
    		canvas.value=oper[i];
		}
    		
		if(i%3==0 && i!=4) 
     		{
     		document.body.appendChild(document.createElement("br"));
     		document.body.appendChild(document.createElement("br"));
     		document.body.appendChild(canvas); 
     		}
            else
            document.body.appendChild(canvas); 
            }  
document.body.appendChild(div);  
   };
 

Calculator.prototype = {

    add: function (x, y) 
    {
        return x + y;
    },

    subtract: function (x, y) 
    {
        return x - y;
    },

    multiply: function (x, y) 
    {
        return x * y;
    },

    divide: function (x, y) 
    {
        if (y == 0) 
        {
            alert("Can't divide by 0");
            return 0;
        }
        return x / y;
    },

    setVal: function (val) 
    {
        this.currNumberCtl.innerHTML = val;
    },

    

    clearNumbers: function () 
    {
        this.lastNumber = null;
        this.equalsPressed = this.operatorSet = false;
        this.setVal('0');
        
    },

    setOperator: function (newOperator) 
    {
        if (newOperator == '=') 
        {
            this.equalsPressed = true;
            this.calculate();
	    

            return;
        }
        
        if (!this.equalsPressed) this.calculate();
                this.equalsPressed = false;
                this.operator = newOperator;	
                this.operatorSet = true;
                this.lastNumber = parseFloat(this.currNumberCtl.innerHTML);
        
        
    },

    numberClick: function (newval) 
    {
        var button1 =  newval;
        if (this.operatorSet == true || this.currNumberCtl.innerHTML == '0') 
        {
            this.setVal('');
            this.operatorSet = false;
        }
        
        this.setVal(this.currNumberCtl.innerHTML + button1);
      
        
    },

    calculate: function () 
    {
        if (!this.operator || this.lastNumber == null) 
            return;
        
        var displayedNumber = parseFloat(this.currNumberCtl.innerHTML),
                    newVal = 0;
                switch (this.operator) {
            case '+':
                newVal = this.add(this.lastNumber, displayedNumber);
                break;
            case '-':
                newVal = this.subtract(this.lastNumber, displayedNumber);
                break;
            case '*':
                newVal = this.multiply(this.lastNumber, displayedNumber);
                break;
            case '/':
                newVal = this.divide(this.lastNumber, displayedNumber);
                break;
        }
        this.setVal(newVal);
        this.lastNumber = newVal;
    }
};
