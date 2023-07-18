import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from 'react';
export default function Product_edit(props) {

    const [visibilityConfirmForm, setConfirmForm] = useState(false)
    const { data, setData, delete: destroy, get, post, put , processing, errors, reset } = useForm({
        product : {
            "name": null,
            "description": null,
            "size": null,
            "prix": null
        }
    });

    useEffect(() => {
        setData('product' , {...props.prod})
    },[]);
    useEffect(() => {
        console.log(data)
    });
    
    const updateProd = (e) => {
        put(route('product.update' , data.product))
    };

         return (
            <Modal
                dialogClassName="modal-90w"
                size="xl"
                aria-labelledby="example-custom-modal-styling-title"                            
                show={props.From.EditFrom}
                onHide={() => props.From.setEditFrom(false)}
            >
                <Modal.Header className="bg-warning text-white" closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Name : </label><br />
                    <input type="text" class="form-control" value={data.product.name} onChange={e => setData("product" , {...data.product , name : e.target.value})} />
                    <label className="mt-2 text-danger" style={{float:'right'}}>{errors.name}</label><br />
                    <label>Description : </label><br />
                    <input type="text" class="form-control" value={data.product.description} onChange={e => setData("product" , {...data.product , description : e.target.value})} />
                    <label className="mt-2 text-danger" style={{float:'right'}}>{errors.name}</label><br />
                    <label>Size (Kg) : </label><br />                    
                    <input type="number" class="form-control" value={data.product.size} onChange={e => setData("product" , {...data.product , size : e.target.value})} />
                    <label className="mt-2 text-danger" style={{float:'right'}}>{errors.size}</label><br />    
                    <label>Price : </label><br />
                    <input type="number" class="form-control" value={data.product.prix} onChange={e => setData("product" , {...data.product , prix : e.target.value})} />
                    <label className="mt-2 text-danger" style={{float:'right'}}>{errors.prix}</label><br />    
                </Modal.Body>
                <Modal.Footer>
                    <button class="btn btn-secondary" onClick={() => (props.From.setEditFrom(false),setData({}))} data-dismiss="modal">Close</button>
                    <button class="btn btn-warning text-white p-6" onClick={() => (updateProd(),props.From.setEditFrom(false))}>Update</button>

                </Modal.Footer>
            </Modal>
        );
}
