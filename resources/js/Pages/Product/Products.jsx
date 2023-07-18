import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Modal from "react-bootstrap/Modal";
import Product_create from './Product_create';
import Product_edit from './Product_edit';
import Product_delete from './Product_delete';
import Product_search from './Product_search';
import Pagination from '@/Components/Pagination';
import { useEffect, useState } from 'react';
export default function Products() {
    const { productsList, name } = usePage().props;

    const [SearchFrom, setSearchFrom] = useState(false)
    const [DeleteFrom, setDeleteFrom] = useState(false)
    const [CreateFrom, setCreateFrom] = useState(false)
    const [EditFrom, setEditFrom] = useState(false)
    const { data, setData, delete: destroy, get, post, processing, errors, reset } = useForm({
        product: null,
    });

    useEffect(() => {
        console.log(productsList)
    });


    return (
        <>
            <Product_create From={{ CreateFrom: CreateFrom, setCreateFrom: setCreateFrom }} />
            <Product_search From={{ SearchFrom: SearchFrom, setSearchFrom: setSearchFrom }} />


            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="#">Product Management</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item ml-auto">
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="container mt-5 ">
                <button class="btn btn-primary" onClick={() => setCreateFrom(true)}>Add Product</button>
                <table className="table">
                    <caption>
                        <button class="btn btn-secondary" onClick={() => setSearchFrom(true)}>Search</button>
                    </caption>
                    {productsList.data.length == 0 && name != undefined ? <tr><td colSpan={7}><h1>No product with this name ({name})</h1></td></tr> :
                        <>
                            <thead>
                                <tr>
                                    <th class="text-center" scope="col">ID</th>
                                    <th class="text-center" scope="col">Name</th>
                                    <th class="text-center" scope="col">Description</th>
                                    <th class="text-center" scope="col">Size</th>
                                    <th class="text-center" scope="col">Price</th>
                                    <th class="text-center" scope="col">Edit</th>
                                    <th class="text-center" scope="col">Delete</th>
                                </tr>
                            </thead>
                            {productsList.data.map((prod) => (
                                <tbody>
                                    <tr key={prod.id}>
                                        <td>{prod.id}</td>
                                        <td>{prod.name}</td>
                                        <td><textarea className='form-control' name="" id="" cols="30" rows="2" disabled>{prod.description}</textarea></td>
                                        <td>{prod.size}</td>
                                        <td>{prod.prix}</td>
                                        <td><button className='btn btn-warning' onClick={() => (setData('product', prod), setEditFrom(true))}></button></td>
                                        <td><button className='btn btn-danger' onClick={() => (setData('product', prod), setDeleteFrom(true))}></button></td>
                                        {EditFrom == true && data.product.id == prod.id ? <Product_edit prod={prod} From={{ EditFrom: EditFrom, setEditFrom: setEditFrom }} /> : <></>}
                                        {DeleteFrom == true && data.product.id == prod.id ? <Product_delete prod={data.product} From={{ DeleteFrom: DeleteFrom, setDeleteFrom: setDeleteFrom }} /> : <></>}
                                    </tr>

                                </tbody>
                            ))}</>
                    }


                </table>
            </div>
            <div class="d-flex justify-content-center">
                <Pagination class="container mt-5" links={productsList.links} />
            </div>

        </>
    );
}
