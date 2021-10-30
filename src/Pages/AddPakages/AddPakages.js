import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './AddPakages.css'

const AddPakages = () => {
    const { user } = useAuth();
    const { register, reset, handleSubmit } = useForm();
    const onSubmit = data => {
        data.email = user?.email;
        fetch('http://localhost:5000/addpackage', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Package Added Successfully')
                    reset();
                }
            })
    }

    return (
        <div className='add-pakage p-20'>
            <h1 className='text-2xl font-bold text-center mb-5 text-white'>Add New Pakages</h1>
            <form className='form lg:w-1/3 m-auto' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='pakage title' {...register("title")} />
                <input placeholder='pakage description' {...register("description")} />
                <input placeholder=' image url' {...register("img")} />
                <input placeholder=' price' type="number" {...register("price")} />
                <input className='hover:bg-yellow-500' type="submit" />
            </form>
        </div>
    );
};

export default AddPakages;