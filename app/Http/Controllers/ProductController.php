<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if ($request->has('searchType') && $request->input('searchValue') != ""){
            if ($request->has('searchType') == "size" or $request->has('searchType') == "prix"){
                $productsList = Product::where($request->input('searchType') , intval($request->input('searchValue')))
                ->orderBy($request->input('orderType'), 'asc')
                ->paginate(2);

            }else{
                $productsList = Product::where($request->input('searchType'), 'like', '%'.$request->input('searchValue').'%')
                    ->orderBy($request->input('orderType'), 'asc')
                    ->paginate(2);
            }
            
            return Inertia::render('Product/Products', [
                'productsList' => $productsList,
                'name' => $request->input('name')
            ]);
        }else{
            $productsList = Product::paginate(2);
            return Inertia::render('Product/Products', [
                'productsList' => $productsList,
                'name' => $request->input('name')
            ]);
        }

        
    //     if ($req->has('slc_vcls')){
    //         $chats = Chat::where('Vcls_id', $req->input('slc_vcls'))->get();
    //         return Inertia::render('Teacher/TeacherHome', [
    //             'vClasses' => $vClasses,
    //             'cur_vcls' => $req->input('slc_vcls'),
    //             'chats' => $chats,
    //             'profile' => $req->user()
    //         ]);
    //     }else{
    //         // get chat and files of $req->slc_vcls
    //         // $vClasses = VClass::findOrFail($req->slc_vcls);
    //         return Inertia::render('Teacher/TeacherHome', [
    //             'vClasses' => $vClasses,
    //             'profile' => $req->user(),
    //             'all' => 'true'
    //         ]);
    //     }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|string|max:255',
                'description' => 'required|string|max:600',
                'size' => 'required|numeric',
                'prix' => 'required|numeric',
            ]
        );

        Product::create($request->all());

        return redirect()->route('produits');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {

        $product->name = $request->product['name'];
        $product->description = $request->product['description'];
        $product->size = $request->product['size'];
        $product->prix = $request->product['prix'];
        $product->save();
        return redirect()->route('produits');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
    }
}
