// 栈数据；不可改变原始值      如值修改则   在新地址赋值  旧地址变为野指针
var $undefine
var _bool=({}=={})
var a=1
a='abc'
var arr=[1,'xxy',a]
var arr2=arr
arr=[2,'xxy',a]
document.write("undefine打印   "+$undefine+"</br>")
document.write("bool打印   "+_bool+"</br>")
document.write("a打印   "+a+"</br>")
document.write("arr打印   "+arr+"</br>")
document.write("arr2打印   "+arr2+"</br>")

//字符串拼接
var _a='a'+1+1;//打印a11
var _b=1+1+'a'+1+1;//打印2a11
var _c=1+1+'a'+(1+2);//打印2a3df

//0运算和NaN
var $a=0/0;//打印NaN
var $b=1/0;//打印Infinity无穷大
var $c=-1/0;//打印-Infinity无穷小

//前++和后++
var num1=10;
document.writeln(num1+++"</br>");
document.writeln(num1+"</br>");

var num2=10;
document.writeln(++num2+"</br>");
document.writeln(num2+"</br>");

var num3=10;
var num4=++num3-1+num3++;
document.write("num3="+num3+"</br>");//12
document.write("num4="+num4+"</br>");//21

//对象
var obj={
    lastName:"Deng",
    age:41,
    wife:"xiaoliu",
    handsome:false
}
obj.lastName="ji";
document.write(obj.lastName+"</br>")

//typeOf关键字
var __a=[];
var __b={};
var __c;
var __d=null;
var __f=NaN;
console.log("__a    "+typeof __a);//obj
console.log("__b    "+typeof __b);//obj
console.log("__c    "+typeof __c);//undefined
console.log("__d    "+typeof __d);//obj
console.log("__f    "+typeof __f);//number
console.log("__e    "+typeof __e);//undefined

//强制类型转换
var mix=1;
var mix2=0/0;
var mix3='2'
console.log(Number(mix));//1
console.log(Number(mix2));//NaN
console.log(Number(undefined));//NaN        Number()要么返回Number要么是NaN
console.log(Number(mix3));//2
console.log("**************************")

//将目标数以radix为基底   转化为十进制数
console.log(parseInt('10',16));//转化为十进制数为16
console.log(parseInt('1000abc',2));//转化为十进制数为 8
console.log(parseInt('abc',10));//打印NaN
console.log("**************************")

console.log("String(mix)    "+String(mix));//打印1
console.log("String(mix2)   "+String(mix2));//打印NaN
console.log("String(mix3)   "+String(mix3));//打印2
console.log("Boolean(mix)   "+Boolean(mix));//打印true
console.log("Boolean(mix2)  "+Boolean(mix2));//打印false
console.log("**************************")

//toString(目标进制数)
var target=10;
console.log("target.toString(2)"+target.toString(2));//将10转为二进制数字
console.log("target.toString()"+target.toString());//默认十进制
var name='Deng';
console.log("name.toString()    "+name.toString());
var $num=null;
var $num2=undefined;
/*
console.log($num.toString());//报错  无原型无法调用toString()
console.log($num2.toString());//报错   无原型无法调用toString()
*/
console.log("**************************")

//隐式类型转换
//  1.  isNaN()
var __num=undefined;
var __num2=NaN;
var __num3=10;
console.log("undefined    "+isNaN(__num));//是NaN
console.log("NaN    "+isNaN(__num2));//是NaN
console.log("10     "+isNaN(__num3));//不是NaN
console.log("*********")
//   2.   算术运算符  ++ -- +/-正负 + - * / %  逻辑运算符   && || !  比较运算符 > <
var aa='123';
aa++;
console.log("打印aa   "+aa);//先强转   Number(aa) 再++
var bb=+'abc';
console.log(bb+":   "+typeof bb);//打印   NaN: number
var cc="a"*1;
console.log(cc+": "+cc);//实际上是  Number("a")*Number(1)=NaN*1   打印NaN:NaN
console.log("**********")
var __a=1>'2';
var __b='1'>'2';
var __c=1=='1';
var __e=1==true;
var __f=2>1>3;
var __g=2>3<1;
var __h=10>100>0;
var _res=undefined==null;
var _res2=NaN==NaN;
console.log("1>'2'    "+__a);//false
console.log("'1'>'2'    "+__b);//false
console.log("1=='1'    "+__c);//true
console.log("1==true    "+__e);//true
console.log("2>1>3    "+__f);//false
console.log("2>3<1    "+__g);//true
console.log("10>100>0    "+__h);//false
console.log("undefined==null   "+_res);//true
console.log("NaN==NaN  "+_res2);//false
console.log("**************************")

//不发生类型转换
console.log("1===1  "+1===1);//地址需要一致
console.log("1!==\"1\"  "+1!=="1");
console.log("1===\"1\"  "+1==="1");
console.log("NaN===NaN  "+NaN===NaN);
var _$num=1;
var _$num2=1;
console.log("两个1比较  "+_$num===_$num2)




