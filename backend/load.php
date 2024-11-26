<?php
$userId = $_SERVER['REMOTE_ADDR'];

$db = new SQLite3('database/cars.db');
$stmt = $db->prepare('SELECT config FROM cars WHERE user_id = :user_id');
$stmt->bindValue(':user_id', $userId, SQLITE3_TEXT);
$result = $stmt->execute();

$configs = [];
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
    $configs[] = json_decode($row['config'], true);
}

echo json_encode($configs);
