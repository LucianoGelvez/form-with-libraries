import { TextField, Grid, Typography, Button } from '@mui/material';
import './Formulario.css'
import { useFormik } from 'formik';
import * as Yup from "yup"

const Formulario = () => {

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            nombre: "",
            email: "",
            contraseña: "",
            confimarContraseña: ""
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required("Debes ingresar un nombre"),
            email: Yup.string().email("Formato del email inválido").required('Campo obligatorio'),
            contraseña: Yup.string().required("Debes ingresar una contraseña").min(8, "La contraseña debe tener al menos 8 caracteres"),
            confimarContraseña: Yup.string().required("Se requiere que confirmes tu contraseña").oneOf([Yup.ref('contraseña'), null], "Las contraseñas deben coincidir"),

        }),
        onSubmit: (data) => {
            alert("Datos enviados correctamente")
            console.log(data)
        },
    });

    return (
        <div className='form'>

            <form className='form-container' onSubmit={handleSubmit}>
                <Typography id="h2" color='purple' variant='h2' align='center' height={"20%"}>Formulario</Typography>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-evenly"
                    spacing={2}
                    sx={{ width: "100%" }}
                >

                    <Grid item xs={12} md={7} className='input' >
                        <TextField type='text'
                            label="Ingrese su nombre"
                            variant="outlined"
                            fullWidth
                            error={touched.nombre && errors.nombre}
                            helperText={touched.nombre && errors.nombre}
                            name='nombre'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.nombre}
                        />
                    </Grid>

                    <Grid item xs={12} md={7} >
                        <TextField type='email'
                            label="Ingrese su email"
                            variant="outlined"
                            fullWidth
                            name='email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            error={touched.email && errors.email}
                            helperText={touched.email && errors.email}
                        />
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <TextField type='password'
                            label="Ingrese su contraseña"
                            variant="outlined"
                            fullWidth
                            name='contraseña'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.contraseña}
                            error={touched.contraseña && errors.contraseña}
                            helperText={touched.contraseña && errors.contraseña} />

                    </Grid>

                    <Grid item xs={12} md={7} >
                        <TextField type='password'
                            label="Confirme la contraseña"
                            variant="outlined"
                            fullWidth
                            name='confimarContraseña'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confimarContraseña}
                            error={touched.confimarContraseña && errors.confimarContraseña}
                            helperText={touched.confimarContraseña && errors.confimarContraseña} />

                    </Grid>

                </Grid>

                <Button type='submit' variant='contained' style={{ backgroundColor: "purple" }}>Enviar</Button>

            </form>
        </div>
    )
}

export default Formulario
