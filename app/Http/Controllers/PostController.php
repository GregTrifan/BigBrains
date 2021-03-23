<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Get 10 posts
     * page is declared in `route/to/method/?page=id`
     *@param Request $request
     *@return Post[10]
     */
    public function index(Request $request)
    {
        $posts = Post::select('title', 'content', 'votes')->paginate(10);
        return response()->json($posts);
    }
    /**
     * Create a post
     *  @param Request $request
     *  @return Post
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
        $post = Post::create($input);
        return response()->json(["status" => "Post uploaded sucessfully", "id" => $post->id]);
    }
    /**
     * Show a specific Post
     * @param int $id
     * @return Post
     */
    public function show($id)
    {
        $query = Post::select("title", "content", "votes", "views")->where("id", "=", $id)->first();
        if ($query) {
            $query->views += 1;
            $query->save();
            return response()->json($query);
        }
        return response('', 404);
    }
}
