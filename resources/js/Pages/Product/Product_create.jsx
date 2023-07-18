import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Modal from "react-bootstrap/Modal";
import InputError from '@/Components/InputError';
import { useEffect, useState } from 'react';
export default function Product_create(props) {

    const [visibilityConfirmForm, setConfirmForm] = useState(false)
    const { data, setData, delete: destroy, get, post, processing, errors, reset } = useForm({
        name: null,
        description: null,
        size: null,
        prix: null,
    });

    useEffect(() => {
        console.log(data)
    });


    const addProd = (e) => {
        e.preventDefault();
        post(route('product.store',data))
    };

    return (
        <Modal
            dialogClassName="modal-90w"
            size="xl"
            aria-labelledby="example-custom-modal-styling-title"

            show={props.From.CreateFrom}
            onHide={() => props.From.setCreateFrom(false)}
        >
            <Modal.Header className="bg-primary text-white" closeButton>
                <Modal.Title>Add New Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label>Name : </label><br />
                <input type="text" class="form-control" value={data.name} onChange={e => setData('name', e.target.value)} />
                <label className="mt-2 text-danger" style={{float:'right'}}>{errors.name}</label><br />
                <label>Description : </label><br />
                <input type="text" class="form-control" value={data.description} onChange={e => setData('description', e.target.value)} />
                <label className="mt-2 text-danger" style={{float:'right'}}>{errors.name}</label><br />
                <label>Size (Kg) : </label><br />
                
                <input type="number" class="form-control" value={data.size} onChange={e => setData('size', e.target.value)} />
                <label className="mt-2 text-danger" style={{float:'right'}}>{errors.size}</label><br />

                <label>Price : </label><br />
                <input type="number" class="form-control" value={data.prix} onChange={e => setData('prix', e.target.value)} />
                <label className="mt-2 text-danger" style={{float:'right'}}>{errors.prix}</label><br />

            </Modal.Body>
            <Modal.Footer>
                <button class="btn btn-secondary" onClick={() => (setConfirmForm(false))} data-dismiss="modal">Close</button>
                <form onSubmit={addProd} className="p-6">
                    <button class="btn btn-primary p-6" onClick={() => (setConfirmForm(false))}>Add</button>
                </form>
            </Modal.Footer>
        </Modal>
    );
}
