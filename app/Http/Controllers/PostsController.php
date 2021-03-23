<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\Posts;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    /**
     * Get 10 posts
     * page is declared in `route/to/method/?page=id`
     *@param Request $request
     *@return Posts[10]
     */
    public function index(Request $request)
    {
        $posts = Posts::select('title', 'content', 'votes')->paginate(10);
        return response()->json($posts);
    }
    /**
     * Create a post
     *  @param Request $request
     *  @return Posts
     */
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'content' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['err' => $validator->errors()], 400);
        }
        $input = $request->all();
        $post = Posts::create($input);
        return response()->json(["status" => "Post uploaded sucessfully", "id" => $post->id]);
    }
    /**
     * Show a specific Post
     * @param int $id
     * @return Posts
     */
    public function show($id)
    {
        $query = Posts::select("title", "content", "votes", "views")->where("id", "=", $id)->first();
        if ($query) {
            $query->views += 1;
            $query->save();
            return response()->json($query);
        }
        return response('', 404);
    }
}
