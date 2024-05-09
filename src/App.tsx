import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, Container, Grid, ThemeProvider, createTheme } from '@mui/material';
import CharacterCard from './components/CharacterCard';
import CharacterDialog from './components/CharacterDialog';
import blueAPI from './functions/api';
import SortSelect from './components/SortSelect';
import FilterSelect from './components/FilterSelect';
import FilterDialog from './components/FilterDialog';

function App() {

  // 変数
  const [dialogOpen, setDialogOpen] = useState(false); 
  const [cards, setCards] = useState<object[]>([]);
  const [filter, setFilter] = useState<object[]>([]);
  const [res, setRes] = useState<object[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  // ダイアログに表示するデータ
  const [detail, setDetail] = useState({
    character: {
      name: 'テスト',
      profile: 'テスト',
      bulletType: '爆発',
      Rarity:'SSR',
      squadType:'Striker'
    },
    image: {
      portrait: 'a'
    },
    info: {
      school:'',
      club:'',
      age: '',
      birthDate:'',
      schoolYear:''
    }
  });
  // APIのクラス
  const api = new blueAPI();

  // 全キャラのデータを取得する
  const makeDefault = async () => {
    const res = await api.getAllDetail();
    setRes(res);
    setCards(res);
    setFilter(res);
    console.log('update', res);
  }
  
  // マウント時
  useEffect(() => {
      makeDefault();
      return () => {
        setCards([]);
      }
  }, []);

  useEffect(() => {
    console.log('render');
  })

  const theme = createTheme({
    typography: {
      fontFamily: 'Noto Sans JP'
    }
  });

  const handleClick = () => {
    setFilterOpen(true);
  }

  // 配列をソートする関数

  return (
    <>
      <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <SortSelect cards={cards} setCards={setCards} res={res} filter={filter}/>
        <Button onClick={handleClick} sx={{mt:6, ml:5}} variant='outlined'>絞り込み</Button>
        <Grid container spacing={4} sx={{mt:0}}>
          {cards.map((item: object, index:number) => {
              console.log('map')
              return <CharacterCard setIsOpen={setDialogOpen} charaDetail={item} setDetail={setDetail} key={index}/>
          })}
        </Grid> 
      </Container>
      <FilterDialog filterOpen={filterOpen} setFilterOpen={setFilterOpen} cards={cards} setCards={setCards} res={res} setFilter={setFilter}/>
      <CharacterDialog isOpen={dialogOpen} setIsOpen={setDialogOpen} charaDetail={detail}/>
      </ThemeProvider>
    </>
  );
}

export default App;
