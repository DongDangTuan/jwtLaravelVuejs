<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except('login','register');
    }
    public function register(Request $request){
        $user=new User();
        $validator=Validator::make($request->only('username','email','password'),
        [
            'username'=>'required',
            'email'=>'required',
            'password'=>'required'
        ]);
        if($validator->fails())
            {
                return response()->json(["status"=>false,"message"=>"Error"]);
            }
        else
        {
            $user->name=$request->input('username');
            $user->email=$request->input('email');
            $user->password=bcrypt($request->input('password')) ;
            $user->save();
            return response()->json(['status'=>true,'message'=>"register success"]);
        }

    }
    public function login(){
        $credentials=request(['email','password']);
        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }
    protected function respondWithToken($token)
    {
        return response()->json([
            'token' => $token,
            'token_type' => 'bearer',
            'user'=>$this->guard()->user(),
            'expires_in' => $this->guard()->factory()->getTTL() * 3600
        ]);
    }
    public function logout()
    {
        $this->guard()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }
    public function guard(){
        return Auth::guard();
    }
}
