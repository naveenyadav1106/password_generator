$(document).ready(function() {
    const lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";

    $("#generate").click(function() {
        const length = $("#length").val();
        let characters = "";
        let password = "";

        if ($("#lowercase").prop("checked")) {
            characters += lowercaseletters;
        }
        if ($("#uppercase").prop("checked")) {
            characters += uppercaseletters;
        }
        if ($("#numbers").prop("checked")) {
            characters += numbers;
        }
        if ($("#symbols").prop("checked")) {
            characters += symbols;
        }

        for (let i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        // Now you can use the generated password, for example:
        $("#password").val(password);
    });
});
