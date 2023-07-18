import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Modal from "react-bootstrap/Modal";
import InputError from '@/Components/InputError';
import { useEffect, useState } from 'react';
export default function Product_search(props) {

    const [visibilityConfirmForm, setConfirmForm] = useState(false)
    const { data, setData, delete: destroy, get, post, processing, errors, reset } = useForm({
        searchType: "name",
        searchValue: null,
        orderType: "name",
    });

    useEffect(() => {
        console.log(data)
    });


    const SearchProd = (e) => {
        get(route('produits', data))
    };

    return (
        <Modal
            dialogClassName="modal-90w"
            size="xl"
            aria-labelledby="example-custom-modal-styling-title"

            show={props.From.SearchFrom}
            onHide={() => props.From.setSearchFrom(false)}
        >
            <Modal.Body>
                <h1>Search</h1><br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <select type="text" class="form-control" value={data.name} onChange={e => setData('searchType', e.target.value)}>
                                <option value="name">Search by : (name)</option>
                                <option value="description">Search by : (description)</option>
                                <option value="size">Search by : (size)</option>
                                <option value="prix">Search by : (prix)</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <input type="text" class="form-control" value={data.name} onChange={e => setData('searchValue', e.target.value)} />
                        </div>
                        <div className="col-md-3">
                            <select type="text" class="form-control" value={data.name} onChange={e => setData('orderType', e.target.value)}>
                                <option value="name">Order by : (name)</option>
                                <option value="description">Order by : (description)</option>
                                <option value="size">Order by : (size)</option>
                                <option value="prix">Order by : (prix)</option>
                            </select>
                        </div>

                        <button class="btn btn-primary p-6" onClick={() => (props.From.setSearchFrom(false), SearchProd())}>Search</button>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
}
