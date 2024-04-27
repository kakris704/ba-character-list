import React from 'react'
import { Stack, Chip } from '@mui/material'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import InfoIcon from '@mui/icons-material/Info';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ShieldIcon from '@mui/icons-material/Shield';
import typeParse from '../functions/parse';

type detail = {
  character: {
    role: string,
    bulletType: string,
    position: string,
    armorType: string
  }
}

const AttributeChip = ({ detail }: { detail: detail}) => {
  // 文字列を変換するクラス
  const parser = new typeParse();

  // ChipのCSS
  const chipStyle = {
		borderRadius: 1, 
		transform: 'skewX(-7deg)', 
		marginRight:0.5, 
		textTransform: 'uppercase',
		width: 100,
		fontWeight: 'bold',
		opacity: 0.9
	}

  return (
    <>
      <Stack direction='row' sx={{margin: 0.2, marginLeft: 0.7}}>
        <Chip icon={<InfoIcon />} label={parser.getRole(detail.character.role)} color='primary' sx={{...chipStyle, letterSpacing: -3}} variant='outlined'></Chip>
        <Chip icon={<FlashOnIcon />} label={parser.getBulletType(detail.character.bulletType)} color={parser.getBulletTypeStyle(detail.character.bulletType)} sx={chipStyle} variant='outlined'></Chip>
      </Stack>
      <Stack direction='row' sx={{margin: 0.2}}>
        <Chip icon={<FmdGoodIcon />} label={detail.character.position} color='secondary' sx={chipStyle} variant='outlined'></Chip>
        <Chip icon={<ShieldIcon />} label={parser.getArmorType(detail.character.armorType)} color={parser.getArmorTypeStyle(detail.character.armorType)} sx={chipStyle} variant='outlined'></Chip>
      </Stack>
    </>
  )
}

export default AttributeChip