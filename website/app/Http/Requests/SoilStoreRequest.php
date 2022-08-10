<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SoilStoreRequest extends FormRequest
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
            'texture' => ['required', 'max:50'],
            'structure' => ['required', 'max:50'],
            'porosity' => ['required', 'max:50'],
            'chemistry' => ['required', 'max:50'],
            'colour' => ['required', 'max:50'],
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
            'name.required' => 'Soil name can not be empty.',
            'texture.required' => 'The soil texture is required.',
            'structure.required' => 'The soil structure is required.',
            'porosity.required' => 'The soil porosity is required.',
            'chemistry.required' => 'The soil chemistry is required.',
            'colour.required' => 'The soil colour is required.',
        ];
    }
}
