import { Link } from 'react-router';
import '../styles/header.css';

export default function Header() {
  return (
    <header>
      <div className='text-logo'>      <a
        href="https://www.adelaide.edu.au/learning/ua/media/2923/pwc-australia-client-briefing-pack-the-world-museum-002.pdf"
        className="icon font-inria-serif-bold font-size-64 black"
        target="_blank"
        rel="noreferrer"
      >
        DI.
      </a>
      <a href="https://www.adelaide.edu.au/learning/ua/media/2923/pwc-australia-client-briefing-pack-the-world-museum-002.pdf" className='subtext font-size-12 font-instrument-sans black'>
      <span style={{ marginLeft: '0px' }}>The</span>
  <span style={{ marginLeft: '5px' }}>Digitisation</span>
  <span style={{ marginLeft: '10px' }}>Initiative</span>
      </a>
      </div>




      <ul className='font-instrument-sans font-size-20'>
        <li>
          <Link to="/"><p className='hover-underline-animation left'>PROBLEM.</p></Link>
        </li>
        <li>
          <Link to="/solutionpage" style={{ paddingRight: '0.5rem' }}><p className='hover-underline-animation left'>SOLUTION.</p></Link>
        </li>
        <li>
          <Link to="/timelinepage"><p className='hover-underline-animation left'>TIMELINE.</p></Link>
        </li>
      </ul>
    </header>
  );
}
