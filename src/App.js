import Card from "./components/historias/card/Card";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import FotoPerfil from "./components/perfil/fotoPerfil/FotoPerfil";



function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path='/'element={<Card/>}/>
      
            <Route path='/Remy' element={<FotoPerfil imagem1={URL='https://p0.piqsels.com/preview/472/431/712/beautiful-beauty-bright-fashion-thumbnail.jpg'} nome1='Remy P.'/>}/>
            <Route path='/Travis' element={<FotoPerfil  imagem1={URL="https://cdn.pixabay.com/photo/2014/11/21/00/09/man-539993_1280.jpg"} nome2='Travis'/>}/>
            <Route path='/Cindy' element={<FotoPerfil imagem1={URL='https://p0.piqsels.com/preview/1007/678/464/green-leaf-plant-nature-thumbnail.jpg'} nome3='Cindy' />}/>
            <Route path='/Baker' element={<FotoPerfil imagem1={URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCSECbkRXt7ZZmv9qmW5VR6k_T4r_greYwnw&usqp=CAU"} nome4='Baker'/>}/>
            <Route path='/Howard' element={<FotoPerfil imagem1={URL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7Q9WRwrKgOOybGlN640DIEorradIbUkfhg&usqp=CAU'}nome5='Howard'/>}/>
      
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
