import React, { useEffect } from 'react'
import { Stack, Chip, IconButton, Paper, Tooltip, Zoom } from '@mui/material'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import InfoIcon from '@mui/icons-material/Info';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ShieldIcon from '@mui/icons-material/Shield';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SoBadFaceIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import BadFaceIcon from '@mui/icons-material/SentimentDissatisfied';
import NormalFaceIcon from '@mui/icons-material/SentimentNeutral';
import SmallGoodFaceIcon from '@mui/icons-material/SentimentSatisfied';
import MediumGoodFaceIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import LargeGoodFaceIcon from '@mui/icons-material/Mood';
import LandscapeIcon from '@mui/icons-material/Landscape';
import HomeIcon from '@mui/icons-material/Home';
import typeParse from '../functions/parse';
import StarIcon from '@mui/icons-material/Star';

type detail = {
  character: {
    role: string,
    bulletType: string,
    position: string,
    armorType: string,
    rarity: string,
    squadType: string
  },
  terrain:{
    indoor: terrain,
    outdoor: terrain,
    urban: terrain
  }
}

type terrain = {
  DamageDealt: string
}

const AttributeChip = ({ detail }: { detail: detail}) => {
  // 文字列を変換するクラス
  const parser = new typeParse();

  // ChipのCSS
  const chipStyle = {
		borderRadius: 1, 
		// transform: 'skewX(-7deg)', 
		marginRight:0.05, 
    marginBottom: 0.2,
		textTransform: 'uppercase',
		width: 100,
    height: 30,
		fontWeight: 'bold',
    justifyContent: 'start',
    backgroundColor: 'white',
    '.MuiChip-label' : {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
	}

  // 戦地適正のスタイル
  const chipTerrainStyle = {
    ...chipStyle,
     height:61.5, 
     width: 35, 
     marginLeft:0.2,
     '.MuiChip-label': {
      paddingLeft: 0.55
    }
  }

  let infoStyle: any = {...chipStyle}
  if (detail.character.role === 'Dealer') {
    infoStyle.letterSpacing = -2.5
  }

  return (
    <div style={{position:'absolute', bottom:'3%', width:500, height:200, overflow:'hidden'}}>
    <Paper sx={{
      position: 'absolute',
      bottom: '5%',
      left: '50%',
      transform: 'translate(-50%, -50%) skewX(-8deg) scale(1.2)', 
      backgroundColor:'rgba(255, 255, 255, 0.7)',
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
      filter: 'blur(0)',
      WebkitFilter: 'nlur(0)',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      width: 1000
    }} 
      elevation={5}
    >
      <Stack direction='row' sx={{ position:'absolute', left:330, bottom:64, }}>
        <Chip label={detail.character.squadType} color={parser.getSquadType(detail.character.squadType)} sx={{...chipStyle, height:20}} variant='outlined'></Chip>
        <Rarity rarity={detail.character.rarity} />
      </Stack>
      <Stack direction='row' sx={{margin: 0.8, justifyContent: 'center'}}>
        <div style={{backgroundColor:'#bbbbbb', width:2, height:40, alignItems:'center', marginTop: 'auto', marginBottom: 'auto', marginRight: 15, borderRadius:10}} />
        <Stack direction='column'> 
          <Chip icon={<InfoIcon />} label={parser.getRole(detail.character.role)} color='primary' sx={{...infoStyle}} variant='outlined'></Chip>
          <Chip icon={<FmdGoodIcon />} label={detail.character.position} color='secondary' sx={{...chipStyle}} variant='outlined'></Chip>
        </Stack>
        <Stack direction='column'>
          <Chip icon={<FlashOnIcon />} label={parser.getBulletType(detail.character.bulletType)} color={parser.getBulletTypeStyle(detail.character.bulletType)} sx={{...chipStyle}} variant='outlined'></Chip>
          <Chip icon={<ShieldIcon />} label={parser.getArmorType(detail.character.armorType)} color={parser.getArmorTypeStyle(detail.character.armorType)} sx={chipStyle} variant='outlined'></Chip>
        </Stack>
        <Tooltip title={detail.terrain.urban.DamageDealt} TransitionComponent={Zoom} arrow>
        <Chip variant='outlined' label={
          <Stack direction='column'>
            <LocationCityIcon sx={{mb:0.7, backgroundColor: '#888888', borderRadius: 1, color: '#ffffff'}} />
            <ConditionFace terrain={detail.terrain.urban} />
          </Stack>
        } sx={chipTerrainStyle}/>
        </Tooltip>
        <Tooltip title={detail.terrain.outdoor.DamageDealt} TransitionComponent={Zoom} arrow>
        <Chip variant='outlined' label={
          <Stack direction='column'>
            <LandscapeIcon sx={{mb:0.7, backgroundColor: '#888888', borderRadius: 1, color: '#ffffff'}} />
            <ConditionFace terrain={detail.terrain.outdoor} />
            
          </Stack>
        } sx={chipTerrainStyle}/>
        </Tooltip>
        <Tooltip title={detail.terrain.indoor.DamageDealt} TransitionComponent={Zoom} arrow>
        <Chip variant='outlined' label={
          <Stack direction='column'>
            <HomeIcon sx={{mb:0.7, backgroundColor: '#888888', borderRadius: 1, color: '#ffffff'}} />
            <ConditionFace terrain={detail.terrain.indoor} />
          </Stack>
        } sx={{...chipTerrainStyle}}/>
        </Tooltip>
        <div style={{backgroundColor:'#bbbbbb', width:2, height:40, marginTop: 'auto', marginBottom: 'auto', marginLeft:15, borderRadius: 10}} />
      </Stack>
    </Paper>
    </div>
  )
}

const ConditionFace = ({terrain} : {terrain: terrain}) => {
  const faceStyle = {
    borderRadius: '50%',
    color: 'rgba(255, 255, 255, 0.8)'
  }

  if(terrain.DamageDealt === '80%(0.8x)') {
    return <SoBadFaceIcon sx={{ ...faceStyle, backgroundColor: '#b51d1d'}}/>
  } else if (terrain.DamageDealt === '90%(0.9x)') {
    return <BadFaceIcon sx={{ ...faceStyle, backgroundColor: '#b51d1d'}}/>
  } else if (terrain.DamageDealt === '100%(1x)') {
    return <NormalFaceIcon sx={{ ...faceStyle, backgroundColor: '#edbd4e'}}/>
  } else if (terrain.DamageDealt === '110%(1.1x)') {
    return <SmallGoodFaceIcon sx={{ ...faceStyle, backgroundColor: '#52b524'}}/>
  } else if (terrain.DamageDealt === '120%(1.2x)') {
    return <MediumGoodFaceIcon sx={{ ...faceStyle, backgroundColor: '#52b524'}}/>
  } else if (terrain.DamageDealt === '130%(1.3x)') {
    return <LargeGoodFaceIcon sx={{ ...faceStyle, backgroundColor: '#52b524'}}/>
  } else {
    return <NormalFaceIcon />
  }
}

const Rarity = ({rarity}: {rarity:string}) => {
  const style = {
    color: '#FFDB60',
    filter: 'drop-shadow(0px 0px 2px #684D00)'
  }
  switch(rarity) {
    case 'R':
      return (
        <Stack direction='row' sx={{ml: 1}}>
          <StarIcon fontSize='small' sx={style} />
        </Stack>
      );
    case 'SR':
      return (<Stack direction='row' sx={{ml: 1}}>
        <StarIcon fontSize='small' sx={style} />
        <StarIcon fontSize='small' sx={style} />
      </Stack>
      );
    case 'SSR':
      return (
        <Stack direction='row' sx={{ml: 1}}>
          <StarIcon fontSize='small' sx={style} />
          <StarIcon fontSize='small' sx={style} />
          <StarIcon fontSize='small' sx={style} />
        </Stack>
      );
    default:
      return (<></>)
  }
}

export default AttributeChip