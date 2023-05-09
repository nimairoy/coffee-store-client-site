import React from 'react';
import { FaEdit, FaRegEye, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, category, supplier, taste, photo, details } = coffee;


    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cofe => cofe._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        })
    }


    return (
        <div className='flex justify-around items-center bg-slate-300 p-4 rounded-md'>
            <div>
                <img className='w-full' src={photo} alt="" />
            </div>
            <div>
                <p className='mt-2'><strong>Name:</strong> {name}</p>
                <p className='mt-2'><strong>Quantity:</strong> {quantity}</p>
                <p className='mt-2'><strong>Category:</strong> {category}</p>
            </div>
            <div>
                <div className='bg-info p-2 mt-4 rounded-sm cursor-pointer'><FaRegEye className='text-2xl'></FaRegEye></div>
                <Link to={`/updatecoffee/${_id}`}>
                    <div className='bg-success p-2 mt-4 rounded-sm cursor-pointer'><FaEdit className='text-2xl'></FaEdit></div>
                </Link>
                <div onClick={() => handleDelete(_id)} className='bg-error p-2 mt-4 rounded-sm cursor-pointer'><FaRegTrashAlt className='text-2xl'></FaRegTrashAlt></div>
            </div>
        </div>
    );
};

export default CoffeeCard;