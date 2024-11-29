<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupération des données envoyées depuis le frontend
    $jsonData = file_get_contents('php://input');
    $data = json_decode($jsonData, true);

    if (!$data) {
        http_response_code(400);
        echo json_encode(["message" => "Invalid data format"]);
        exit;
    }

    // Sauvegarde dans le fichier JSON
    $file = __DIR__ . '/db/creations.json';
    $currentData = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
    $currentData[] = $data;

    file_put_contents($file, json_encode($currentData, JSON_PRETTY_PRINT));
    echo json_encode(["message" => "Creation saved successfully"]);
}
?>
