import React from 'react'
import { Stack, Chip, IconButton } from '@mui/material'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import InfoIcon from '@mui/icons-material/Info';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ShieldIcon from '@mui/icons-material/Shield';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SoBadFaceIcon from '@mui/icons-material/SentimentVeryDissatisfiedRounded';
import BadFaceIcon from '@mui/icons-material/SentimentDissatisfiedRounded';
import NormalFaceIcon from '@mui/icons-material/SentimentNeutralRounded';
import SmallGoodFaceIcon from '@mui/icons-material/SentimentSatisfiedRounded';
import MediumGoodFaceIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import LargeGoodFaceIcon from '@mui/icons-material/MoodRounded';
import LandscapeIcon from '@mui/icons-material/Landscape';
import HomeIcon from '@mui/icons-material/Home';
import typeParse from '../functions/parse';

type detail = {
  character: {
    role: string,
    bulletType: string,
    position: string,
    armorType: string
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
		transform: 'skewX(-7deg)', 
		marginRight:0.05, 
    marginBottom: 0.2,
		textTransform: 'uppercase',
		width: 100,
    height: 30,
		fontWeight: 'bold',
		opacity: 0.9,
    justifyContent: 'start',
    '.MuiChip-label' : {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
	}
  const chipTerrainStyle = {
    ...chipStyle,
     height:62, 
     width: 35, 
     marginLeft:0.2,
     '.MuiChip-label': {
      paddingLeft: 0.55
    }
  }

  return (
    <>
      <Stack direction='row' sx={{margin: 0.5}}>
        <Stack direction='column'> 
          <Chip icon={<FmdGoodIcon />} label={detail.character.position} color='secondary' sx={{...chipStyle, marginLeft:0.5}} variant='outlined'></Chip>
          <Chip icon={<InfoIcon />} label={parser.getRole(detail.character.role)} color='primary' sx={{...chipStyle, letterSpacing: -3}} variant='outlined'></Chip>
        </Stack>
        <Stack direction='column'>
          <Chip icon={<FlashOnIcon />} label={parser.getBulletType(detail.character.bulletType)} color={parser.getBulletTypeStyle(detail.character.bulletType)} sx={{...chipStyle, marginLeft:0.5}} variant='outlined'></Chip>
          <Chip icon={<ShieldIcon />} label={parser.getArmorType(detail.character.armorType)} color={parser.getArmorTypeStyle(detail.character.armorType)} sx={chipStyle} variant='outlined'></Chip>
        </Stack>
        <Chip variant='outlined' label={
          <Stack direction='column'>
            <LocationCityIcon sx={{mb:0.7, backgroundColor: '#888888', borderRadius: 1, color: '#ffffff'}} />
            <ConditionFace terrain={detail.terrain.urban} />
          </Stack>
        } sx={chipTerrainStyle}/>
        <Chip variant='outlined' label={
          <Stack direction='column'>
            <LandscapeIcon sx={{mb:0.7, backgroundColor: '#888888', borderRadius: 1, color: '#ffffff'}} />
            <ConditionFace terrain={detail.terrain.outdoor} />
            
          </Stack>
        } sx={chipTerrainStyle}/>
        <Chip variant='outlined' label={
          <Stack direction='column'>
            <HomeIcon sx={{mb:0.7, backgroundColor: '#888888', borderRadius: 1, color: '#ffffff'}} />
            <ConditionFace terrain={detail.terrain.indoor} />
          </Stack>
        } sx={chipTerrainStyle}/>
      </Stack>
    </>
  )
}

const ConditionFace = ({terrain} : {terrain: terrain}) => {
  if(terrain.DamageDealt === '80%(0.8x)') {
    return <SoBadFaceIcon sx={{color: 'red'}}/>
  } else if (terrain.DamageDealt === '90%(0.9x)') {
    return <BadFaceIcon sx={{color: 'red'}}/>
  } else if (terrain.DamageDealt === '100%(1x)') {
    return <NormalFaceIcon sx={{color: '#e8ed4e'}}/>
  } else if (terrain.DamageDealt === '110%(1.1x)') {
    return <SmallGoodFaceIcon sx={{color:'green'}}/>
  } else if (terrain.DamageDealt === '120%(1.2x)') {
    return <MediumGoodFaceIcon sx={{color:'green'}}/>
  } else if (terrain.DamageDealt === '130%(1.3x)') {
    return <LargeGoodFaceIcon sx={{color:'green'}}/>
  } else {
    return <NormalFaceIcon />
  }
}

export default AttributeChip