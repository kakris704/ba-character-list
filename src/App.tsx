import React, { useEffect, useState } from 'react';
import './App.css';
import { Container, Grid, ThemeProvider, createTheme } from '@mui/material';
import CharacterCard from './components/CharacterCard';
import CharacterDialog from './components/CharacterDialog';
import blueAPI from './functions/api';

function App() {

  // 変数
  const [dialogOpen, setDialogOpen] = useState(false); 
  const [cards, setCards] = useState<object[]>([]);
  const [debug, setDebug] = useState(false);
  // ダイアログに表示するデータ
  const [detail, setDetail] = useState({
    character: {
      name: 'テスト',
      profile: 'テスト',
      bulletType: '爆発',
      Rarity:'SSR'
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
  const make = async () => {
    const res = await api.getAllDetail();
    setCards(res);
    console.log('update', res);
  }
  
  // マウント時
  useEffect(() => {
      make();
      test();
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

  const test = async() => {
    const res = await api.getTest();
    console.log(res);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{mt:4}}>
          {cards.map((item: object, index:number) => {
              console.log('map')
              return <CharacterCard setIsOpen={setDialogOpen} charaDetail={item} setDetail={setDetail} key={index}/>
          })}
        </Grid> 
      </Container>
      <CharacterDialog isOpen={dialogOpen} setIsOpen={setDialogOpen} charaDetail={detail}/>
      </ThemeProvider>
    </>
  );
}

export default App;
