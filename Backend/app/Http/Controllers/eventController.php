<?php

namespace App\Http\Controllers;

use App\event;
use App\guest;
use App\transaction;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class eventController extends Controller
{
     function getEvent(){

        //eloquent
        $eventList = event::get();


        return response()->json($eventList,200);
        //pengganti return $userList;
    }

    function addEvent(Request $request){

        //untuk rollback data jika ada yang error sebagian
        DB::beginTransaction();

        try{
            

            $this->validate($request, [
                'name' => 'required',
                'date'=> 'required|date',
                'location' => 'required',
                'price' => 'required',
                'qty' => 'required|integer'
            ]);

            $name = $request->input('name');
            $date = $request->input('date');
            $location = $request->input('location');
            $price = $request->input('price');
            $qty = $request->input('qty');
            $description = $request->input('description');

            //save ke database(eloquent)

            $ev = new event;
            $ev->name = $name;
            $ev->location = $location;
            $ev->price = $price;
            $ev->date = $date;
            $ev->qty = $qty;
            $ev->description = $description;
            //$usr->save adalah untuk insert
            $ev->save();

            $eventList= event::get();
            //temannya beginTransaction(); untuk commit data
            DB::commit();
            return response()->json($eventList, 200);
        }
        catch(\Exception $e){

            //temannya beginTransaction(); untuk rollback
            DB::rollback();
            return response()->json(["message" => $e->getMessage()], 500);
        }


    }

    function buy(Request $request){

        //untuk rollback data jika ada yang error sebagian
        DB::beginTransaction();

        try{
            
            
            $id = $request->input('id');
            
            $ev = event::find($id); //mirip seperti where
            if(empty($ev)){
                return response()->json(["message"=>"Event not found"], 404);
            }
            
            $ev->qty-=1;
            

            //save ke database(eloquent)

            $gu = new guest;
            $gu->name = $name;
            $gu->email = $email;
            
            //$usr->save adalah untuk insert
            $gu->save();

            $eventList= UserList::get();
            //temannya beginTransaction(); untuk commit data
            DB::commit();
            return response()->json($eventList, 200);
        }
        catch(\Exception $e){

            //temannya beginTransaction(); untuk rollback
            DB::rollback();
            return response()->json(["message" => $e->getMessage()], 500);
        }


    }

}
