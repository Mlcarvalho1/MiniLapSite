import insta from '../assets/icons/insta.svg'
import facebook from '../assets/icons/facebook.svg'
import email from '../assets/icons/email.svg'
import youtube from '../assets/icons/youtube.svg'

const Footer = () => (
    <div
        className="
            px-4
            py-2
            md:px-8
            flex
            flex-row
            items-center
            justify-between
            tranition
            duration-900
            bg-primary-medium
            max-sm:flex-col 
        "
    >
        <div className="flex flex-row max-sm:flex-col gap-10 max-sm:gap-4 text-white">
            <div>
                <h4>Endereço:</h4>
                <p>Av. Visconde de Jequitinhonha, 1.144,<br/> 9º andar, Sala 910 - Boa Viagem - Recife/PE</p>
            </div>
            <div>
                <p>Celular: (81) 99908 1060 (81) 99705 6342</p>
                <p>Telefone: (81) 2129 1910 / 3462 4162</p>
                <p>Fax: (81) 2129 1911</p>
            </div>
        </div>
        <div className="flex flex-row gap-4 max-sm:mt-8 max-sm: max-sm:gap-8">
            <a href="https://www.youtube.com/@glcmd1" target="_blank" rel="noreferrer">
                <img alt="youtube" width={40} src={youtube}/>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <img alt="facebook" width={40} src={facebook}/>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <img alt="email" width={40} src={email}/>
            </a>
            <a href="https://www.instagram.com/doutorgustavocarvalho/?utm_source=qr&igsh=eWt6YmNrNWpwY2Rq" target="_blank" rel="noreferrer">
                <img alt="insta" width={40} src={insta}/>
            </a>
        </div>
    </div>
);

export default Footer;

