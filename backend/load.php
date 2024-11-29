<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['id'])) {
    $id = $_GET['id'];
    $file = __DIR__ . '/db/creations.json';

    if (!file_exists($file)) {
        http_response_code(404);
        echo json_encode(["message" => "No creations found"]);
        exit;
    }

    $data = json_decode(file_get_contents($file), true);
    $creation = $data[$id] ?? null;

    if ($creation) {
        echo json_encode($creation);
    } else {
        http_response_code(404);
        echo json_encode(["message" => "Creation not found"]);
    }
}
?>
