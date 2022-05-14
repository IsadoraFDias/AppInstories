import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {Link} from 'react-router-dom';

function FotosMenu(props) {

    return (
        <Stack direction="row" spacing={2} sx={{marginTop:"10%", marginBottom:"5%"}}>
          <Link to='/Remy'>
            <Avatar alt="Remy Sharp" src="https://p0.piqsels.com/preview/472/431/712/beautiful-beauty-bright-fashion-thumbnail.jpg" sx={{ width: 65, height: 65 }} />
          </Link>
          <Link to='/Travis'>
            <Avatar alt="Travis Howard" src="https://cdn.pixabay.com/photo/2014/11/21/00/09/man-539993_1280.jpg" sx={{ width: 65, height: 65 }} />
          </Link>
          <Link to='/Cindy'>
            <Avatar alt="Cindy Baker" src="https://p0.piqsels.com/preview/1007/678/464/green-leaf-plant-nature-thumbnail.jpg" sx={{ width: 65, height: 65 }} />
          </Link>
          <Link to='/Baker'>
            <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCSECbkRXt7ZZmv9qmW5VR6k_T4r_greYwnw&usqp=CAU" sx={{ width: 65, height: 65 }} />
          </Link>
          <Link to='/Howard'>
            <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7Q9WRwrKgOOybGlN640DIEorradIbUkfhg&usqp=CAU" sx={{ width: 65, height: 65 }} />
          </Link>

        </Stack>
      );
    }

    export default FotosMenu;
