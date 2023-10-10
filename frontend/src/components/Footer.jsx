
export default function Footer() {
    
    return (
        <div style={{padding: "4px 0px", backgroundImage :"radial-gradient(circle, rgba(238,174,174,1) 0%, rgba(215,233,148,1) 100%)", textAlign: 'center', position:'fixed', width: '100%',height : '90px', bottom : '0', left: '0', right: '0', zIndex : '999'}}>
            
            <div className="text-center">
                     Full Stack Engineer <br />
                    <h5>
                    Crafted with ❤️ by <a href="https://personal-website-neon-theta.vercel.app/" style={{textDecoration : "none", color: "red"}}>Danish Razzaq</a>
                    </h5>
            </div> 

            <div className="text-center">
                <a href="https://www.linkedin.com/in/muhammad-danish-4059b9256/" target="_blank" rel="noreferrer">
                    <i className="bi bi-linkedin mx-2" style={{fontSize : "20px"}}></i>
                </a>
                
                <a href="https://personal-website-neon-theta.vercel.app/" target="_blank" rel="noreferrer">
                    <i className="bi bi-globe mx-2" style={{fontSize : "20px"}}></i>
                </a>

                <a href="https://github.com/Danish-Razzaq" target="_blank" rel="noreferrer">
                    <i className="bi bi-github mx-2" style={{fontSize : "21px"}}></i>
                </a>

                <a href="mailto:danishrazzaq371@gmail.com" target="_blank" rel="noreferrer">
                    <i className="bi bi-envelope-fill mx-2" style={{fontSize : "21px"}}></i>
                </a>
            </div>
        </div>
       
    )
}
