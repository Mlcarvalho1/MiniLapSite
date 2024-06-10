import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

//images
import presentation from '../assets/images/presentation.png';

//icons
import logo2 from '../assets/logo2.svg';
import Guts from '../assets/icons/guts.svg';
import Surgery from '../assets/icons/surgery.svg';
import versatility from '../assets/icons/versatility.svg';
import security from '../assets/icons/security.svg';
import recuperation from '../assets/icons/recuperation.svg';

//Components
import ActuationCard from '../Components/ActuationCard';
import Button from '../Components/button';

const Home = () => {
    const navigate = useNavigate();

    const onDiscoverClick = useCallback(() => {
        navigate('/gustavo-carvalho')
    }, [navigate]);

    const onVideoClick = useCallback(() => {
        navigate('/videolaparoscopia')
    }, [navigate]);
    
    const onMiniClick = useCallback(() => {
        navigate('/minilaparoscopia')
    }, [navigate]);
    return (
        <div className="mt-16 p-4 md:px-16">
            <div className="flex max-sm:flex-col gap-16 mb-16 justify-center">
                <div className="flex-1 max-w-[800px]">
                    <img className="h-20 mb-4" src={logo2} alt="logo"/>
                    <p className='mb-4 text-xl'>
                        A Clínica Cirúrgica Videolaparoscópica Gustavo Carvalho tem como objetivo desenvolver e aprimorar técnicas cirúrgicas por via Laparoscópica com a finalidade de fazer uma medicina de melhor qualidade. Através de estudos científicos, que irão servir de pilares para o conhecimento, o grupo pretende contribuir para o desenvolvimento de medidas que possam propiciar um bem-estar social à população. Com a intenção de controlar a evolução de ...
                    </p>
                    <Button className="text-primary-medium border-primary-medium w-fit" variant="low" onClick={onDiscoverClick}>
                        Saiba mais
                    </Button>
                </div>

                <div className='max-w-[700px] flex-1'>
                    <img alt="presentationImg" className="bg-primary-high flex-1 rounded-3xl" src={presentation}>
                    </img>
                </div>
            </div>

            <div className="justify-center flex flex-col items-center mb-16">
                <h2 className="text-4xl text-primary-medium mb-6">ÁREAS DE ATUAÇÃO</h2>

                <div className="flex gap-8 max-sm:flex-col">
                    <ActuationCard icon={Surgery} title="Cirurgia Videolaparoscópica" onClick={onVideoClick}>
                        Cirurgia abdominal executada por meio de pequenos orifícios no abdômen do paciente. É a cirurgia de invasão mínima.
                    </ActuationCard>
                    <ActuationCard icon={Guts} title="Cirurgia do Aparelho Digestivo" onClick={onMiniClick}>
                        • Doença do refluxo gastro-esofágico
                        <br/> 
                        • Esôfago de Barrett
                        <br/>
                        • Doença da vesícula biliar
                    </ActuationCard>
                </div>
            </div>

            <div className="justify-center flex flex-col items-center">
                <h2 className="text-4xl text-primary-medium mb-16">Minilaparoscopia</h2>

                <div className='flex max-sm:flex-col gap-16'>
                    <div className='flex flex-col'>
                        <img className="h-[120px] relative mb-6" src={recuperation} alt="guts"/>
                        <p className='text-center w-[200px]'>
                            Recuperação mais rápida e com cicatrízes praticamente invisíveis
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <img className="h-[120px] relative mb-6" src={security} alt="guts"/>
                        <p className='text-center w-[200px]'>
                            Mais segura que a laparoscopia, entre outros procedimentos
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <img className="h-[120px] relative mb-6" src={versatility} alt="guts"/>
                        <p className='text-center w-[200px]'>
                        Procedimento altamente versátil, pode ser aplicado em diversar cirurgias
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
