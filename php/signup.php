<?php
$updatedData = $_POST['newData'];
file_put_contents('users.json', $updatedData);
?>