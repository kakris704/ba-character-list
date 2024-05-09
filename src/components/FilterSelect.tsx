import { Select, InputLabel, MenuItem, SelectChangeEvent, FormControl } from '@mui/material';
import React, { useState } from 'react'

const FilterSelect = ({cards, setCards, res, setFilter}: {cards:any, setCards:Function, res:any, setFilter:Function}) => {
	const [type, setType] = useState('default');

	const handleChange = (e: SelectChangeEvent) => {
		setType(e.target.value);
		console.log(e.target.value);
		const list = [...res];
        let ls = list;
        if(e.target.value === 'test') {
            ls = filterAbydos(list);
        }
		setFilter(ls);
        console.log(ls);
	}

    const filterAbydos = (list: any) => {
        return list.filter((l: { info: { school: string; }; }) => l.info.school === 'Abydos')
    }

  return (
    <>
		<FormControl variant='standard' sx={{mt: 5, minWidth: 100}}>
			<InputLabel id="character-filter-selecter">絞り込み</InputLabel>
			<Select
				labelId='character-filter-selecter'
				id='character-filter'
				value={type}
				onChange={handleChange}
				label='filter'
			>
				<MenuItem value='default'>デフォルト</MenuItem>
				<MenuItem value='test'>アビドス</MenuItem>
			</Select>
		</FormControl>
    </>
  )
}

export default FilterSelect;