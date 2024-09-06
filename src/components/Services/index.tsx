import Image from 'next/image';
import img11 from './rimage1.jpg'; 
import img12 from './rimage2.jpg'; 
import img13 from './rimage3.png'; 
import img14 from './rimage4.jpg';
import img15 from './rimage5.jpg';
import img16 from './SFTV_arguing.jpg'
const Services = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className=" text-gray-600 font-extrabold text-4xl mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="relative overflow-hidden rounded-lg group">
            <Image
              src={img11}
              alt="Permanent Staffing"
              layout="responsive"
              width={500}
              height={350}
              className="rounded-lg transition duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Permanent Staffing</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg group">
            <Image
              src={img12}
              alt="Temporary Staffing"
              layout="responsive"
              width={500}
              height={350}
              className="rounded-lg transition duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Temporary Staffing</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg group">
            <Image
              src={img13}
              alt="Contract Staffing"
              layout="responsive"
              width={500}
              height={350}
              className="rounded-lg transition duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Contract Staffing</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg group">
            <Image
              src={img15}
              alt="Executive Search"
              layout="responsive"
              width={500}
              height={350}
              className="rounded-lg transition duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Executive Search</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg group">
            <Image
              src={img14}
              alt="Recruitment Process Outsourcing"
              layout="responsive"
              width={500}
              height={350}
              className="rounded-lg transition duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Recruitment Process Outsourcing</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg group">
            <Image
              src={img16}
              alt="Payroll Services"
              layout="responsive"
              width={500}
              height={350}
              className="rounded-lg transition duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Payroll Services</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Services;
