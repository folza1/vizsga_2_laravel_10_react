<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class RegistrationController extends Controller
{
    public function register(Request $request)
    {
        try {
            // Itt történik a regisztráció

            // Logolás a $request tartalmáról
            \Log::info('Request content: ' . json_encode($request->all()));

            $attributes = $request->validate([
                'name' => 'required|string|min:3|max:255',
                'email' => 'required|email|unique:users,email',
                'country' => 'required', // Assumed country is stored as a numeric ID
                'city' => 'required',
                'tel' => 'required|numeric',
                'birth' => 'required|date',
                'password' => 'required|string|min:8|max:64|confirmed',
                'gender' => 'required|string|in:male,female,other',
                'acceptTerms' => 'required|boolean',
            ]);

            $user=User::create($attributes);

            return response()->json(['message' => 'Registration successful'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Registration failed', 'error' => $e->getMessage()], 500);
        }
    }
}
