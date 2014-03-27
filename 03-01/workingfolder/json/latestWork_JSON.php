<?

	$host = 'localhost';
	$user = 'root';
	$pw   = 'root';
	$database = 'micosDB';
	
	
	$con = mysqli_connect($host, $user, $pw, $database);
		if (mysqli_connect_errno($connection)) { echo 'Failed to connect to MySQL: '.mysqli_connect_error(); }
	$sql = "select * from latestWork where date_deleted = 0;";
	$result = mysqli_query($con, $sql);
	$row = array();

	while($row = mysqli_fetch_assoc($result)) {
		$rows[] = $row;	
	}
	echo '{ "latestWork" :  ';
	echo json_encode($rows, JSON_PRETTY_PRINT);
	echo '}';
?>