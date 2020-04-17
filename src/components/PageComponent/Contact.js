import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

class Contact extends Component {
    render() {
        return (
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    comment: '',
                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                        .required('Nombres son requeridos'),
                    lastName: Yup.string()
                        .required('Apellidos son requeridos'),
                    phone: Yup.string()
                        .min(7, 'Número inválido')
                        .required('Número de teléfono son requeridos'),
                    email: Yup.string()
                        .email('Correo inválido')
                        .required('Correo es requerido'),
                    comment: Yup.string()
                        .min(6, 'Los comentarios deben tener mínimo 6 caracteres')
                        .required('Comentario es requerido'),
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
                render={({ errors, status, touched }) => (
                    <Form >
                        <TextField
                            id="firstName"
                            label="Nombres"
                            //value= {values.firstName} //Acá está el problema
                            //onChange = {handleChange}
                            //onBlur = {handleBlur}
                            helperText={touched.firstName ? errors.firstName : ""}
                            error={touched.firstName && Boolean(errors.firstName)}
                            margin="dense"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            id="lastName"
                            label="Apellidos"
                            //value= {values.lastName}//Acá está el problema
                            //onChange = {handleChange}
                            //onBlur = {handleBlur}
                            helperText={touched.lastName ? errors.lastName : ""}
                            error={touched.lastName && Boolean(errors.lastName)}
                            margin="dense"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            id="phone"
                            label="Teléfono"
                            type="number"
                            //value= {values.phone}//Acá está el problema
                            //onChange = {handleChange}
                            //onBlur = {handleBlur}
                            helperText={touched.phone ? errors.phone : ""}
                            error={touched.phone && Boolean(errors.phone)}
                            margin="dense"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            id="email"
                            label="Correo electrónico"
                            //value= {values.email}//Acá está el problema
                            //onChange = {handleChange}
                            //onBlur = {handleBlur}
                            helperText={touched.email ? errors.email : ""}
                            error={touched.email && Boolean(errors.email)}
                            type="email"
                            margin="dense"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            id="comment"
                            label="Comentario"
                            //value= {values.comment}//Acá está el problema
                            //onChange = {handleChange}
                            //onBlur = {handleBlur}
                            helperText={touched.comment ? errors.comment : ""}
                            error={touched.comment && Boolean(errors.comment)}
                            multiline
                            rows={4}
                            margin="dense"
                            variant="outlined"
                            fullWidth
                        />

                        <div className="form-group">
                            <label htmlFor="firstName">Nombres</label>
                            <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Apellidos</label>
                            <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Teléfono</label>
                            <Field name="phone" type="number" className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="comment">Mensaje</label>
                            <Field name="comment" type="password" className={'form-control' + (errors.comment && touched.comment ? ' is-invalid' : '')} />
                            <ErrorMessage name="comment" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Enviar</button>
                            <button type="reset" className="btn btn-secondary">Borrar</button>
                        </div>
                    </Form>
                )}
            />
        );
    }
}

export default Contact;