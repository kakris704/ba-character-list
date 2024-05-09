import { Card, CardActionArea, CardContent, CardMedia, Grid, Skeleton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

type props = {
  setIsOpen: Function,
  charaDetail: any,
  setDetail: any
}

const CharacterCard = ({ setIsOpen, charaDetail, setDetail }: props) => {

  // 画像の読み込みを判別
  const [isLoad, setIsLoad] = useState(false);

  // 画像読み込みを完了
  const handleLoad = () => {
    setIsLoad(true);
  }
  useEffect(() => {
    setIsLoad(false);
  }, [charaDetail])

  // カード選択時、ダイアログを開く
  const handleClick = () => {
    setIsOpen(true);
    setDetail(charaDetail);
  }

  return (
    <Grid item xs={2.4}>
      <Card>
        <CardActionArea
          onClick={handleClick}
        >
          {// 読み込み中はスケルトンに置き換える
          isLoad ? (<CardMedia
            component="img"
            alt="media"
            image={charaDetail.image.icon}
            height="170"
            onLoad={handleLoad}
          />
          ) : (
            <>
              <Skeleton variant='rectangular' height={170} animation='wave' />
              <CardMedia
                component="img"
                alt="media"
                image={charaDetail.image.icon}
                height="170"
                onLoad={handleLoad}
                sx={{ display: 'none' }}
              />
            </>
          )
          }
          <CardContent sx={{ pt: 1, pb: 1 }}>
            <Typography variant='subtitle1' color='text.secondary' sx={{fontWeight:'bold'}}>
              {charaDetail.character.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default CharacterCard