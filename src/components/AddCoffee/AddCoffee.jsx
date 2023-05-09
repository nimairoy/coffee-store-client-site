import React from 'react';
import Swal from 'sweetalert2'


const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.coffeeName.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const details = form.details.value;
        const taste = form.taste.value;
        const supplier = form.supplier.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, category, taste, supplier, photo, details }
        console.log(newCoffee)

        // send data into backend 
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                form.reset();
            })

    }

    return (
        <div className='my-container'>
            <div className="bg-slate-300 w-4/5 rounded-md mx-auto p-6">
                <h1 className="text-4xl text-center mt-6 text-semibold">Add new coffee!</h1>
                <form onSubmit={handleAddCoffee}>
                    <div className="flex justify-center gap-12">
                        <div className="form-control mt-6">
                            <label htmlFor="coffeeName">
                                Name <br />
                            </label>
                            <input className='border border-gray-400 w-96 py-2 px-1' placeholder='Enter Coffee Name' type="text" name="coffeeName" id="" />
                        </div>
                        <div className="form-control mt-6">
                            <label htmlFor="quantity">
                                Quantity <br />
                            </label>
                            <input className='border border-gray-400 w-96 py-2 px-1' placeholder='Enter Quantity' type="text" name="quantity" id="" />
                        </div>
                    </div>
                    <div className="flex justify-center gap-12">
                        <div className="form-control mt-6">
                            <label htmlFor="supplier">
                                Supplier <br />
                            </label>
                            <input className='border border-gray-400 w-96 py-2 px-1' placeholder='Enter Coffee Supplier' type="text" name="supplier" id="" />
                        </div>
                        <div className="form-control mt-6">
                            <label htmlFor="taste">
                                Taste <br />
                            </label>
                            <input className='border border-gray-400 w-96 py-2 px-1' placeholder='Enter Coffee Taste' type="text" name="taste" id="" />
                        </div>
                    </div>
                    <div className="flex justify-center gap-12">
                        <div className="form-control mt-6">
                            <label htmlFor="category">
                                Category <br />
                            </label>
                            <input className='border border-gray-400 w-96 py-2 px-1' placeholder='Enter Coffee Category' type="text" name="category" id="" />
                        </div>
                        <div className="form-control mt-6">
                            <label htmlFor="details">
                                Details <br />
                            </label>
                            <input className='border border-gray-400 w-96 py-2 px-1' placeholder='Enter Coffee Details' type="text" name="details" id="" />
                        </div>
                    </div>
                    <div className="form-control mt-4">
                        <label htmlFor="photo">
                            Photo <br />
                        </label>
                        <input className='border border-gray-400 w-full py-2 px-1' placeholder='Enter Coffee Photo' type="text" name="photo" id="" />
                    </div>
                    <div className="form-control mt-4">
                        <input className='border border-gray-400 w-full py-2 cursor-pointer bg-warning' type="submit" value="Add New Coffee" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;