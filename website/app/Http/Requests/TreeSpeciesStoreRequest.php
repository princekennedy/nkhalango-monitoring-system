<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TreeSpeciesStoreRequest extends FormRequest
{
    /**
     * Indicates if the validator should stop on the first rule failure.
     *
     * @var bool
     */
    protected $stopOnFirstFailure = true;

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'max:50'],
            'soil_id' => ['required', 'integer'],
            'status_id' => ['required', 'integer'],
            'description' => ['nullable'],
        ];

    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => 'Tree species name can not be empty.',
            'soil_id.required' => 'Please select soil type for the list.',
            'status_id.required' => 'Select tree status.',
        ];
    }
}
