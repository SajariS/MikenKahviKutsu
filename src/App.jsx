import { useState } from 'react'
import './App.css'
import { Button, Container, Grid, Typography } from '@mui/material'

function App() {

  const [takeaway, setTakeaway] = useState(false);
  const [style, setStyle] = useState({
    testi: {
      fontSize: 30
      
    },
    buttonYes: {
      fontSize: 17
    },
    buttonNo: {
      fontSize: 17
    }
  });
  const [no, setNo] = useState('ei mua kiinnosta')
  const noList = [
    'ei',
    'ewwwww',
    'ei onnistu',
    'ei onnistu',
    'katotaan syksyllä',
    'katotaan syksyllä',
    'juu, mutta ei',
    'ei',
    'ei onnistu',
    'ei onnistu',
    'ei mua kiinnosta',
    'EI',
    'ei vieläkään',
    'arvaappa? Ei',
    'ei vieläkään',
    'arvaappa? Ei',
  ]

  const handleSetNo = () => {
    setNo(noList.at(Math.floor(Math.random() * noList.length)))
  }

  const handleYes = () => {
    setTakeaway(true)
  }

  const handleNo = () => {
    setStyle({...style, buttonYes: {...style.buttonYes, fontSize: style.buttonYes.fontSize + 10}});
    handleSetNo();
  }

  return (
    <>
      <Container maxWidth="lg">
        {!takeaway?
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img style={{width: 200}} src={'/mikegif.gif'} />
            <Typography style={style.testi}>Hei, kiinnostaisko ottaa vaikka tollanen takeaway kahvi jokupäivä?</Typography>
          </Grid>
          <Grid item xs={6}>
            <Button variant='contained' color='success' style={style.buttonYes} onClick={handleYes}>Kyllä</Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant='contained' color='error' style={style.buttonNo} onClick={handleNo}>{no}</Button>
          </Grid>

        </Grid>
        :
        <>
        <img src={'/makesweet-77klpn.gif'} />
        </>
        }
      </Container>
    </>
  )
}

export default App
