import { projectsSectionBg } from "@/utils/imagesUrl";
import MainSection from "../components/common/mainSection";
import ProjectCard from "../components/projectCard";
import { projectsDetail } from "@/utils/constants";

const Projects = () => {
  return (
    <div>
      <MainSection
        sectionImg={projectsSectionBg}
        title='Empowering Businesses Through Value Driven Solutions'
        description='From vision to reality, our projects have reshaped many businesses, empowering them to thrive and achieve their highest potential.'
        pageName='Projects'
      />
      <div className='container max-w-[1600px]'>
        <div className="flex flex-col items-center pb-14 pt-[80px] md:pt-[100px]">
          <div className='w-full md:w-[600px] text-[24px] md:text-[32px] text-black300 leading-10 font-black uppercase text-center'>
            Our Project <span className='text-blue600'> Showcase </span>
          </div>
          <div className='w-full px-[30px] lg:px-[140px] text-[16px] md:text-[20px] text-black300 leading-8 font-normal text-center mt-8'>
            Explore recent projects we have worked on and achieved global success. Our portfolio includes web apps, mobile solutions,
            and stunning UI/UX designs, showcasing our diverse capabilities and client impact.
          </div>
        </div>
        {
          projectsDetail.map(({ascending, height, image, name, title, description, link}, index) => (
            <div key={index}>
              <ProjectCard
                ascending={ascending}
                height={height}
                image={image}
                name={name}
                title={title}
                description={description}
                link={link}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Projects;
