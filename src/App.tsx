import React, { useEffect, useState } from 'react';
import './App.css';
import { Container, Grid } from '@mui/material';
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
      bulletType: '爆発'
    },
    image: {
      portrait: 'a'
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
      return () => {
        setCards([]);
      }
  }, []);

  useEffect(() => {
    console.log('render');
  })


  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{mt:4}}>
          {cards.map((item: object, index:number) => {
              console.log('map')
              return <CharacterCard setIsOpen={setDialogOpen} charaDetail={item} setDetail={setDetail} key={index}/>
          })}
        </Grid> 
      </Container>
      <CharacterDialog isOpen={dialogOpen} setIsOpen={setDialogOpen} charaDetail={detail}/>
    </>
  );
}

export default App;
