
import { useCallback } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

//Constants
import academicFormations from '../Constants/AcademicFormations';
import awards from '../Constants/Awards';

//Icons
import gustavo from '../assets/images/gustavo.png';
import logo2 from '../assets/logo2.svg';
import surgeon from '../assets/icons/surgeon.svg';
import award from '../assets/icons/award.svg';
import title from '../assets/icons/title.svg'
import member from '../assets/icons/member.svg'

const iconByType = {
    surgeon: surgeon,
    award: award,
    title: title,
    member: member
}

const Gustavo = () => {
    const renderAcademicFormation = useCallback(({ title, period, institution, thesisTitle, professor, scholarshipHolder }) => (
        <div key={`ACADEMIC_${title}`} className="flex gap-6">
            <div className="flex flex-col">
                <div className="h-[25px] w-[25px] mt-1 rounded-full bg-primary-medium"/>
                <div className="bg-primary-medium h-full flex-1 w-2 mx-auto my-2 rounded-full"></div>
            </div>
            <div className="pb-10">
                <h3 className="text-xl font-medium text-primary-high">{title.toUpperCase()}</h3>
                {period && <p className="text-lg">Período: {period}</p>}
                {institution && <p className="text-lg">Instituição: {institution}</p>}
                {thesisTitle && <p className="text-lg">Título da Tese: {thesisTitle}</p>}
                {professor && <p className="text-lg">Orientador: {professor}</p>}
                {scholarshipHolder && <p className="text-lg">Bolsista do(a): {scholarshipHolder}</p>}
            </div>
        </div>
    ), []);

    const renderIcon = useCallback(type => (
        <img src={iconByType[type]} alt='logo'/>
    ), [])

    const renderAward = useCallback(({ title, subtitle, description, date, icon }) => (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#C0DAE4', color: '#006992' }}
            contentArrowStyle={{ borderRight: '7px solid  #C0DAE4' }}
            date={date}
            icon={renderIcon(icon)}
            key={`ACADEMIC_${title}_${date}`}
        >
                <h3 className="vertical-timeline-element-title">{title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
                {description && (
                    <p>
                        {description}
                    </p>
                )}
        </VerticalTimelineElement>
    ), [renderIcon]);

    return (
        <div className="mt-16 p-4 md:px-16 items-center flex-col flex">
            <div className="flex max-sm:flex-col gap-16 mb-16 justify-center items-center">
                    <div className="flex-1 max-w-[800px]">
                        <img className="h-20 mb-4" src={logo2} alt="logo"/>
                        <p className='mb-4 text-xl'>
                            A Clínica Cirúrgica Videolaparoscópica Gustavo Carvalho tem como objetivo desenvolver e aprimorar técnicas cirúrgicas por via Laparoscópica com a finalidade de fazer uma medicina de melhor qualidade. Através de estudos científicos, que irão servir de pilares para o conhecimento, o grupo pretende contribuir para o desenvolvimento de medidas que possam propiciar um bem-estar social à população.
                        </p>
                        <p className='text-xl'>
                            Com a intenção de controlar a evolução de patologias e promover melhor prognóstico aos pacientes, o grupo deseja atualizar e criar métodos capazes de produzir um avanço do conhecimento na cirurgia, pricipalmente por via videolaparoscópica, resultando em melhores técnicas cirúrgicas e, portanto, maiores benefícios aos pacientes e a sociedade como um todo.
                        </p>
                    </div>

                    <div className='max-w-[300px] flex-1'>
                        <img alt="presentationImg" className="bg-primary-high flex-1 rounded-3xl mb-8" src={gustavo}>
                        </img>
                        <h3
                            className="text-4xl text-center"
                        >
                            Gustavo Carvalho
                        </h3>
                    </div>
                </div>

                <div className="px-4 max-w-[1200px]">
                    <h2 className="text-3xl font-semibold mb-6">FORMAÇÃO ACADÊMICA</h2>
                    <div className="bg-primary-low p-8 max-h-[80vh] overflow-y-scroll rounded-xl bg-opacity-20 mb-6" >
                        {academicFormations.map(renderAcademicFormation)}
                    </div>
                </div>

                <div className="px-4 max-w-[1200px]">
                    <h2 className="text-3xl font-semibold mb-6">PREMIOS E TÍTULOS</h2>
                    <p className="mb-4 text-xl">
                        O Dr. Gustavo Carvalho é um cirurgião de renome internacional, cuja carreira é marcada por uma busca incessante pela excelência e inovação. Desde seus primeiros anos na profissão, ele tem sido reconhecido por sua liderança em organizações médicas, recebendo prêmios e títulos prestigiosos, tanto nacional quanto internacionalmente. Sua dedicação à pesquisa e ao desenvolvimento de novas técnicas cirúrgicas, aliada à sua ética impecável e compaixão pelos pacientes, o tornam uma figura inspiradora na comunidade médica global, cujo legado de excelência e inovação continuará a influenciar e inspirar futuras gerações de profissionais de saúde.
                    </p>
                    <VerticalTimeline lineColor="#006992">
                        {awards.map(renderAward)}
                    </VerticalTimeline>
                </div>
        </div>
    );
};

export default Gustavo;