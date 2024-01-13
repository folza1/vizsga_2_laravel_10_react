<?php

namespace App\Http\Controllers;

use App\Models\City;
use Illuminate\Http\Request;

class CitiesController extends Controller
{
    public function getCitiesByCountry($countryId)
    {
        $cities = City::where('country_id', $countryId)->get();

        return response()->json($cities);
    }
}
