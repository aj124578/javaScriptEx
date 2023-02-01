function m1(){

}
function m2(){
    return 2;
}
function m3(a){
    console.log("앞 m3");
}
let m4 = function(){};

let m5 = ()=>{}; // 람다식
let m6 = ()=>1; // m7처럼 바로 리턴하는 메소드를 만들고 싶으면 이렇게 작성할 수 있음
let m7 = ()=>{
    return 1;
}; 