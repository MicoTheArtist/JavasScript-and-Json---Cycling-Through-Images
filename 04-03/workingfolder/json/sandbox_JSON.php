<?

	$host = 'localhost';
	$user = 'root';
	$pw   = 'root';
	$database = 'micosDB';
	
	
	$con = mysqli_connect($host, $user, $pw, $database);
		if (mysqli_connect_errno($connection)) { echo 'Failed to connect to MySQL: '.mysqli_connect_error(); }
	$sql = "select * from sandbox";
	$result = mysqli_query($con, $sql);
	$row = array();
	//$count = count($row[] = mysqli_fetch_assoc($result));
	while($row = mysqli_fetch_assoc($result)) {
		$rows[] = $row;
	}
	
	echo '{ "listings" :  ';
	echo json_encode($rows);
	echo '}';
?>