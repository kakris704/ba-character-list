import { Select, InputLabel, MenuItem, SelectChangeEvent, FormControl } from '@mui/material';
import React, { useEffect, useState } from 'react'

const SortSelect = ({cards, setCards, res, filter}: {cards:any, setCards:Function, res:any, filter: any}) => {
	const [type, setType] = useState('default');

	const handleChange = (e: SelectChangeEvent) => {
		setType(e.target.value);
		console.log(e.target.value);
		updateChange(e.target.value);
	}

	const updateChange = (type: string) => {
		const list = [...filter];
		if(type === 'name') {
			sortName(list);
		} else if(type === 'school') {
			sortName(list);
			sortSchool(list);
		} else if(type === 'club') {
			sortName(list);
			sortClub(list);
			sortSchool(list);
		}
		setCards(list);
	}

	useEffect(() => {
		updateChange(type);
	}, [filter]);

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