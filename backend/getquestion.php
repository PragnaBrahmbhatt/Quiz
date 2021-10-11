<?php
include_once('connection.php');

$qid=$_REQUEST['questionid'];
$cid=$_REQUEST['categoryid'];
$userid=1;

$questiondata=array();
$answerdata=array();
$allquestiondata=array();
$lastquestion=array();

$sql = "SELECT *,(SELECT count('*') FROM questions WHERE id >$qid AND category_id=$cid) as next,(SELECT count('*') FROM questions WHERE id <$qid AND category_id=$cid) as prev FROM questions WHERE id=".$qid." AND category_id=".$cid;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
 	$questiondata = $result->fetch_assoc();
}

$sql = "SELECT * FROM test WHERE question_id=$qid and userid=$userid and category_id=$cid";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
 	$answerdata = $result->fetch_assoc();
}

$sql = "SELECT t1.* FROM test t1
  JOIN (SELECT category_id, MAX(question_id) question_id FROM test GROUP BY category_id) t2
    ON t1.question_id = t2.question_id AND t1.category_id = t2.category_id WHERE t1.category_id=$cid";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
 	$lastquestion = $result->fetch_assoc();
}

$sql = "SELECT * FROM questions WHERE category_id=$cid";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
 	$allquestiondata = [];
 	while($row = $result->fetch_assoc()) {
 		$allquestiondata[]=$row;
	}
}

$sql = "SELECT * FROM categories";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
 	$allcategories = [];
 	while($row = $result->fetch_assoc()) {
 		$allcategories[]=$row;
	}
}

$data=array(
	'questiondata'=>$questiondata,
	'answerdata'=>$answerdata,
	'allquestiondata'=>$allquestiondata,
	'lastquestion'=>$lastquestion,
	'allcategories'=>$allcategories
);
$data=json_encode($data,true);
echo $data;
?>