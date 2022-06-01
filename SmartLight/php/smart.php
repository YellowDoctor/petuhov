<?php
header('Content-Type: text/html; charset=utf-8');
$_POST = json_decode(file_get_contents('php://input'), true);
date_default_timezone_set('Europe/Kiev');
$servername = "fdb18.awardspace.net";
$username = "2582024_feeder";
$password = "qawsedrf1";
$dbname = "2582024_feeder";
$conn = new mysqli($servername, $username, $password, $dbname);
if (!$conn->set_charset("utf8")) {
        printf("Error loading character set utf8: %s\n", $conn->error);
    }
    if ($_GET){
        if (array_key_exists('GetOn',$_GET)){
            $TimeOn = date("H:i");
            $file = fopen('smartOn.txt', 'w+');
            fwrite($file, $TimeOn);
            fclose($file);
        }
        if (array_key_exists('GetOff',$_GET)){
            $TimeOff = strtotime(date("H:i"));
            $filename = "smartOn.txt";
            $filenameFull = "smartFull.txt";

            $fileFull = fopen($filenameFull, 'r');
            if(filesize($filenameFull)){
                $File_Read = fread($fileFull, filesize($filenameFull));
            }else{
                $File_Read = 0;
            }
            fclose($fileFull);

            $file = fopen($filename, "r" );
            $fileFull = fopen($filenameFull, 'w+');
            echo filesize($filename)."<br>";
            echo filesize($filenameFull)."<br>";
            $TimeOn = strtotime(fread($file, filesize($filename)));
            $TimeFull =  $File_Read + $TimeOff - $TimeOn;
            echo 'TimeFull'." = ".$TimeFull."<br>";

            fwrite($fileFull, $TimeFull);
            fclose($file);
            fclose($fileFull);
        }
        if (array_key_exists('NewDay',$_GET)){
            $month_Year = date("Y-m")."-00";
            $dy = date("d");
            $filenameFull = "smartFull.txt";
            $fileFull = fopen($filenameFull, 'r');
            
            $sql_1 = "SELECT * FROM SmartForm WHERE id = (select max(id) from SmartForm)";
            $result = $conn->query($sql_1);
            $row = $result->fetch_assoc();
            $Watt = $row["LampPowerWatt"];
            
            
            $FullTimeWork = fread($fileFull, filesize($filenameFull)) / 3600 * $Watt;
            $sql = "INSERT INTO FullWorkTime (month_Year, dy, TimeWork)
                VALUES ('{$month_Year}', '{$dy}', '{$FullTimeWork}');";

                if ($conn->query($sql) === TRUE) {
                        echo "True";
                } else {
                        echo "Error: " . $sql . "<br>" . $conn->error;
                }

        }
    }
    if ($_POST){
        if (array_key_exists('Form',$_POST)){
            $sql = "INSERT INTO SmartForm (WattsPerHour, LampPowerWatt)
                VALUES ('{$_POST["WattsPerHour"]}', '{$_POST["LampPowerWatt"]}');";

                if ($conn->query($sql) === TRUE) {
                        echo "True";
                } else {
                        echo "Error: " . $sql . "<br>" . $conn->error;
                }
        }
        if (array_key_exists('month_picker',$_POST)){
        $sql_1 = "SELECT * FROM FullWorkTime WHERE month_Year = '{$_GET["Value"].'-00'}'";
            $result = $conn->query($sql_1);
            $row = $result->fetch_assoc();
            $Test3 = "TEST";
            $Test2 = $row["month_Year"];
            $Test1 = $_POST["Value"]."-00";
            $filenameFull = "test.txt";
            $fileFull = fopen($filenameFull, 'w+');
            fwrite($fileFull, $Test1);
            fclose($fileFull);

            $sql = "INSERT INTO Test (test1, test2, test3)
                VALUES ('{$Test1}', '{$Test2}', '{$Test3}');";

                if ($conn->query($sql) === TRUE) {
                        echo "True";
                        echo "qwertyuuii";
                } else {
                        echo "Error: " . $sql . "<br>" . $conn->error;
                        echo "quuii";
                }
        }
    }
    ?>