import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import "./style.css";


function Grade(props) {

    return(
        <div className='grade_post'>
            <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              width="345"
              image='https://picsum.photos/900/200'
              alt="Fotos do Picsum"
            />
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              width="345"
              image='https://picsum.photos/900/700'
              alt="Fotos do Picsum"
            />
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              width="345"
              image='https://picsum.photos/900/300'
              alt="Fotos do Picsum"
            />
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              width="345"
              image='https://picsum.photos/900/400'
              alt="Fotos do Picsum"
            />
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              width="345"
              image='https://picsum.photos/900/500'
              alt="Fotos do Picsum"
            />
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              width="345"
              image="https://picsum.photos/900/600"
              alt="Fotos do Picsum"
            />
                  </CardActionArea>
                </Card>
        </div>


    
    )
    
}

export default Grade;
