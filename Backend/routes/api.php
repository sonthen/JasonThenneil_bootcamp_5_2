<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::group(['prefix'=>'userlist'], function(){

// Route::get('/','UserListController@getData');
// Route::post('/add','UserListController@addData');
// Route::post('/delete','UserListController@deleteData');
// });

// Route::post('/login','AuthenticationController@login');
// Route::post('/register','AuthenticationController@register');

// localhost:8000/api/userlist/getdata
// localhost:8000/api/userlist/adddata


Route::get('/getEvent','eventController@getEvent');
Route::post('/addEvent','eventController@addEvent');
Route::post('/buy','eventController@buy');