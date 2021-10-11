<?php
include_once('connection.php');
$jsonInput = file_get_contents('php://input');
$obj = json_decode($jsonInput);

$qid=$obj->questionid;
$cid=$obj->categoryid;
$ans=$obj->answer;
$status=$obj->status;

$userid=1;

$sql1="SELECT * FROM test WHERE question_id=$qid and userid=$userid and category_id=$cid";
$result = $conn->query($sql1);
// echo $result->num_rows.'<br>';
if ($result->num_rows > 0) {
	$sql="UPDATE `test` SET `answer`='".$ans."',`status`=$status WHERE question_id=$qid and userid=$userid and category_id=$cid";
}else{
	$sql="INSERT INTO `test`(`userid`, `category_id`, `question_id`, `answer`, `status`) VALUES ($userid,$cid,$qid,'".$ans."',$status)";
}
// echo $sql;
if ($conn->query($sql) === TRUE) {
	echo 'true';
}else{
	echo 'false';
}
exit;