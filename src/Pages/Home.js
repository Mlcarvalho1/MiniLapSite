import React from 'react';

import logo2 from '../assets/logo2.svg';
import Guts from '../assets/icons/guts.svg'
import Surgery from '../assets/icons/surgery.svg'

import ActuationCard from '../Components/ActuationCard';
import Button from '../Components/button';

const Home = () => {
    return (
        <div className="mt-16 p-4 lg:px-16">
            <div className="flex max-sm:flex-col gap-16 mb-16">
                <div className="flex-1">
                    <img className="h-20 mb-4" src={logo2} alt="logo"/>
                    <p className='mb-4 text-xl'>
                        A Clínica Cirúrgica Videolaparoscópica Gustavo Carvalho tem como objetivo desenvolver e aprimorar técnicas cirúrgicas por via Laparoscópica com a finalidade de fazer uma medicina de melhor qualidade. Através de estudos científicos, que irão servir de pilares para o conhecimento, o grupo pretende contribuir para o desenvolvimento de medidas que possam propiciar um bem-estar social à população. Com a intenção de controlar a evolução de ...
                    </p>
                    <Button variant="low">
                        Saiba mais
                    </Button>
                </div>

                <div className="h-[500px] w-[200px] bg-primary-high flex-1 rounded-3xl">
                </div>
            </div>

            <div className="justify-center flex flex-col items-center mb-16">
                <h2 className="text-4xl text-primary-medium mb-6">ÁREAS DE ATUAÇÃO</h2>

                <div className="flex gap-8 max-sm:flex-col">
                    <ActuationCard icon={Surgery} title="Cirurgia Videolaparoscópica">
                        Cirurgia abdominal executada por meio de pequenos orifícios no abdômen do paciente. É a cirurgia de invasão mínima.
                    </ActuationCard>
                    <ActuationCard icon={Guts} title="Cirurgia do Aparelho Digestivo">
                        {`• Doença do refluxo gastro-esofágico \n • Esôfago de Barrett \n • Doença da vesícula biliar`}
                    </ActuationCard>
                </div>
            </div>

            <div className="justify-center flex flex-col items-center">
                <h2 className="text-4xl text-primary-medium mb-6">Minilaparoscopia</h2>

            </div>
        </div>
    ) 
}

export default Home;
