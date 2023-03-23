import './GamingLibrary.css';
import {GamingLibraryCard , SectionHeader, SectionWrapper} from '../../Components/index';
import GamingLibraryData from '../../Data/GamingLibraryData';


const  GamingLibrary = () => {
    
    const cards = GamingLibraryData.map(card => {
        return <GamingLibraryCard image={card.image} title={card.title} category={card.category} date_added={card.date_added} hours_played={card.hours_played} currently={card.currently} />
    })
  return (
    <SectionWrapper>
        <SectionHeader>GamingLibrary</SectionHeader>
        <div className='gaming-library-cards'>
            {cards}
        </div>    
    </SectionWrapper>
  );
}
export default GamingLibrary;