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
if($_GET){
        $n1 = "SELECT * FROM nick WHERE id = (select max(id) from nick)";
        $n2 = $conn->query($n1);
        $row_n = $n2->fetch_assoc();
        $pet_name = $row_n["nick"];

        $t1 = "SELECT * FROM timer WHERE id = (select max(id) from timer)";
        $t2 = $conn->query($t1);
        $row_t = $t2->fetch_assoc();
        $time_ot = $row_t["timeot"];
        $time_do = $row_t["timedo"];
        $current_time = date("H:i");
        if($time_ot<=$current_time && $time_do>=$current_time){
                $status = "Поел и не нарушил";
                echo $status;
        }else{
                $status = "Поел и нарушил";
                echo $status;
        }
        $date_eat = date("H:i M Y");
        $charts = date("m Y");
        $history = "INSERT INTO history (dt, nick, stat)
        VALUES ('{$date_eat}', '{$pet_name}', '{$status}');";
        if ($conn->query($history) === TRUE) {
        }
}
if($_POST){

        if (array_key_exists('OT',$_POST)){
                $sql = "INSERT INTO timer (timeot, timedo)
                VALUES ('{$_POST["OT"]}', '{$_POST["DO"]}');";

                if ($conn->query($sql) === TRUE) {

                } else {
                        echo "Error: " . $sql . "<br>" . $conn->error;
                }
        }



        if (array_key_exists("Table",$_POST)){
                $sql_1 = "SELECT * FROM timer WHERE id = (select max(id) from timer)";
                $result = $conn->query($sql_1);
                $row = $result->fetch_assoc();
                $myObj = new \stdClass();
                $myObj->ot = $row["timeot"];
                $myObj->do = $row["timedo"];
                
                $myJSON = json_encode($myObj);
                
                echo $myJSON;
        }
        if(array_key_exists("name",$_POST)){
                $sql = "INSERT INTO nick (nick)
                VALUES ('{$_POST["name"]}');";

                if ($conn->query($sql) === TRUE) {
                        echo "try";
                } else {
                        echo "Error: " . $sql . "<br>" . $conn->error;
                }
        }
        if (array_key_exists('refrech',$_POST)){
                $return_arr = Array();
                $rf = "SELECT * FROM history WHERE 1";
                $rf_result = $conn->query($rf);
                while($rf_row = $rf_result->fetch_assoc()){
                        array_push($return_arr,$rf_row);
                }
                echo json_encode($return_arr,  JSON_UNESCAPED_UNICODE);      
        }
}
$conn->close();
 ?>