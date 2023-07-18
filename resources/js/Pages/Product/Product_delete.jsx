import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Modal from "react-bootstrap/Modal";

import { useEffect, useState } from 'react';
export default function Product_delete(props) {

    const { data, setData, delete: destroy, get, post, processing, errors, reset } = useForm({
        product: null,
    });

    useEffect(() => {
        setData('product', props.prod)
    },[]);


    const deleteProd = (e) => {
        e.preventDefault();
        destroy(route('product.destroy' , data.product))
    };

    return (
            <Modal
                dialogClassName="modal-90w"
                size="xl"
                aria-labelledby="example-custom-modal-styling-title"
                show={props.From.DeleteFrom}
                onHide={() => props.From.setDeleteFrom(false)}
            >
                <Modal.Header className="bg-danger text-white" closeButton>
                    <Modal.Title>Delete Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label htmlFor="">some</label><br />
                </Modal.Body>
                <Modal.Footer>
                    <form onSubmit={deleteProd} className="p-6">
                        <button class="btn btn-danger" onClick={() => (setConfirmForm(false))}>Delete</button>
                    </form>
                </Modal.Footer>
            </Modal>
    );
}
