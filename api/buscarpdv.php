<?php

require_once '../database/connect.php';
require_once 'produtos.php';


header('Content-Type: application/json'); 

if (!isset($_GET['codigo_barras']) || empty(trim($_GET['codigo_barras']))) {
    
    echo json_encode([
        'success' => false,
        'message' => 'Código de barras não fornecido'
    ]);
    exit;
}

$codigoBarras = $_GET['codigo_barras'];

$produto = new Produto();
$resultado = $produto->buscarCodigo($codigoBarras);

if ($resultado) {
    echo json_encode([
        'success' => true,
        'produto' => $resultado,
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Produto não encontrado'
    ]);
}   

?>