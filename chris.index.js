
var userinput = prompt("Press 1 to list all English to Spanish translations, press 2 to list all Spanish to English translations, press 3 to enter a new English translation, press 4 to enter a new Spanish translation, and press 5 or 'q' to quit.");

while (userinput!=="q")
{

        if (userinput === "1")

        {
            console.log(english);

        }

        else if (userinput === "2")
        {

            console.log(spanish);
        }

        else if (userinput === "3")
        {
         english_to_spanish();
        }

        else if (userinput === "4")
        {
            spanish_to_english();
        }

}