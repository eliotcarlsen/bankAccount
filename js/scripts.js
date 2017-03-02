$(document).ready(function(){
  $("form#newAccount").submit(function(event){
    event.preventDefault();
    var name = $(".name").val();
    var initDeposit = parseFloat($(".initDeposit").val());
    console.log(name);
    console.log(initDeposit);
  });
  $("form#deposit").submit(function(event){
    event.preventDefault();
    var deposit = parseFloat($(".deposit").val());
    var withdraw = parseFloat($(".withdraw").val());
    console.log(deposit);
    console.log(withdraw);
  })
});
