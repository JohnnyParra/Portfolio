import { useParams } from 'react-router-dom';

import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer';

const getId: {[key: string]: number}= {
  "blog-application": 0,
  "Jeopardy": 1,
}

export default function Project() {
  const { url } = useParams();

  console.log(getId[url ?? 0]);

  return(
    <main className="project">
      <Header />
      Project
      <Footer />
    </main>
  )
}