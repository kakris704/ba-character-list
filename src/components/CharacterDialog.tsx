import { Avatar, Button, Card, CardContent, CardMedia, Chip, Dialog, DialogContent, DialogTitle, Hidden, IconButton, Paper, Skeleton, Slide, Stack, Typography} from '@mui/material'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ShieldIcon from '@mui/icons-material/Shield';
import { TransitionProps } from '@mui/material/transitions';
import typeParse from '../functions/parse';
import { ThemeProvider, createTheme } from '@mui/material/styles';

type props = {
	isOpen: boolean,
	setIsOpen: Function,
	charaDetail: any
}

const CharacterDialog = ({ isOpen, setIsOpen, charaDetail }: props) => {

	// ダイアログを閉じる
	const handleClose = () => {
		setIsOpen(false);
	}

	const parser = new typeParse();

	// 画像のロードを判別
	const [isLoad, setIsLoad] = useState(false);

	useEffect(() => {
		setIsLoad(false);
	}, [charaDetail]);

	const theme = createTheme({
		palette: {
			error: {
				main: '#ff0000'
			},
			info: {
				main: '#ffc233'
			},
			success: {
				main: '#33c9ff'
			},
			warning: {
				main: '#ee6df7'
			}
		}
	});

	return (
		<ThemeProvider theme={theme}>
		<Dialog 
			open={isOpen} 
			onClose={handleClose} 
			maxWidth='xl' 
			PaperProps={{sx:{borderRadius: 5}}}
		>
			<DialogTitle sx={{ borderBottom: 'solid 1px lightgray', paddingBottom: 1 }}>
				<Stack direction='row-reverse'>
					<Typography variant="h5" sx={{ textDecoration: 'solid underline 6px yellow', fontWeight: 700, margin:'auto'}}>生徒情報</Typography>
					<IconButton onClick={handleClose} sx={{ position: 'absolute', marginLeft: 'auto', top: 10}}>
						<CloseIcon></CloseIcon>
					</IconButton>
				</Stack>
			</DialogTitle>
			<DialogContent sx={{ marginTop: 1, overflow: 'hidden'}}>
				<Stack spacing={2} direction='row'>
					<Card variant='outlined'>

						{// 読み込み中はスケルトンに置き換える
						isLoad ? (
							<CardMedia
								component='img'
								height='700'
								image={charaDetail.image.portrait}
								sx={{ maxWidth: 500, minWidth: 200 }}
							/>
						) : (
							<>
								<Skeleton
									height={700}
									width={500}
									animation='wave'
									variant='rectangular'
								/>
								<CardMedia
									component='img'
									height='700'
									image={charaDetail.image.portrait}
									onLoad={() => {
										setIsLoad(true);
									}}
									sx={{ display: 'none' }}
								/>
							</>
						)
						}

					</Card>
					<Paper sx={{ width: 500 }} elevation={0}>
							<Card variant='outlined'>
								<CardContent>
									<Typography variant='h5'>{charaDetail.character.name}</Typography><br />
									<Typography variant='subtitle1'>
										{charaDetail.character.profile}
									</Typography>
								</CardContent>
							</Card>	
							<Card sx={{mt: 2}} variant='outlined'>
								<CardContent>
									<Stack direction='row' sx={{margin: 0.2}}>
										<Chip icon={<FlashOnIcon />} label={parser.getBulletType(charaDetail.character.bulletType)} color={parser.getBulletTypeStyle(charaDetail.character.bulletType)} variant='outlined' sx={{marginRight:2}}></Chip>
										<Chip icon={<ShieldIcon />} label={parser.getArmorType(charaDetail.character.armorType)} color={parser.getArmorTypeStyle(charaDetail.character.armorType)} variant='outlined'></Chip>
									</Stack>
								</CardContent>
							</Card>
					</Paper>
				</Stack>
			</DialogContent>
		</Dialog>
		</ThemeProvider>
	)
}

export default CharacterDialog