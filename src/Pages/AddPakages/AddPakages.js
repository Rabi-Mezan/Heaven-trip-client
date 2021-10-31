import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './AddPakages.css'

const AddPakages = () => {
    const { user } = useAuth();
    const { register, reset, handleSubmit } = useForm();
    const onSubmit = data => {
        data.email = user?.email;
        fetch('https://nameless-coast-33229.herokuapp.com/addpackage', {
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
            <h1 className='text-gray-400 font-bold lg:text-4xl text-2xl mb-10  text-center'>Add New Packages</h1>
            <form className='form lg:w-96 m-auto' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='pakage title' {...register("title")} />
                <input placeholder='pakage description' {...register("description")} />
                <input placeholder=' image url' {...register("img")} />
                <input placeholder=' price' type="number" {...register("price")} />
                <input className='proceed-btn' type="submit" />
            </form>
        </div>
    );
};

export default AddPakages;