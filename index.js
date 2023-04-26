

function Header(){
    return (
        <div className="header">
             <div className="content">
                    Anhsotank
             </div>
             <div className="bg"> </div>
            <div className="astronaut"></div>
             <div className="earth"></div>
        </div>
        
        
    )
}
function Static(){
    return(
        <div className="static">
            <div className="CV">
                <div className="profile1">
                    <div className="profile1_image">
                            
                    </div>
                    <div className="profile1_PersonalDetails">
                        <h1>Trương Quốc Anh
                            <br></br>
                            <br></br>
                            FE Dev
                        </h1>
                        
                        <div className="profile1_PersonalDetails_content">

                            <div className="contact">
                                <div className="title">contact</div>
                                <ul>
                                    <li>
                                        <i class="fa-solid fa-cake-candles"></i>
                                        : 15/12/2003
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-phone"></i>
                                       : 0702312027
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-envelope"></i>   
                                        : truonganh15122003@gmail.com
                                    </li>
                                </ul>
                            </div>
                            <div className="langurs">
                                <div className="title">Langurs</div>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            <div className="suivre">
                                <div className="title">Suivre</div>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                            </div>
                            <div className="loisirs">
                                <div className="title">Loisirs</div>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                            </div>
                        </div>
                  </div>
                </div>
                <div className="profile2">

                </div>
            </div>
         </div>
    )
}


function App(){
    return(
        <div id="container">
            <Header />
            <Static/>
        </div>
    )
}
ReactDOM.render(<App />,document.querySelector('.root'))