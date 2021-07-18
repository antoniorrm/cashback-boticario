import React, { FormEvent, useState } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import LogoBoticario from '../../assets/img/logo-boticario-primary.svg'
import { NumberFormatCPF } from '../../utils/maskedInputUtils'
import api from '../../service/api'

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(4),
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

export default function SignUp() {
	const history = useHistory()
	const classes = useStyles()

	const [name, setName] = useState<String>()
	const [cpf, setCpf] = useState<String>()
	const [email, setEmail] = useState<String>()
	const [password, setPassword] = useState<String>()

	async function handleSignUp(event: FormEvent) {
		event.preventDefault()
		if (cpf !== undefined && cpf?.length < 11) {
			alert('CPF inválido')
		}

		try {
			await api.post('/auth/register', {
				fullName: name,
				cpf,
				email,
				password,
			})
            history.goBack()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<img className={classes.img} src={LogoBoticario} alt='Logo empresa' />
				<Typography component='h1' variant='h5'>
					Criar conta
				</Typography>

				<form className={classes.form} onSubmit={handleSignUp}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={12}>
							<TextField
								autoComplete='fname'
								name='name'
								variant='outlined'
								required
								fullWidth
								id='name'
								label='Nome Completo'
								autoFocus
								value={name}
								onChange={e => setName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='cpf'
								label='CPF'
								name='cpf'
								InputProps={{
									inputComponent: NumberFormatCPF as any,
								}}
								value={cpf}
								onChange={e => setCpf(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								type='email'
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</Grid>
					</Grid>
					<Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}
						>
							Cadastrar
						</Button>
						<Button
							fullWidth
							variant='outlined'
							color='primary'
							onClick={() => history.goBack()}
						>
							Voltar
						</Button>
					</Grid>
				</form>
			</div>
		</Container>
	)
}
