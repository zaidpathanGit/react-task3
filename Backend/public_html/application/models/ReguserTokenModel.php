<?php

class ReguserTokenModel extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }

    public function insertIntoToken($uid, $token)
    {
        try {
            $this->db->insert(
                "reguser_token",
                array("uid" => $uid, "token" => $token)
            );
        } catch (\Exception $e) {

            die($e->getMessage());
        }
    }

    public function updateIntoToken($uid, $token)
    {
        try {
            $this->db->where("uid", $uid);

            $this->db->update(
                "reguser_token",
                array("uid" => $uid, "token" => $token)
            );
        } catch (\Exception $e) {

            die($e->getMessage());
        }
    }

    public function searchToken($uid, $token)
    {
        $this->db->where('uid', $uid);

        if ($token != null) {
            $this->db->where('token', $token);
        }

        return $this->db->get("reguser_token")->result_array();
    }
}
