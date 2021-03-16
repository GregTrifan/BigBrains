<?php

namespace App\Http\Controllers;
use Validator;
use App\Models\Posts;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function index(Request $request) {
        $posts = Posts::select('title','content','votes')->paginate(10);
        return response()->json($posts);
    }
    public function create(Request $request) {
        $validator = Validator::make($request->all(), [
            'title'=> 'required',
            'content'=> 'required'
        ]);
        if($validator->fails()) {
            return response()->json(['err'=>$validator->errors()]);
        }
    }
    public function show($id) {
        $query=Posts::where("id","=",$id)->first();
        if ($query) {
            $query->views+=1;
            $query->save();
            return response()->json($query);
        }
        return response('',404);
    }
}
