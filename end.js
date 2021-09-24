<!DOCTYPE html>
<html>
    <body>
        <p id="demo"></p>
        <script>
        function myDisplay(some){
                document.getElementById("demo").innerHTML=some;
            }
        function myFirst(){
            myDisplay("Thank");
        }
        function mySecond(){
            myDisplay("You");
        }
        mySecond();
        myFirst();
        </script>
    </body>
</html>
