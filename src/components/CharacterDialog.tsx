import { Avatar, Button, Card, CardContent, CardMedia, Chip, Dialog, DialogContent, DialogTitle, Hidden, IconButton, Paper, Skeleton, Slide, Stack, Typography, SlideProps} from '@mui/material'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';
import typeParse from '../functions/parse';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AttributeChip from './AttributeChip';
import InfoText from './InfoText';

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
						<CloseIcon />
					</IconButton>
				</Stack>
			</DialogTitle>
			<DialogContent sx={{ marginTop: 1}}>
				<Stack spacing={2} direction='row'>
					<Card variant='outlined' style={{overflow:'hidden', position:'relative'}}>
						{// 読み込み中はスケルトンに置き換える
						isLoad ? (
							<CardMedia
								component='img'
								height='690'
								image={charaDetail.image.portrait}
								sx={{ maxWidth: 500, minWidth: 350}}
							/>
							) : (
							<>
								<Skeleton
									height={690}
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
						<AttributeChip detail={charaDetail}/>

					</Card>
					<Paper sx={{ width: 500, height:690, overflowY:'auto', borderBottom: 'solid 1px #e0e0e0'}} elevation={0}>
						{/* 生徒プロフィール */}
							<Card variant='outlined'>
								<CardContent>
									<Typography variant='h6' gutterBottom sx={{fontWeight:600}}>{charaDetail.character.name}</Typography>
									<Stack direction='row' sx={{position: 'relative'}}>
										<Stack direction='column' sx={{}}>
											<InfoText info='学園'>{parser.getSchool(charaDetail.info.school)}</InfoText>
											<InfoText info='誕生日' sx={{mt:2}}>{charaDetail.info.birthDate}</InfoText>
										</Stack>
										<Stack direction='column' sx={{position:'absolute', left:250}}>
											<InfoText info='年齢'>{`${charaDetail.info.age} (${charaDetail.info.schoolYear})`}</InfoText>
											<InfoText info='部活' sx={{mt:2}}>{parser.getClub(charaDetail.info.club)}</InfoText>
										</Stack>
									</Stack>
									<br />
									<Typography variant='subtitle2'>
										{charaDetail.character.profile}
									</Typography>
								</CardContent>
							</Card>	
						{/* 生徒ステータス */}
							<Card sx={{mt: 2}} variant='outlined'>
								<CardContent>
									<div style={{backgroundColor:'#eeeeee', height:500}}></div>
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