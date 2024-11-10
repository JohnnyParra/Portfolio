import { ScrollRestoration, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Helmet } from 'react-helmet';

import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer';
import BlurImage from '../../components/BlurImage/BlurImage';

import portfolioData from '../../misc/PortfolioData';

import './Project.css'

export default function Project() {
  const { id } = useParams<string>();
  const data = portfolioData[Number(id)];

  const bodyElements = data.body!.map(body => {
    const sectionElements = body.map(section => {
      let type: string = section.type;
      if (type === 'title') {
        return (<div className={type}>{section.content}</div>)
      } else if (type === 'text') {
        return (<div className={type}>{section.content}</div>)
      } else if (type === 'images') {
        const contentArray: string[][] = section.content as string[][];
        const imageElements = contentArray.map(images => {
          return (
            <BlurImage
              key={nanoid()}
              className={'image'}
              style={undefined}
              reference={undefined}
              alt={undefined}
              loading={"lazy"}
              handleClick={() => {}}
              lowQualityImg={images[1] || images[1]}
              highQualityImg={images[0]}
            />
          )
        });
        return (<div className={type}>{imageElements}</div>)
      } else if (type === 'link') {
        return (
          <div className="link">
            <a href={section.url} target="_blank">{section.content}</a>
          </div>
        )
      } else {
        throw Error('Incorrect Type Used Project.tsx')
      }
    })
    return (<div key={nanoid()} className='sections'>{sectionElements}</div>)
  });

  return(
    <main className="project">
      <Helmet>
        <title>{data.title} | Johnny's Portfolio</title>
        <meta name='description' content={`This is the ${data.title} project page of Johnny's portfolio website`} />
        <meta name='content' content={`${data.title}, project, johnny, parra, software, developer`} />
      </Helmet>
      <Header />
      <div className="content">
        <div className="main-title">{data.title}</div>
        {bodyElements}
      </div>
      <Footer />
      <ScrollRestoration />
    </main>
  )
}