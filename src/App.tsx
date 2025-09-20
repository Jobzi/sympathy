import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Footer from './components/Footer';
import SEO from './components/SEO';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and wait for images to load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Also check if all images are loaded
    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    
    const checkAllImagesLoaded = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    images.forEach(img => {
      if (img.complete) {
        checkAllImagesLoaded();
      } else {
        img.addEventListener('load', checkAllImagesLoaded);
        img.addEventListener('error', checkAllImagesLoaded);
      }
    });

    return () => {
      clearTimeout(timer);
      images.forEach(img => {
        img.removeEventListener('load', checkAllImagesLoaded);
        img.removeEventListener('error', checkAllImagesLoaded);
      });
    };
  }, []);

  return (
    <>
      <SEO url='https://sympathystudio.com' />
      <LoadingScreen isLoading={isLoading} />
      <main className={`min-h-screen transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <Hero />
        <Portfolio />
        <Services />
        <Footer />
      </main>
    </>
  );
}

export default App;