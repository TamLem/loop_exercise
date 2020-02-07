
//function builds  at tree of asterix on webpage

function asterixTree () {

    let j=1;
    let i=0;
    let n=0;
    
    while (j<20) {
    
        let l = ((j-i)/(j+n));
    
        for (k=0; k < (18-j)/2; ++k) {
            document.write("&nbsp;");
        }
    
        while (i<j){
    
            document.write('*');
            i += l; 
        } 
    
        for (k=0; k < (20-j)/2; k++) {
            document.write("&nbsp;");
        }
    
        document.write('<br>');
    
        i=0;
        ++j;
        ++n;
        
    }
     
    document.write("&nbsp;");

}



// function greaterThan100 

function greaterThan100 () {

    let num;
    
    //......
    
}

greaterThan100()




// function isPrime returns true if a given number is prime if not false

function isPrime(n) {

    n = +n;

    for (k=2; k<10; k++) {

        if (n%k==0 && n!=k) {return false; break;}
        
    }

    if (k==10 && n) {return true}
    
} 



// function a FromAsterix uses loopes to print a pattern of Asterix charachters, in this case the letter 'A'

function aFromAsterix() {

    for (j = 0; j < 8; j++) {

        for (i = 0; i < 8; i++) {

            (j < 2 || j == 3 || j == 4 || i < 2 || i > 5) ? (document.write("*")) : document.write("&nbsp;&nbsp;");

        }

        document.write("<br>")
    }
}





// function delrep will delete consecutive repeating charachters from a string

function delrep(str) {

    let x = ""

    for (i = 0; i < str.length; i++) {

        if (str[i + 1] != str[i]) {
            x += str[i]
        }
    }

    return x;
}





// Function xos checks if there are equal numbers of 'x's and 'o's in a string input
// and returns a boolean true or false

function xos(str) {

    let xs = ""
    let os = ""

    for (i = 0; i < str.length; i++) {

        if (str[i] == 'o' || str[i] == 'x') {
            (str[i] == 'o') ? os += str[i]: xs += str[i];
        };
        if (str[i] == 'O' || str[i] == 'X') {
            (str[i] == 'O') ? os += str[i]: xs += str[i];
        };

    }


    return (xs.length == os.length) ? true : false;


}





// Move zeros in a string to the end of the string

function moveZerosStr(str) {

    // arr = str.split('');

    let nonzero = "";
    let zero = ""

    for (let i = 0; i < str.length; i++) {


        (str[i] == '0') ? zero += str[i]: nonzero += str[i];

    }

    return nonzero + zero;

}




// Funtion to return a string list of prime number below a given input

function listPrimesBelow(num) {

    let str = ""



    for (i = 1; i < num; i++) {

        //console.log('s');

        for (k = 2; k < 10; k++) {

            //console.log(k);
            if (i % k == 0 && i != k) break;

        }

        //console.log(k);

        if (k == 10) str += i + ' '

    }

    return str;

}