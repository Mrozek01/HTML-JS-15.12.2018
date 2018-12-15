
//var Let
//zmienna=7;
/*zmienna=nazwa zmiennej
=operator przypisania
7 wartośc zmiennej*/
var imię="janusz";
var nazwisko;
nazwisko="Nowak";
document.write("Twoje Imię:")
var wiek=21;
//+oznacza konkatenacja połączenie stringów
document.write("<br>twój wiek:" +wiek);

console.log(wiek);
var x,y;
x=10;
y=7;
var suma=x+y;
//document.write("<br>suma wynosi"+x+y));
document.write("<br>suma wynosi" + suma);

//alert(suma);
x=20;
y=2;

var suma=x+y;   //22
console.log(suma);

var roznica=x-y;   //18
x=19;
y=2;

var iloraz=x/y;   //9.5

var iloczyn=x*y;  //38



//modulo-reszta z dzielenia
var modulo=x%y;
console.log("wartosc"+modulo);
console.log("suma:"+suma+",roznica"+roznica+",iloczyn"+iloczyn+",iloraz:"+iloraz+",modulo"+modulo);

//typy zmiennych

var a=10,b="10a";
//alert(a+b);

console.log(typeof(a));//number
console.log(typeof(b));//string


var prawda=true;
console.log(typeof(prawda));//boolean
var nic=null;
console.log(typeof(nic));//object
var pusta
console.log(typeof(pusta));//undefined


console.log(a+(a%3)-10); //1

var dziesiętny=11;// lidzba w systemie dziesiętny decymalny
var oktsalny=010;//ósemkowy, oktsalny

/* 010=>8
0 system oktsalny
10=>1 *8^1 *8+8*1=8+8=8*/
var szesnastkowy=0x10;//szesnastkowy heksadecymalny
/*0x10=>16
0x system szesnastkowy
10=>1*16^1+0*16^0=1*16+0*1=16+0=16*/

var liczba1=prompt("Podaj liczbe");
console.log("Podana pierwsza liczba z klawiatury" +liczba1);

var liczba2=prompt("Podaj drugą liczbe");
console.log("Podana druga liczba z klawiatury"+liczba2);
//typy zmiennych
console.log(typeof(liczba1))
console.log(typeof(liczba2))
//zmiana zmiennych na typ liczbowy
console.log(typeof(liczba1))
console.log(typeof(liczba2))
//typy zmiennych
console.log(typeof(liczba1))
console.log(typeof(liczba2))

suma=liczba1+liczba2;
console.log("Suma wynosi"+suma);
/* suma dwuch liczb zmienna przecinkowych parsefloat
wyświetl sumę dwuch liczb w formacie:"....."+......=......
np.3.5+4=7.5*/

var liczba3=prompt("Podaj liczbe");
console.log("Podana pierwsza liczba z klawiatury" +liczba1);
var liczba4=prompt("Podaj liczbe");
console.log("Podana pierwsza liczba z klawiatury" +liczba1);






//comel case

var liczbaPierwsza= parseFloat(prompt("podaj pierwszą liczbe","np.3.5"));
var liczbaDruga= parseFloat(prompt("podaj pierwszą liczbe","np.3.5"));
suma=liczbaPierwsza+liczbaDruga;
document.write(liczbaPierwsza+"+"+ liczbaDruga+"="+suma);


//potegowanie
var potega=Math.pow(2,4);
alert("potęga" +potega);


//napisz program który obliczy pole rostokąta dane podaje użytkownik z klawiatury liczby zmiennoprzecinkowe wynik wyświetl na ekranie w formacie bok a:....bok b:.... pole wynosi: ......cm2(2 w indeksie górnym) podobny sposób oblicz pole kola i trujkąta
