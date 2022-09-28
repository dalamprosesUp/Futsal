// 1. Syntax Branching If

// var totalBelanja = 120000;

// if(totalBelanja > 100000){
//    document.getElementById("if").innerHTML = "Selamat, Anda dapat hadiah"
// }

//===============================================================================================

// 2. Syntax Brachung If Else

//var totalBelanja = 100000;

//if(totalBelanja > 100000){
//    document.getElementById("ifelse").innerHTML = "Selamat, Anda dapat hadiah"
//}else{
//    document.getElementById("ifelse").innerHTML = "Terima Kaih, sudah berbelanja"
//}

//Ketika ada 2 kondisi iyu pakai If Else

//===============================================================================================

// 3. Syntax Braching If Else If

//var totalBelanja = 250000;

//if(totalBelanja > 500000){
//    document.getElementById("ifelse").innerHTML = "Selamat, Anda dapat Mobil";
//}else if(totalBelanja > 400000){
//    document.getElementById("ifelse").innerHTML = "Selamat, Anda dapat Motor";
//}else if(totalBelanja > 300000){
//    document.getElementById("ifelse").innerHTML = "Selamat, Anda dapat Sepeda";
//}else{
//    document.getElementById("ifelse").innerHTML = "Terima kasih, Sudah berbelanja";
//}

//Ketika kondisinya lrbih dari 2

//==================================================================================================

// 4. Syntax Braching Switch case

// var totalBelanja = prompt("Masukkan total belanja");
// var hadiah;

//switch (true) {
//case totalBelanja >= 500000:
//    hadiah = "Selamat, Anda dapat Mobil";
//    document.getElementById("switchCase").innerHTML = hadiah;
//    break;

//case totalBelanja >= 400000:
//    hadiah = "Selamat, Anda dapat Motor";
//    document.getElementById("switchCase").innerHTML = hadiah;
//    break;

//case totalBelanja >= 300000:
//    hadiah = "Selamat, Anda dapat Sepeda";
//    document.getElementById("switchCase").innerHTML = hadiah;
//    break;

//default:
//    hadiah = "Terima kasih, sudah berbelanja";
//    document.getElementById("switchCase").innerHTML = hadiah;
//}

// Bwntuk lain dari If Else If

//=========================================================================================================

// 5. Syntax Branching Ternary

//var totalBelanja = 100000

//var hadiah = totalBelanja == 100000 ? "Selamat, Anda Dapat Mobil" : "Terima Kasih, usdah berbelanja";

//document.getElementById("ternary").innerHTML = hadiah;

//Bentuk lain dari If Else

//===========================================================================================================

//6. Syntax Branching Nested

//database

var users = {name:"Febryan", email:"admin@gmail.com", password:"1234", role:"admin"};

function login(){

    var email      = document.getElementById("email").value;
    var password   = document.getElementById("password").value;
    
    if(users.email == email){
        if(users.password == password){
            if(users.role == "admin"){
                alert("Selamat Datang " + users.name);
            }
        }else{
            alert("Kesalahan Autentikasi !");
        }
    }else{
        alert("Kesalahan Autentikasi !");
    }
}
//if(users.email == )