function getRadioValue() {
    var userz = 0;

    var questions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];

    questions.forEach(function(question) {
        var ele = document.getElementsByName(question);
        for (var i = 0; i < ele.length; i++) {
            if (ele[i].checked) {
                userz += 1;
            }
        }
    });

    if (userz <= 3) {
        function showAlert(message) {
            window.alert(message);
        }
    showAlert("You are a Spender!");
    }
     else if (userz > 3 && userz <= 4) { 
            function showAlert(message) {
                window.alert(message);
            }
        showAlert("You are a Saverr!"); 
}
else{
    function showAlert(message) {
        window.alert(message);
    }
showAlert("You are a Investor!"); 
}
}