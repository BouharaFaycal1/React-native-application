import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron , Grid , Row , Col , Image , Button } from 'react-bootstrap';
//import axios from 'axios';
import './Home.css';

export default class Home extends Component{



    constructor(props){
        super(props);
        //declaration d un objet state
        this.state = {
          videos: [],
        }    
      }

    // Fonction qui recupere les infos de notre base de donnée
     componentDidMount(){
    
      // on passe l'url de notre api pour la récupération des infos du fichier json
      fetch('https://artisanjeux.000webhostapp.com/apiSite.php')
      .then(res => res.json())
      // on fait la mise à jour de notre objet state du composant video
      .then(data => this.setState({videos: data.video}))
      .catch(error => console.log('parsing error',error))

    }
    
    render(){
        //console.log(this.state.videos);
        /**
         * Ici on recupere a partir de notre state
         * Apres la fonction map nous aide a convertir objet en tableau
         * Et pour parcourir tout les objets  on fait un key
         * Apres on recupere les infos des artisans et users 
         * pour voir le gagnant de chaq region (ville) [voir apiSite.php]  
         *
         * 
         */
        return(
            <div> 
                <Jumbotron align="center">
                                <h2>Bienvenue sur Application Web VRAFAA</h2>
                                <p>Ici vous trouverez les utilisateurs ainsi que les artisans gagnants pour chaque ville selon les votes des visiteurs de l'application mobile</p>
                                <Link to="#">
                                    <Button bsStyle="primary">Learn More</Button>
                                </Link>
                 </Jumbotron>
                {   
                    this.state.videos.map((video) =>{
                    return <Grid >
                            
                            <div class="i-am-centered">
                            <Row className="show-grid text-center" >
                        
                                 <Col xs={12} sm={4} className="pwerson-wrapper" key={video.id}  >
                                    <Image src="assets/user.png" circle className="profile-pic"/> 
                                         <h3>{video.name}</h3>
                                         <p>{video.ville}</p>
                                         <p>{video.winner}</p>
                                  </Col> 
                                  <Col xs={12} sm={4} className="pwerson-wrapper" />
                                  <Col xs={12} sm={4} className="pwerson-wrapper" key={video.id}  >
                                    <Image src="assets/pic.png" circle className="profile-pic"/> 
                                         <h3>{video.titre}</h3>
                                         <p>{video.ville}</p>
                                         <p>{video.winner}</p>
                                  </Col> 
                            </Row>
                            </div>
                        </Grid>
                    })
                }
            </div>

            
        )
        
        
       
    
    }



} 
    