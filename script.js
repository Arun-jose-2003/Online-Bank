function registeruser(){
  // event.preventDefault();
  window.location='./register.html'
  
}
function loginuser(){
  window.location='./login.html'
}
function register(){
let username=document.getElementById('Username').value
let email=document.getElementById('Email').value
let accno=document.getElementById('accno').value
let password=document.getElementById('Password').value
let balance=0;
userobj={
  User:username,
  Email:email,
  accountno:accno,
  Password:password,
  balance:balance
}
if(userobj.accountno in localStorage){
  alert("User already registered")
}
else if(userobj.User=="" || userobj.accountno=="" || userobj.Password==""|| userobj.Email==""){                 
  alert("please fill all fields")
}
else{
  window.localStorage.setItem(userobj.accountno,JSON.stringify(userobj))
  
  alert("Registration successfull")
  window.location='./login.html'
  
}


}

function login() {
  let Accountno = document.getElementById('Accno').value;
  let Password = document.getElementById('password').value;

  if (Accountno in localStorage) {
      let out = JSON.parse(localStorage.getItem(Accountno));
      if (Accountno == "" || Password == "") {
          alert("Please fill the fields");
      } else if (Accountno == out.accountno && Password == out.Password) {
          alert("Login Successful");
          // Store the username in localStorage
          localStorage.setItem('loggedInUser', out.User);
          window.location = './home.html';
      } else {
          alert("Please type the correct account number and password");
      }
  } else {
      alert("User not registered");
  }
}



// let user=JSON.parse(localStorage.getItem('Accountno'))
// console.log(user);

// head1.innerHTML = `Welcome ${user.User}`
let form = document.querySelector('.form')

function deposite() {
let amount = document.getElementById('deposit-amount').value
let Accno = document.getElementById('deposit-account').value
if(Accno in localStorage){
  Accountdetails=JSON.parse(localStorage.getItem(Accno))
  let balanceAmount = parseInt(Accountdetails.balance)
  let depositeAmount = parseInt(amount)

if (depositeAmount<=0|| depositeAmount=='') {
  alert("Enter the Amount to be Deposited")
}else{
  balanceAmount = balanceAmount + depositeAmount
  Accountdetails.balance = balanceAmount
  // console.log(user.balance);
  localStorage.setItem(Accno, JSON.stringify(Accountdetails))
  alert("Your Amount is Deposited Successfully")
  deporesult=document.querySelector('.depositresult')
  deporesult.innerHTML = `Your current balance ${balanceAmount}`

}
}
else{
alert("incorrect Account number")
}


}
function withdraw() {
let withdrawAmount = document.getElementById('withdrawal-amount').value
let withdrawAccno = document.getElementById('withdrawal-account').value

// console.log(Account);
if (withdrawAccno in localStorage) {
  let Account = JSON.parse(localStorage.getItem(withdrawAccno))
  if (withdrawAmount <= Account.balance) {
      // console.log(typeof(withdrawAmount));//doubt idh string aanenkil eghene aan if contitionil adh work aavunne
      
      alert(`${withdrawAmount} is withdrawn from your account `)
      Account.balance -= withdrawAmount
      // console.log(Account.balance);
      localStorage.setItem(withdrawAccno, JSON.stringify(Account))
      resultwithdraw=document.getElementById('withdrawresult')
      resultwithdraw.innerHTML = `Your current balance ${Account.balance}`
  }
  else{
      alert("insufficient balance")
      resultwithdraw=document.getElementById('withdrawresult')

      resultwithdraw.innerHTML = `Insufficient Balance <br>
      Your current balance ${Account.balance}`
  }
}
else{
  alert("incorrect account number")
}
}





function logout() {
  localStorage.removeItem('Accno')
localStorage.clear()
window.location = './login.html'
}