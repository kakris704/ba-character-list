import { Dialog, DialogContent, DialogTitle, IconButton, Stack, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react'
import FilterSelect from './FilterSelect';

type props = {
    filterOpen: boolean,
    setFilterOpen: Function,
		cards: object[],
		setCards: Function,
		res: object[],
		setFilter: Function
}
const FilterDialog = ({filterOpen, setFilterOpen, cards, setCards, res, setFilter}: props) => {

	const handleClose = () => {
		setFilterOpen(false);
	}
	const [school, setSchool] = useState('default');
	const [year, setYear] = useState('default');

  return (
    <Dialog
      open={filterOpen} 
			onClose={handleClose} 
			maxWidth='sm'
			PaperProps={{sx:{borderRadius: 5, overflowX:'hidden', minHeight:300}}}
    >
			<DialogTitle sx={{ borderBottom: 'solid 1px lightgray', paddingBottom: 1, background: 'linear-gradient(90deg, rgba(207,237,255,1) 0%, rgba(255,255,255,1) 16%, rgba(255,255,255,1) 100%)' }}>
				<Stack direction='row-reverse'>
					<Typography variant="h5" sx={{ borderBottom:'solid 6px yellow', fontWeight: 700, margin:'auto'}}>絞り込み</Typography>
					<IconButton onClick={handleClose} sx={{ position: 'absolute', marginLeft: 'auto', top: 10}}>
						<CloseIcon />
					</IconButton>
				</Stack>
			</DialogTitle>
      <DialogContent>
				<FilterSelect cards={cards} setCards={setCards} res={res} setFilter={setFilter} school={school} setSchool={setSchool} year={year} setYear={setYear}/>
      </DialogContent>
    </Dialog>
  )
}

export default FilterDialog