import { Button, Container } from "@mui/material";
import Box from '@mui/material/Box';
import FotosMenu from "../avatares/FotosMenu";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import "./style.css";
import { maxWidth } from "@mui/system";
import { CardActions } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Switch} from 'react-router-dom'
import Modal from '../Modal'


function Card() {
    return (
        <div>
            <Container maxWidth="xs">
                <Modal/>
                <FotosMenu/>
                <Box
                    sx={{
                        width: 400,
                        height: 400,
                        marginTop: "2%",
                        marginBottom: "5%",
                        borderRadius: "10px",
                        backgroundColor: '#fafafa',
                        '&:hover': {
                            backgroundColor: '#eeeeee',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >
                    <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image='https://p2.piqsels.com/preview/462/1/257/selfie-canon-camera-person.jpg'
          alt="green iguana"
        />
       
      </CardActionArea>


                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites" sx={{ fontSize: 30, color: "#455a64", marginLeft: "5%" }}>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share" sx={{ fontSize: 30, color: "#455a64", marginLeft: "75%"}}>
                            <CommentIcon />
                        </IconButton>
                    </CardActions>

                </Box>

                <Box
                    sx={{
                        width: 400,
                        height: 400,
                        marginTop: "2%",
                        marginBottom: "5%",
                        borderRadius: "10px",
                        backgroundColor: '#fafafa',
                        '&:hover': {
                            backgroundColor: '#eeeeee',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >
                    <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image='https://p0.piqsels.com/preview/368/940/962/el-salvador-la-libertad-department-thumbnail.jpg'
          alt="green iguana"
        />
       
      </CardActionArea>


                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites" sx={{ fontSize: 30, color: "#455a64", marginLeft: "5%" }}>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share" sx={{ fontSize: 30, color: "#455a64", marginLeft: "75%"}}>
                            <CommentIcon />
                        </IconButton>
                    </CardActions>



                </Box>

                <Box
                    sx={{
                        width: 400,
                        height: 400,
                        marginTop: "2%",
                        marginBottom: "5%",
                        borderRadius: "10px",
                        backgroundColor: '#fafafa',
                        '&:hover': {
                            backgroundColor: '#eeeeee',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >

<CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image='https://st2.depositphotos.com/1158226/5340/i/950/depositphotos_53408879-stock-photo-two-small-boletus-mushrooms-in.jpg'
          alt="green iguana"
        />
       
      </CardActionArea>


                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites" sx={{ fontSize: 30, color: "#455a64", marginLeft: "5%" }}>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share" sx={{ fontSize: 30, color: "#455a64", marginLeft: "75%"}}>
                            <CommentIcon />
                        </IconButton>
                    </CardActions>


                </Box>

            </Container>



        </div>
    );

}

export default Card;