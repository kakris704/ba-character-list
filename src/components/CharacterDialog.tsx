import { Avatar, Button, Card, CardContent, CardMedia, Chip, Dialog, DialogContent, DialogTitle, Hidden, IconButton, Paper, Skeleton, Slide, Stack, Typography} from '@mui/material'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';
import typeParse from '../functions/parse';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AttributeChip from './AttributeChip';


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
			error: { // 爆発・軽装備
				main: '#a51c1f'
			},
			info: { // 貫通・重装備
				main: '#b27127'
			},
			success: { // 神秘・特殊装甲
				main: '#206d9e'
			},
			warning: { // 振動・弾力装甲
				main: '#973fa5'
			},
			secondary: { // ポジション
				main: '#314c78'
			}
		},
		typography: {
      fontFamily: 'Noto Sans JP'
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
			<DialogTitle sx={{ borderBottom: 'solid 1px lightgray', paddingBottom: 1, background: 'linear-gradient(90deg, rgba(207,237,255,1) 0%, rgba(255,255,255,1) 16%, rgba(255,255,255,1) 100%)' }}>
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
									<Typography variant='h6' gutterBottom>{charaDetail.character.name}</Typography>
									<Typography variant='subtitle2'>
										{charaDetail.character.profile}
									</Typography>
								</CardContent>
							</Card>	
							<Card sx={{mt: 2}} variant='outlined'>
								<CardContent>
									<AttributeChip detail={charaDetail}/>
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