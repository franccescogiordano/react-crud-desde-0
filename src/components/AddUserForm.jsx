import React, { Fragment } from 'react';
import { useState } from "react";
import { useForm } from 'react-hook-form'
const AddUserForm = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        //  console.log(data) para mostrar datos en consola del objeto
        props.addUser(data)
        e.target.reset();
    }


    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input
                    {...register('name', {
                        required: true,
                    })}
                    className='form-control my-2'
                />
                <label>Username</label>
                <input
                    {...register('username', {
                        required: true,
                    })}
                    className='form-control my-2'
                />
                {errors.name?.type === 'required' && (
                    <span className='text-danger text-small d-block mb-2'>
                        Nombre obligatorio
                    </span>
                )}
                {errors.username?.type === 'required' && (
                    <span className='text-danger text-small d-block mb-2'>
                        Usuario obligatorio
                    </span>
                )}
                <button>Add new user</button>
            </form>
        </Fragment>
    );
}

export default AddUserForm;