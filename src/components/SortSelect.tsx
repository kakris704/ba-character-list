import { Select, InputLabel, MenuItem, SelectChangeEvent, FormControl } from '@mui/material';
import React, { useState } from 'react'

const SortSelect = ({cards, setCards, res}: {cards:any, setCards:Function, res:any}) => {
	const [type, setType] = useState('default');

	const handleChange = (e: SelectChangeEvent) => {
		setType(e.target.value);
		console.log(e.target.value);
		const list = [...res];
		if(e.target.value === 'name') {
			sortName(list);
		} else if(e.target.value === 'school') {
			sortName(list);
			sortSchool(list);
		} else if(e.target.value === 'club') {
			sortName(list);
			sortClub(list);
			sortSchool(list);
		}
		setCards(list);
	}

	const sortName = (list: any) => {
		list.sort((f: { character: { name: string; }; }, s: { character: { name: string; }; }) => {
			if(f.character.name < s.character.name) {
				return -1;
			} else if(f.character.name > s.character.name) {
				return 1;
			} else {
				return 0;
			}
		});
	}
	const sortSchool = (list: any) => {
		list.sort((f: { info: { school: string; }; }, s: { info: { school: string; }; }) => {
			if(f.info.school < s.info.school) {
				return -1;
			} else if(f.info.school > s.info.school) {
				return 1;
			} else {
				return 0;
			}
		});
	}
	const sortClub = (list: any) => {
		list.sort((f: { info: { club: string; }; }, s: { info: { club: string; }; }) => {
			if(f.info.club < s.info.club) {
				return -1;
			} else if(f.info.club > s.info.club) {
				return 1;
			} else {
				return 0;
			}
		});
	}

  return (
    <>
		<FormControl variant='standard' sx={{mt: 5, minWidth: 100}}>
			<InputLabel id="character-sort-selecter">並び替え</InputLabel>
			<Select
				labelId='character-sort-selecter'
				id='character-sort'
				value={type}
				onChange={handleChange}
				label='sort'
			>
				<MenuItem value='default'>デフォルト</MenuItem>
				<MenuItem value='name'>名前順</MenuItem>
				<MenuItem value='school'>学校順</MenuItem>
				<MenuItem value='club'>部活順</MenuItem>
			</Select>
		</FormControl>
    </>
  )
}

export default SortSelect;