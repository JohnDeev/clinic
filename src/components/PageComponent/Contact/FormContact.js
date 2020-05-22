import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = () => ({
    card: {
        maxWidth: 420,
        marginTop: 50
    },
    container: {
        display: "Flex",
        justifyContent: "center"
    },

    textContainer: {
        display: "block",

    },
    actions: {
        float: "right"
    },


});

const form = props => {
    const {
        classes,
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;

    return (

        <div className={classes.container}>
            <form onSubmit={handleSubmit}>
                <Card className={classes.card}>
                    <CardContent>
                        <TextField
                            id="firstName"
                            label="Nombres"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.firstName ? errors.firstName : ""}
                            error={touched.firstName && Boolean(errors.firstName)}
                            margin="dense"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            id="lastName"
                            label="Apellidos"
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.lastName ? errors.lastName : ""}
                            error={touched.lastName && Boolean(errors.lastName)}
                            margin="dense"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            id="phoneNumber"
                            label="Teléfono"
                            type="tel"
                            value={values.phoneNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.phoneNumber ? errors.phoneNumber : ""}
                            error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                            margin="dense"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            id="email"
                            label="Correo electrónico"
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.email ? errors.email : ""}
                            error={touched.email && Boolean(errors.email)}
                            margin="dense"
                            variant="outlined"
                            fullWidth
                        />

                        <TextField
                            id="comment"
                            label="Comentario"
                            value={values.comment}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.comment ? errors.comment : ""}
                            error={touched.comment && Boolean(errors.comment)}
                            multiline
                            rows={4}
                            margin="dense"
                            variant="outlined"
                            fullWidth
                        />

                    </CardContent>
                    <CardActions className={classes.actions}>
                        <Button type="submit" color="primary" disabled={isSubmitting} >
                            Enviar
                        </Button>
                        <Button color="secondary" onClick={handleReset}>
                            Reiniciar
                        </Button>
                    </CardActions>
                </Card>
            </form>

        </div>

    );
};

const FormContact = withFormik({
    mapPropsToValues: ({
        firstName,
        lastName,
        phoneNumber,
        email,
        comment
    }) => {
        return {
            firstName: firstName || "",
            lastName: lastName || "",
            phoneNumber: phoneNumber || "",
            email: email || "",
            comment: comment || ""
        };
    },

    validationSchema: Yup.object().shape({
        firstName: Yup.string().required("Campo requerido"),
        lastName: Yup.string().required("Campo requerido"),
        phoneNumber: Yup.string().min(7, "Ingrese un número válido").required("Campo requerido"),
        email: Yup.string()
            .email("Ingrese un correo válido")
            .required("Campo requerido"),
        comment: Yup.string().min(6, "Mensaje muy corto").required("Campo requerido")
    }),

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            // submit to the server
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    }
})(form);

export default withStyles(styles)(FormContact);