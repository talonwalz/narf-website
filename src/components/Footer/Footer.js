import React from 'react'
// import image from '../../images/kokopellis.jpg'
import image from '../../images/logoIcon.png'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
    return (
        <>
        <header className="footer-container">
        <ul className="left">
                <Link to="/"><li>HOME</li></Link>
                <Link><li>OUR TEAM</li></Link>
                <Link><li>SERVICES</li></Link>
                <Link><li>NEW PATIENT</li></Link>
                <Link><li>CONTACT US</li></Link>
                <Link to="/auth" ><li>LOGIN</li></Link>
            </ul>   
            
            <section className="middle">
                <p>Northern Arizona Rehabilitation And Fitness</p>
                <p>480 S. Willard St.</p>
                <p>Cottonwood, AZ 86326</p>
                <p>(928) 649-9726</p>
            </section>
            <article className="right">
                <img src={image} alt="NARF logo"/>    
                <a href="https://www.facebook.com/norazrehab"><img className="fb" src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="facebook link"/></a>

                <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjYiIGhlaWdodD0iMjYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzM0OThkYiI+PHBhdGggZD0iTTE0MS4wNCwxMy43NmgtMTEwLjA4Yy05LjQ5NDQsMCAtMTcuMiw3LjcwNTYgLTE3LjIsMTcuMnYxMTAuMDhjMCw5LjQ5NDQgNy43MDU2LDE3LjIgMTcuMiwxNy4yaDExMC4wOGM5LjQ5NDQsMCAxNy4yLC03LjcwNTYgMTcuMiwtMTcuMnYtMTEwLjA4YzAsLTkuNDk0NCAtNy43MDU2LC0xNy4yIC0xNy4yLC0xNy4yek0xMjcuMjgsNjUuMzZoLTYuODhjLTcuMzYxNiwwIC0xMC4zMiwxLjcyIC0xMC4zMiw2Ljg4djEwLjMyaDE3LjJsLTMuNDQsMTcuMmgtMTMuNzZ2NTEuNmgtMTcuMnYtNTEuNmgtMTMuNzZ2LTE3LjJoMTMuNzZ2LTEwLjMyYzAsLTEzLjc2IDYuODgsLTI0LjA4IDIwLjY0LC0yNC4wOGM5Ljk3NiwwIDEzLjc2LDMuNDQgMTMuNzYsMy40NHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="/>
                
                

            </article>   
        </header>
        </>
    )
}

export default Footer