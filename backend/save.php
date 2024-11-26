<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $userId = $_SERVER['REMOTE_ADDR']; // Simple identification (à améliorer)
    $carConfig = $data['config'];

    $db = new SQLite3('database/cars.db');
    $stmt = $db->prepare('INSERT INTO cars (user_id, config) VALUES (:user_id, :config)');
    $stmt->bindValue(':user_id', $userId, SQLITE3_TEXT);
    $stmt->bindValue(':config', json_encode($carConfig), SQLITE3_TEXT);
    $stmt->execute();

    echo json_encode(['status' => 'success']);
} else {
    http_response_code(405);
}
