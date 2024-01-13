<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CountriesController extends Controller
{
    public function getCountries()
    {
        $countries = Country::all();

        return response()->json(['countries' => $countries]);
    }
}
