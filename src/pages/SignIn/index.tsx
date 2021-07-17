import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Grid, Link } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

import LogoBoticatio from '../../assets/img/logo-boticario-primary.svg'

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	img: {
		width: '80%',
		margin: theme.spacing(1),
		marginBottom: theme.spacing(4),
	},
}))

export default function SignIn() {
	const classes = useStyles()

    const [email, setEmail] = useState<String>()
	const [password, setPassword] = useState<String>()

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<img className={classes.img} src={LogoBoticatio} alt='Logo empresa' />
				<Typography component='h1' variant='h5'>
					Acessar Sistema
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email'
						name='email'
						autoComplete='email'
						autoFocus
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						name='password'
						label='Senha'
						type='password'
						id='password'
						autoComplete='current-password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<Grid container direction='row'>
						<Grid item>
							<Link component={NavLink} to='/sign-up' variant='caption'>
								<Typography>Não tem conta? Cadastre-se</Typography>
							</Link>
						</Grid>
					</Grid>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
					>
						Acessar
					</Button>
				</form>
			</div>
		</Container>
	)
}
