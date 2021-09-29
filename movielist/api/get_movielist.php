<?php
require_once('./dbconfig.php');

if($_SERVER['REQUEST_METHOD'] == "POST" ){
    $select_stmt=$db->prepare("SELECT * FROM tbl_movies_list");
    $select_stmt->execute();


    $data_arr=array();
    $data_arr['result']=array();

    while ($row=$select_stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $data_item = array(
            "id"=>$id,
            "name"=>$name,
            "type"=>$type
        );
        array_push($data_arr['result'], $row);

    }
    echo json_encode($data_arr);
    http_response_code(200);

}
else{
    http_response_code(405);
}


?>