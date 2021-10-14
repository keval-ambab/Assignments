<?php

namespace App\Http\Controllers;

@include('common.alert');

use Illuminate\Http\Request;
use App\Models\Member;

class MemberController extends Controller
{
    //SHOW
    function show(){
        // return view('list'); 
        $data =  Member::paginate(5);
        return view('list',['member'=>$data]);
    }

    //ADD
    function addData(Request $req){
        $member = new Member;
        // $member->name=$req->id;
        $member->name=$req->name;
        $member->save();
        return redirect('add');
        // return redirect('showme')->with('alert','Your data added successfully!');
        // return redirect()->route('add.index')->with('success', 'User Deleted successfully.');

    }

    //DELETE 
    function delete($id){
        $data =  Member::find($id);
        $data -> delete();
        return redirect('showme');
    }


    //UPDATE 
    function showdata($id){
        $data =  Member::find($id);
        return view('editmember',['data'=>$data]);
    }

    function update(Request $req){
        $data =  Member::find($req->id);
          // $member->name=$req->id;
          $data->name=$req->name;
          $data->save();
          return redirect('showme');
        
    }

}
