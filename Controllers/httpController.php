<?php
header('Content-type: application/json');
class http
{
    public function __construct()
    {
        $this->request();
        print_r($this->request());
    }
    public function request()
    {
        $url  = 'API/produtos/comprar';
        $data = file_get_contents("php://input");
        $ch   = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        $result = curl_exec($ch);
        curl_close($ch);
        return $data;
    }
}