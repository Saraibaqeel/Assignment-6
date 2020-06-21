                                                                             
                      Math Methods


                      Q1:
                      
                      var a=+prompt('Enter Number');
                      document.write("Number:"+ a +"<br>");
                      
                      document.write( "Round of value:"+ Math.round(a)+"<br>");
                      document.write("Floor Value:"+ Math.floor(a)+"<br>" );
                      document.write("Ceil Value:"+ Math.ceil(a));
                      
                      Q2:
                      var a=+prompt('Enter negative floating Number');
                      document.write("Number:"+ a +"<br>");
                      
                      document.write( "Round of value:"+ Math.round(a)+"<br>");
                      document.write("Floor Value:"+ Math.floor(a)+"<br>" );
                      document.write("Ceil Value:"+ Math.ceil(a));
                      Q3:
                      var a=+prompt('Enter value');
                      document.write("Number:"+ a +"<br>");
                      
                      document.write( "Absolute Value :"+ Math.abs(a)+"<br>");
                      Q4:
                      var diceRoll = Math.floor( Math.random() * 6) +1;
                      document.write('You rolled a ' + diceRoll);
                      Q5:
                      var cointoss = Math.floor( Math.random() *2 ) +1;
                      
                      if(cointoss===1 )
                      {
                          document.write("Its a Head");
                      
                      }
                      else{
                          document.write("Its a Tail");
                      }
                      Q6:
                      var rand = Math.floor( Math.random() *100 ) +1;
                      document.write("Random Number :"+ rand );
                      Q7:
                      var weight=prompt("Enter weight Possible user inputs can be: \n a. 50 \n b. 50kgs \n c. 50.2kgs \n d. 50.2kilograms")
                       parseInt(weight)
                       document.write("The weight of user input is "+weight+" kilograms <br>")
                      Q8:
                      var a=+prompt('Guess The number between 1 to 10');
                      if(a===4){
                          alert("Conratulation Its a Right Answer");
                      }
                      else{
                          alert("Try Again!");
                      }
                                              String Methods
                      Q1:
                      var a=prompt('Enter First Name');
                      var b=prompt('Enter Last Name');
                      var c=a+b;
                      alert("Welcome"+ " "+ c );
                      Q2:
                      var a=prompt('Enter Favoutite Mobile Model');
                      var n=a.length;
                      document.write("The length of string :"+ n );
                      Q3:
                      var a="Pakistani";
                      alert(a);
                      alert("Index Number of n:   "+a.indexOf("n"));
                      
                      Q5:
                      var a="Pakistani";
                      alert(a);
                      var n=+prompt('Enter index number');
                      
                      alert("Character at " + n +":"+ a.charAt(n) );
                      Q6:
                      var a=prompt('Enter First Name');
                      var b=prompt('Enter Last Name');
                      var FullName=a.concat(b);
                      alert("wellcome"+"  "+ FullName );
                      Q7:
                      var a="Hyderabad";
                      alert("City:"+a);
                      var b=a.replace("Hyder","Islam");
                      alert("After Replacement:"+b );
                      Q8:
                      var a="Ali and Sami are Bestfriends. They play cricket and football together.";
                      
                      alert(a);
                      var b=a.replace("and","&");
                      alert("After Replacement:"+b );
                      Q9:
                      var a="472";
                      document.write("Value:"+ a + "<br>") ;
                      document.write("Type:String" + "<br>") ;
                      var a = parseInt("472") ;
                      document.write("Vlaue:"+ a + "<br>") ;
                      document.write("Type:Number");
                      Q10:
                      var a=prompt('Enter Any word in lower case');
                      var b=a.toUpperCase();
                      alert("Upercase:"+ b);
                      Q11:
                      function titleCase(string) {
                          var sentence = string.toLowerCase().split(" ");
                          for(var i = 0; i< sentence.length; i++){
                             sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
                          }
                       document.write(sentence.join(" "));
                       return sentence;
                       }
                       titleCase("tutorix is one of best e-platforms");
                       
                      
                      Q12:
                      var a="35.36";
                      alert(a);
                      var b=a.replace(".","");
                      alert("Result:"+b );
                      Q13:
                      var text=prompt('Enter');
                      for (var i = 0; i < text.length; i++) {
                           if (text.charAt(i) === "!" || text.charAt(i)==="@" || text.charAt(i)==="." ) {
                           alert("Enter Valid username");
                           
                           break;
                      }
                           }
                      Q14:
                       var A=["cake","apple pie","cookie","chips","patties"]
                       var input=prompt("Welcome to ABC Bakery . what do you want to order sir/ma'am")
                       var bak=input.toLowerCase()
                       var bakery=A.indexOf(bak)
                       if(A.indexOf(bak)!=-1){   alert(bak +" is available at "+bakery+" index in our bakery")
                       }
                      else{
                         alert("we are sorry "+bak+" is not available in our bakery")  }
                      Q15:
                      var input = prompt("Enter password");
                      
                      if (isNaN(parseInt(input[0]))) {
                        alert("password is valid");
                      } else {
                        alert("Password should not start with number");
                      }
                      Q16:
                      var str = 'University Of Karachi';
                      var ar = str.split(''); 
                      console.log( ar );
                      Q17:
                      var a=prompt('Enter word');
                      b=a.length;
                      alert(b);
                      alert("Last character of input:"+ a.charAt(b));
                      Q18:
                      
                      var text="the quick brown fox jumps over the lazy dog."
                      for(i=0;i<=text.length;i++){
                          if(text.slice(i,i+3)==="the"){
                              document.write("There are 2 occurence(s) of word 'the'<br> ")
                             break; }
                      else{
                          document.write("No 'the' found")
                       }
                       }
                                      Date Methods
                      Q1:
                      var d = new Date();
                      document.write(d);
                      Q2:
                      const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                      ];
                      
                      const d = new Date();
                      document.write("The current month is " + monthNames[d.getMonth()]);
                      Q3:
                      var d = new Date();
                      var weekday = new Array(7);
                      weekday[0] = "Sun";
                      weekday[1] = "Mon";
                      weekday[2] = "Tue";
                      weekday[3] = "Wed";
                      weekday[4] = "Thur";
                      weekday[5] = "Fri";
                      weekday[6] = "Sat";
                      
                      var n = weekday[d.getDay()];
                      console.log(n);
                      Q4:
                      var d = new Date();
                      var weekday = new Array(7);
                      weekday[0] = "Sun";
                      weekday[1] = "Mon";
                      weekday[2] = "Tue";
                      weekday[3] = "Wed";
                      weekday[4] = "Thur";
                      weekday[5] = "Fri";
                      weekday[6] = "Sat";
                      
                      var n = weekday[d.getDay()];
                      console.log(n);
                      if (weekday[0]==="Sun" || weekday[6]==="Sat" ) {
                          alert("Funday");
                      
                          
                      }
                      Q5:
                      var d = new Date();
                      var currentMonth = d.getDate();
                      alert(currentMonth);
                      if (currentMonth<16) {
                          alert("First Fifteen Days Of month");
                          
                      }
                      else{
                          alert("Last Days Of Month");
                      }
                      Q6:
                      var today = new Date ();
                       var todaymili=today.getTime();
                      var t =todaymili/(1000*60*60)
                      document.write("Current Date: " + today + "<br>" )
                      document.write("Elapsed miliseconds since January 1, 1970: " + todaymili + "<br>" )
                       document.write("Elapsed minutes since January 1, 1970: " + t)
                      Q7:
                      var d = new Date();
                      var currenttime = d.getHours();
                      alert(currenttime);
                      if(currenttime<12){
                          alert("Its PM");
                      }
                      else{
                          alert("its AM");
                      }
                      
                      Q8:
                      var month = 11; 
                      var d = new Date(2020, month + 1, 0);
                      Q9:
                      const date1 = new Date('6/18/2015');
                      
                      alert("Later Date::"+ d); // last day in December
                      const date2 = new Date('4/25/2020');
                      const diffTime = Math.abs(date2 - date1);
                      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
                      alert(diffTime + " milliseconds");
                      alert(diffDays + " days have been passsed since 1st ramzan 2015");
                      Q10:
                      var s_d = new Date("Jan 1,2015");
                       var p=s_d.getTime();
                       var e_d = new Date();
                       var today=e_d.getTime();
                       var difference =   today-p;
                       var seconds = (difference / (1000*60));
                       document.write("On reference date  "+ e_d + " "+ seconds + " seconds had passed since 2015");
                      Q11:
                       var Date=new Date();
                      document.write("Current Date: "+Date)
                       Date.setHours(Date.getHours()-1);
                       document.write("<br> 1 Hour ago, it was: "+Date);
                      Q12:
                      var a=new Date();
                      
                      alert(a);
                      var b=new Date('6/21/1920');
                      alert("100 years ago it was ::"+b);
                      Q13:
                      var a=+prompt('Enter your age');
                      b=2020-a;
                      alert("Your Birth Year is "+ " "+b);
                      Q14:
                      var ConsumerName=prompt('Enter consumer Name' );
                      document.write("Consumer Nmae:"+ ConsumerName + "<br>");
                      var a=new Date();
                      var a=a.getMonth();
                      if(a===5){
                         document.write ("Current Month:June" + "<br>");
                      }
                      
                      
                      
                      var  b=+prompt('Enter Number of Units Used');
                      document.write("Number of Units:"+b +"<br>");
                      var c=16;
                      document.write("Charges Per Unit:"+c + "<br>");
                      var d=b*c;
                      document.write("Net Amount Payable(within Due Date):"+d + "<br>");
                      var e=350;
                      document.write("Late payment cahrges:"+e + "<br>");
                      var f=e+d;
                      document.write("Amount Payabale (after Due Date):"+f + "<br>");
                      
                                          Functions
                      Q1:
                      function date(){
                         var a=new Date();
                         alert(a);
                      }
                      date();
                      Q2:
                      function name(){
                         var a=prompt('Enter first Name');
                         var b=prompt('Enter Last Name');
                         var c=a+b;
                         alert("Wellcome"+" "+c);
                      }
                      name();
                      Q3:
                      function add(){
                         var a=+prompt('1st number');
                         var b=+prompt('2nd number');
                         return c=a+b;
                         
                      }
                       var g=add();
                       alert(g);
                      Q4:
                      var n1=+prompt("Enter First Number")
                       var op=prompt("Enter the operation")
                       var n2=+prompt("Enter Second Number")
                       function calcu(nu1,opr,nu2){
                           if(op=="+"){
                               return n1+n2;
                      
                         }
                          else if(op =="-"){
                              return n1-n2;
                          }
                           else if(op =="/"){
                               return n1/n2;
                      
                         }
                           else if(op =="*"){
                             return n1*n2;
                      
                           }
                          else {
                          alert("invalid numbers")
                          }
                      } var c=calcu(n1,op,n2);
                       document.write("Your result will be   " + c)
                      Q5:
                      function square(b){
                         var a=b*b;
                         alert(a);
                      }
                      square(4);
                      Q6:
                      function fact1(b){
                         var fact=1;
                         for(i=b;i>1;i--){
                            
                           var fact=fact*i;
                           
                         }
                         console.log(fact);
                       
                      }
                      fact1(5);
                      Q7:
                      var s_num = prompt("enter starting number")
                      var e_num = prompt("enter ending number") 
                      function count(){
                         for (var i=s_num ; i<=e_num ; i++){
                      
                             document.write(i +"<br>") ;   
                           }  
                      }
                      count();
                      
                      Q8:
                       var base = +prompt("enter base")
                       var perp = +prompt("enter perpendicular")
                      var h;
                       function calculateHypotenuse(b,p){
                            function calculatesquare(h)
                            return document.write( "Hypotenuse of Right angle tringle will be "+ (b*b+ p*p));
                      
                            } 
                            calculatesquare();
                       }
                       calculateHypotenuse(base, perp);
                      
                      
                      Q9:
                      
                      var width=+prompt("enter width of rectangle")
                       function area(w,h){
                           return  w*h; ;
                       }
                      var a =area(width, 4)
                      document.write("the area of recatngle will be  "+ a)
                      
                      Q10:
                      
                      function par()
                       {
                       var word=prompt("enter your word ");
                      var check="";
                       for (var i=word.length-1; i>=0; i--) 
                         {
                          check+=word[i]
                          }
                      if (word===check){
                           document.write(word+" is palandrome word")
                         }
                      else{
                          document.write(word+" is  not palandrome word")
                       }
                      
                      }
                        par();
                      
                      
                      Q11:
                      var str=prompt("enter any string");
                       function  c_str(s){
                      
                          var a = str.split(' ');
                          var b = [];
                      
                       for(var i = 0; i < a.length; i++){
                              b.push(a[i].charAt(0).toUpperCase()+a[i].slice(1));
                        }
                         return b.join(' ');
                       }
                      var a=c_str(str);
                       document.write("Required string will be "+ a)
                      
                      Q12:
                      
                      
                       function l_word(str)
                      {
                         var array1 = str.match(/\w[a-z]{0,}/gi);
                       var result = array1[0];
                      
                       for(var x = 1 ; x < array1.length ; x++)
                       {
                           if(result.length < array1[x].length)
                          {
                          result = array1[x];
                           } 
                         }
                         return result;
                       }
                      /document.write(l_word('DAWOOD UNIVERSITY'));
                      
                      
                      Q13:
                      
                      function count(str, l) 
                      {
                       var l_Count = 0;
                       for (var i = 0; i < str.length; i++) 
                        {
                          if (str.charAt(i) == l) 
                             {
                            l_Count += 1;
                          }
                      }
                         return l_Count;
                       }
                      
                      document.write("the number of occurrences of the specified letter within the string will be " + count('saira', 'a'));
                      
                      Q14:
                       var radius=prompt("enter radius of circle")
                       var r_c ,a_c=0;
                      function calcCircumference(r){
                           r_c=2*3.142*r;
                           return r_c
                      }
                       function calcArea(a){
                          a_c=3.142*a*a;
                           return a_c
                       }
                       document.write("The circumference of circle will be "+ calcCircumference(radius) +"<br>");
                      document.write("The Area of circle will be "+ calcArea(radius));
                      
                      