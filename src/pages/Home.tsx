import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <section className='homeContainer'>
          <button
            className='glow-on-hover'
            role='button'
            onClick={() => navigate('./Scroll-animations')}
          >
            Scroll animations
          </button>
          <button
            className='glow-on-hover'
            role='button'
            onClick={() => navigate('./galaxy')}
          >
            Galaxy
          </button>
          <button
            className='glow-on-hover'
            role='button'
            onClick={() => navigate('./geometries')}
          >
            Geometries
          </button>
        </section>
      </main>
    </>
  );
};

export default Home;
