<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;
    public $timestamps = false;

    //Accrssor
    // function getNameAttribute($value){
    //     return ucfirst($value);
    // }

    //Mutator
    // function getNameAttribute($value){
    //     return $this->attributes['name'] = 'Mr.'.$value;
    // }

    
    

}
