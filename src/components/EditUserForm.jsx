import React, { Fragment } from 'react';
import { useState } from "react";
import { useForm } from 'react-hook-form'
const EditUserForm = (props) => {
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm({
        defaultValues: props.currentUser //cargo datos por defecto dle usuario al inicializar el formulario
    });
    //----- cambio los datos del formulario con cada click que haga el usuario en edit-------
  /*|*/  setValue('name', props.currentUser.name);  /*|*/
    /*|*/  setValue('username', props.currentUser.username); /*|*/
    //-----------------------------------------------------------

    const onSubmit = (data, e) => {
        //  console.log(data) para mostrar datos en consola del objeto
        data.id = props.currentUser.id //seteo el id de data para que no tire error
        props.updateUser(props.currentUser.id, data)
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
                    //mensaje de error para campo nombre, en caso de no ingresarse
                    <span className='text-danger text-small d-block mb-2'>
                        Nombre obligatorio
                    </span>
                )}
                {errors.username?.type === 'required' && (
                    //mensaje de error para campo usuario, en caso de no ingresarse
                    <span className='text-danger text-small d-block mb-2'>
                        Usuario obligatorio
                    </span>
                )}
                <button>Edit user</button>
            </form>
        </Fragment>
    );
}

export default EditUserForm;