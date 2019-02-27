
function vypsat() {
    a = Number(document.getElementById('a').value);   
    b = Number(document.getElementById('b').value);  
    c = Number(document.getElementById('c').value);

    
  
     if(a == b) {
        
        alert('Žádná čísla nesmí být stejná.')
 
} else {
    
    if(b == c) {
     
        alert('Žádná čísla nesmí být stejná.')
        
    } else {
        
        if(c == a){
            
            alert('Žádná čísla nesmí být stejná.')
        } else {
                  zjisteni();
                    console();
          
        }
          } 
}    
}
    
               


function console(){
     
    document.getElementById('consoletext').innerHTML = "<ins><h3>CONSOLE</h3>";
    document.getElementById('s').innerHTML = "začátek programu";
    document.getElementById('ax').innerHTML = "var A=" + a;
    document.getElementById('bx').innerHTML = "var B=" + b;
    document.getElementById('cx').innerHTML = "var C=" + c;
    document.getElementById('1').innerHTML = "porovnávání ..."
    document.getElementById('5').innerHTML = "kontrola pravidel ..."
    document.getElementById('2').innerHTML = "(a < b) -- > (a > c)"
    document.getElementById('3').innerHTML = "(b < c) -- > vyhodnocování"
    document.getElementById('4').innerHTML = "bootstrap alert -- > Nejmenší číslo je ..."
     document.getElementById('7').innerHTML = "source code: https://github.com/rapidecek/nejmen-slo.git"
   
    
}

function zjisteni() {
    
    if (a < b) {
         if (a < c) {
        
        document.getElementById('vysledek').innerHTML = " Nejmenší číslo je  " + a + ". ";
 
} else {
    
  document.getElementById('vysledek').innerHTML = " Nejmenší číslo je  " + c + ".";
  
}
        
 
} else {
    
  if (b < c) {
        
        document.getElementById('vysledek').innerHTML = " Nejmenší číslo je " + b + ".";
 
} else {
    
  document.getElementById('vysledek').innerHTML = " Nejmenší číslo je " + c + ".";
}
  
}
   
}



