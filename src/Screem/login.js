import React, { useState } from 'react'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { LockOutlined as AccountCircleIcon} from '@material-ui/icons'
import { ContenedorBotonCentrado} from '../Funciones/Formularios';
import {Link} from "react-router-dom"

const useStyles = makeStyles(theme => ({
	/*root: {
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '100vh'
	},*/
	container: {
		opacity: '0.8',
		height: '70%',
		[theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
			width: '100%',
			height: '100%'
		}
	},
	div: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		backgroundColor:'#E57603'
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1)
	},

	button: {
		backgroundColor:'#E57603',
		margin: theme.spacing(2, 0, 1)
	},
	p: {
		flexDirection:'row'
	}
}))

const App = () => {
	const [body, setBody] = useState({ nickname: '', password: '' })
	const classes = useStyles()


	const handleChange = e => {
		setBody({
			...body,
			[e.target.name]: e.target.value
		})
	}

	const onSubmit = () => {
		console.log(body)
	}

	return (
		<Grid container component='main' className={classes.root}>
			<CssBaseline />
			<Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
				<div className={classes.div}>
					<Avatar className={classes.avatar}>
						<AccountCircleIcon/>
					</Avatar>
					<Typography component='h1' variant='h5'>¡Bienvenido a Food-Offer!</Typography>
					<form className={classes.form}>
						<TextField
							fullWidth
							autoFocus
							color='primary'
							margin='normal'
							variant='outlined'
							label='Correo Electronico'
							type='email'
							name='nickname'
							value={body.nickname}
							onChange={handleChange}
						/>
						<TextField
							fullWidth
							type='password'
							color='primary'
							margin='normal'
							variant='outlined'
							label='Contraseña'
							name='password'
							value={body.password}
							onChange={handleChange}
						/>
						<Button
							fullWidth
							variant='contained'
							className={classes.button}
							onClick={() => onSubmit()}
						>
							Ingresar
						</Button>
					</form>
					
				</div>
					<p>
                    <ContenedorBotonCentrado>
                    <Button
							variant='contained'
							className={classes.button}
                            href="/empresa/empresa/RegistrarEmpresa"
						>
							Registrar Empresa
						</Button>
                        <Button
							variant='contained'
							className={classes.button}
                            href="/cliente/RegistrarCliente"
						>
							Registrar Cliente
						</Button>
                        </ContenedorBotonCentrado>
				   </p>
			</Container>
		</Grid>
	)
}

export default App
