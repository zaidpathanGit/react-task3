<?php

defined('BASEPATH') or exit('No direct script access allowed1');

require APPPATH . 'third_party/REST_Controller.php';
require APPPATH . 'third_party/Format.php';

use Restserver\Libraries\REST_Controller;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: Authorization, Username, Content-type");

    exit(0);
}


class Api extends REST_Controller
{
    public function __construct()
    {
        parent::__construct();

        // Load these helper to create JWT tokens
        $this->load->helper(['jwt', 'authorization']);

        //Load models
        $this->load->model('ReguserModel');
        $this->load->model('ReguserTokenModel');
        $this->load->model('TaskInfoModel');
    }

    //Function for login of user
    public function login_post()
    {
        try {
            // Extract user data from POST request
            $username = $this->post('username');
            $password = $this->post('password');

            //Create HTTP status
            $status = parent::HTTP_INTERNAL_SERVER_ERROR;
            $msg = null;
            $response = ['status' => $status, "msg" => "Something went wrong while processing your request.!"];

            //Code to check if all parameters are exists or not
            if ($username != "" && $password != "") {
                //encrypting password
                $password = md5($password);

                //Code to check if username is exists or not
                $querySet = $this->ReguserModel->searchUser($username, $password);
                if (count($querySet) > 0) {
                    // Create a token from the user data and send it as reponse
                    $token = AUTHORIZATION::generateToken(['username' => $username]);

                    //Condition to check if old token is already exists
                    if (count($this->ReguserTokenModel->searchToken($querySet[0]['uid'], null)) > 0) {
                        $this->ReguserTokenModel->updateIntoToken($querySet[0]['uid'], $token);
                    } else {
                        $this->ReguserTokenModel->insertIntoToken($querySet[0]['uid'], $token);
                    }

                    // Prepare the response
                    $status = parent::HTTP_OK;
                    $response = ['status' => $status, 'token' => $token];
                } else {
                    $status = parent::HTTP_NOT_FOUND;
                    $msg = "Wrong username or password.!";
                    $response = ['status' => $status, "msg" => $msg];
                }
            }

            //Returning the response to the user
            $this->response($response, $status);
        } catch (\Exception $e) {
            echo $e;
        }
    }

    //Function for user registration
    public function reg_post()
    {
        // Extract user data from POST request
        $username = $this->post('username');
        $password = $this->post('password');
        $email = $this->post('email');

        //Create HTTP status
        $status = parent::HTTP_INTERNAL_SERVER_ERROR;
        $msg = "Something went wrong while processing your request.!";

        //Code to check if all parameters are exists or not
        if ($username != "" && $password != "" && $email != "") {
            //encrypting password
            $password = md5($password);

            //Code to check if username is exists or not
            if (count($this->ReguserModel->searchUser($username, $password)) > 0) {
                $msg = "Username already exists.!";
            } else {
                //Calling function to insert record into reguser table
                if ($this->ReguserModel->insertIntoReguser($username, $password, $email) == 1) {
                    $status = parent::HTTP_CREATED;
                    $msg = "User registered successfully.!";
                }
            }
        }

        //Returning the response to the user
        $response = ['status' => $status, "msg" => $msg];
        $this->response($response, $status);
    }

    //Function for insert new task in db
    public function task_post()
    {
        $this->verify_token_get();

        // Extract user data from POST request
        $taskname = $this->post('taskname');
        $projectname = $this->post('projectname');
        $stime = $this->post('stime');
        $etime = $this->post('etime');
        $username = $this->post('username');

        //Create HTTP status
        $status = parent::HTTP_INTERNAL_SERVER_ERROR;
        $response = ['status' => $status, "msg" => "Something went wrong while processing your request.!"];

        if ($taskname != "" && $projectname != "" && $stime != "" && $etime != "" && $username != "") {
            if ($this->TaskInfoModel->insertIntoTask($taskname, $projectname, $stime, $etime, $username) == 1) {
                $status = parent::HTTP_OK;
                $response = ['status' => $status, "msg" => "Task added.!"];
            }
        }

        //Returning the response to the user
        $this->response($response, $status);
    }

    //Function to get particular user task
    public function task_get()
    {
        $this->verify_token_get();

        // Extract user data from POST request
        $username = $this->get('username');

        //Create HTTP status
        $status = parent::HTTP_NOT_FOUND;
        $response = ['status' => $status, "msg" => "No task found.!"];

        if ($username != "") {
            $status = parent::HTTP_OK;
            $response = [
                "response" => $this->TaskInfoModel->getUserTask($username),
                'status' => $status
            ];
        }

        // Returning the response to the user
        $this->response($response, $status);
    }

    //Function to get particular user task by date
    public function taskbydate_get()
    {
        $this->verify_token_get();

        $headers = $this->input->request_headers();

        // Extract user data from request
        $username = $_REQUEST['username'];
        $date = $this->get('date');

        //Create HTTP status
        $status = parent::HTTP_NOT_FOUND;
        $response = ['status' => $status, "msg" => "No task found.!"];

        if ($username != "" && $date != "") {
            $status = parent::HTTP_OK;
            $response = [
                'status' => $status,
                "response" =>
                $this->TaskInfoModel->getUserTaskByDate($username, $date)
            ];
        }

        //Returning the response to the user
        $this->response($response, $status);
    }

    //Function to verify user token
    public function verify_token_get()
    {
        error_reporting(0);
        try {
            // Get all the headers
            // $headers = $this->input->request_headers();

            if (isset($_REQUEST['Authorization']) && isset($_REQUEST['username'])) {
                // Extract the token
                $token = $_REQUEST['Authorization'];
                $username = $_REQUEST['username'];

                //Code to check if all parameters are exists or not
                if ($username != "" && $token != "") {
                    //Code to check if username is exists or not
                    $querySet = $this->ReguserModel->searchUser($username, null);
                    if (count($querySet) > 0) {
                        //Condition to check if old token is already exists
                        if (count($this->ReguserTokenModel->searchToken($querySet[0]['uid'], $token)) <= 0) {
                            $this->Internal_Server_Error();
                            exit();
                        }
                    } else {
                        $this->Internal_Server_Error();
                    }
                } else {
                    $this->Internal_Server_Error();
                }
            } else {
                $this->Internal_Server_Error();
            }
        } catch (\Exception $e) {
        }
    }

    //Functino to throw server error
    private function Internal_Server_Error()
    {
        $status = parent::HTTP_UNAUTHORIZED;
        $this->response(
            [
                'status' => $status,
                "msg" => "Unauthorized access.!"
            ],
            $status
        );
    }
}
