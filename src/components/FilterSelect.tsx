import { Select, InputLabel, MenuItem, SelectChangeEvent, FormControl } from '@mui/material';
import React, { useEffect, useState } from 'react'

const FilterSelect = ({cards, setCards, res, setFilter, school, setSchool, year, setYear}: {cards:any, setCards:Function, res:any, setFilter:Function, school:string, setSchool:Function, year:string, setYear:Function}) => {
	const handleChangeSchool = (e: SelectChangeEvent) => {
		setSchool(e.target.value);
	}

	const handleChangeYear = (e: SelectChangeEvent) => {
		setYear(e.target.value);
	}

	// ・フィルターがデフォルトでない時、そのフィルターに対応するものだけTrue
	// ・フィルターがデフォルトの時はデフォルトでないものだけを照合

	useEffect(() => {
		const list = [...res];
		const ls = list.filter((item: {info: {school: string, schoolYear: string}}) => {
			if(school != 'default' && year != 'default') {
				return item.info.school === school && item.info.schoolYear === year;
			} else if(school != 'default') {
				return item.info.school === school;
			} else if(year != 'default') {
				return item.info.schoolYear === year;
			} else {
				return true
			}
		});
		setFilter(ls);
	}, [school, year])

    const filterAbydos = (list: any) => {
        return list.filter((l: { info: { school: string; }; }) => l.info.school === 'Abydos')
    }

  return (
    <div style={{marginLeft:'auto', marginRight:'auto'}}>
		<FormControl variant='standard' sx={{m: 5, minWidth: 100, mt:10}}>
			<InputLabel id="character-filter-selecter">学校</InputLabel>
			<Select
				labelId='character-filter-selecter'
				id='character-filter'
				value={school}
				onChange={handleChangeSchool}
				label='filter'
			>
				<MenuItem value='default'>デフォルト</MenuItem>
				<MenuItem value='Abydos'>アビドス</MenuItem>
				<MenuItem value='Gehenna'>ゲヘナ</MenuItem>
				<MenuItem value='Millennium'>ミレニアム</MenuItem>
				<MenuItem value='Trinity'>トリニティ</MenuItem>
				<MenuItem value='Shanhaijing'>山海経</MenuItem>
				<MenuItem value='RedWinter'>レッドウィンター</MenuItem>
				<MenuItem value='SRT'>SRT</MenuItem>
				<MenuItem value='Valkyrie'>ヴァルキューレ</MenuItem>
				<MenuItem value='Hyakkiyako'>百鬼夜行</MenuItem>
				<MenuItem value='Arius'>アリウス</MenuItem>
			</Select>
		</FormControl>
		<FormControl variant='standard' sx={{m: 5, minWidth: 100, mt:10}}>
			<InputLabel id="character-filter-selecter2">学年</InputLabel>
			<Select
				labelId='character-filter-selecter2'
				id='character-filter2'
				value={year}
				onChange={handleChangeYear}
				label='filter'
			>
				<MenuItem value='default'>デフォルト</MenuItem>
				<MenuItem value='1年生'>1年生</MenuItem>
				<MenuItem value='2年生'>2年生</MenuItem>
				<MenuItem value='3年生'>3年生</MenuItem>
			</Select>
		</FormControl>
    </div>
  )
}

export default FilterSelect;