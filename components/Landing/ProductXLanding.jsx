import Hero from './Hero';
import Features from './Features';
import Pricing from './Pricing';
import CTA from './CTA';

export default function ProductXLanding(){
    return(
        <main className='w-full overflow-hidden bg-white text-gray-900'>
            <Hero />
            <Features/>
            <Pricing />
            <CTA />
        </main>
    );
}