import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';

import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer';
import BlurImage from '../../components/BlurImage/BlurImage';

import portfolioData from '../../misc/PortfolioData';

import './Project.css'

export default function Project() {
  const { id } = useParams<string>();
  const data = portfolioData[Number(id)];

  const bodyElements = data.body.map(body => {
    const sectionElements = body.map(section => {
      let type: string = section.type;
      if (type === 'title') {
        return (<div key={nanoid()} className={type}>{section.content}</div>)
      } else if (type === 'text') {
        return (<div key={nanoid()} className={type}>{section.content}</div>)
      } else if (type === 'images') {
        const imageElements = section.content.map(images => {
          return (
            <BlurImage
              key={nanoid()}
              className={'image'}
              style={undefined}
              reference={undefined}
              alt={undefined}
              handleClick={() => {}}
              lowQualityImg={images[1] || images[1]}
              highQualityImg={images[0]}
            />
          )
        });
        return (<div key={nanoid()} className={type}>{imageElements}</div>)
      } else {
        throw Error('Incorrect Type Used Project.tsx')
      }
    })
    return (<div key={nanoid()} className='sections'>{sectionElements}</div>)
  });

  return(
    <main className="project">
      <Header />
      <div className="content">
        <div className="main-title">{data.title}</div>
        {bodyElements}
      </div>
      <Footer />
    </main>
  )
}