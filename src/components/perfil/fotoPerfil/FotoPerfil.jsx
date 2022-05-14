import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "./style.css"
import CardContent from '@mui/material/CardContent';
import { CardActions } from "@mui/material";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grade from '../grade/Grade';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import { Link } from 'react-router-dom';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function FotoPerfil(props) {
  return (


    <div className="card_foto_perfil">
      <Card sx={{ minWidth: 275 }}>
        <div className='foto_perfil'>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src={props.imagem1}

              sx={{ width: 130, height: 130 }}
            />
          </Stack>



          <CardContent>
            <Typography sx={{ fontSize: 17 }} color="text.secondary" gutterBottom>
              Nome: {props.nome1} {props.nome2} {props.nome3} {props.nome4} {props.nome5}
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Seguidores
            </Typography>
            <Typography variant="body2">
              Bio

            </Typography>
          </CardContent>

          
           <Link to="/">
            <HomeIcon fontSize="large" />
            </Link>
          

        </div>
        <Grade />
      </Card>
    </div>


  )
}

export default FotoPerfil;